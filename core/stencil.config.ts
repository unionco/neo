import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'neo',
  plugins: [
    sass()
  ],
  preamble: '(C) Union https://union.co - MIT License',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@union/core',
      proxiesFile: '../packages/react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
