const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');
const inquirer = require('inquirer');
const Listr = require('listr');
const semver = require('semver');
const tc = require('turbocolor');

const rootDir = path.join(__dirname, '../');

const namespace = "@union";
const packages = [
  'core',
  'packages/react',
];

function readPkg(project) {
  const packageJsonPath = packagePath(project);
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
}

function writePkg(project, pkg) {
  const packageJsonPath = packagePath(project);
  const text = JSON.stringify(pkg, null, 2);
  return fs.writeFileSync(packageJsonPath, `${text}\n`);
}

function packagePath(project) {
  return path.join(rootDir, project, 'package.json');
}

function projectPath(project) {
  return path.join(rootDir, project);
}

const isValidVersion = input => Boolean(semver.valid(input));

function isVersionGreater(oldVersion, newVersion) {
  if (!isValidVersion(newVersion)) {
    throw new Error('Version should be a valid semver version.');
  }
  return true;
}

function preparePackage(tasks, package, version, install) {
  const projectRoot = projectPath(package);
  const pkg = readPkg(package);

  const projectTasks = [];

  if (package !== 'docs') {
    if (package !== 'core') {
      projectTasks.push({
        title: `${pkg.name}: npm link ${namespace}/core`,
        task: () => execa('npm', ['link', `${namespace}/core`], { cwd: projectRoot })
      });
    }

    projectTasks.push({
      title: `${pkg.name}: build`,
      task: () => execa('npm', ['run', 'build'], { cwd: projectRoot })
    });

    if (package === 'core' || package === 'packages/react') {
      projectTasks.push({
        title: `${pkg.name}: npm link`,
        task: () => execa('npm', ['link'], { cwd: projectRoot })
      });
    }
  }

  // Add project tasks
  tasks.push({
    title: `Prepare ${tc.bold(pkg.name)}`,
    task: () => new Listr(projectTasks)
  });
}

module.exports = {
  rootDir,
  packages,
  readPkg,
  writePkg,
  packagePath,
  projectPath,
  isVersionGreater,
  isValidVersion,
  preparePackage
};
