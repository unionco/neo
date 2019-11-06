# Neo by Union

Neo is our attempt at scaleable and reusable component library built with [Stencil](https://github.com/ionic-team/stencil) and inspired by the [ionic](https://github.com/ionic-team/ionic) package.

Neo is based on [Web Components](https://www.webcomponents.org/introduction) and comes with many significant performance, usability, and feature improvements over the past versions.


### Packages

| Project | Package | Version | Links |
| ------- | ------- | ------- |:-----:|
| **Core** | [`@neo/core`](https://www.npmjs.com/package/@neo/core) | [![version](https://img.shields.io/npm/v/@neo/core/latest.svg)](https://www.npmjs.com/package/@neo/core) | [`README.md`](core/README.md)
| **React** | [`@neo/react`](https://www.npmjs.com/package/@neo/react) | [![version](https://img.shields.io/npm/v/@neo/react/latest.svg)](https://www.npmjs.com/package/@neo/react) | [`README.md`](packages/react/README.md)

### Getting Started

Neo can be used in vanilla and react projects.

`npm install`
`npm run all`

#### For Vanilla

##### Usage

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <neo-button>Neo Button</neo-button>
  <script src="https://unpkg.com/@union/neo-core@0.0.6/dist/neo.js"></script>
</body>
</html>
```

#### For React

##### Install
`npm install @union/neo-react`

##### Usage
```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NeoButtons, NeoButton } from '@union/neo-react';

/* Core CSS required for Neo components to work properly */
import '@union/neo-react/css/core.css';

/* Basic CSS for apps built with Neo */
import '@union/neo-react/css/normalize.css';
import '@union/neo-react/css/structure.css';
import '@union/neo-react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@union/neo-react/css/padding.css';
import '@union/neo-react/css/text-alignment.css';
import '@union/neo-react/css/text-transformation.css';
import '@union/neo-react/css/flex-utils.css';
import '@union/neo-react/css/display.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NeoButtons layout="row">
          <NeoButton color="danger">neo danger button</NeoButton>
          <NeoButton fill="clear" color="primary">neo primary button</NeoButton>
        </NeoButtons>
      </header>
    </div>
  );
}

export default App;


```
