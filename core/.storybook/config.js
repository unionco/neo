import { defineCustomElements } from '../loader';

/* Core CSS required for Ionic components to work properly */
import '../css/core.css';

/* Basic CSS for apps built with Ionic */
import '../css/normalize.css';
import '../css/structure.css';
import '../css/typography.css';

/* Optional CSS utils that can be commented out */
import '../css/padding.css';
import '../css/text-alignment.css';
import '../css/text-transformation.css';
import '../css/flex-utils.css';
import '../css/display.css';

// TODO: defineCustomElements() is asyncronous
// We need to use the promise
defineCustomElements(window);

import { addParameters, configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// Config
addParameters({
  options: {
    panelPosition: 'bottom',
  }
});
addDecorator(withKnobs);
addDecorator(withA11y);

// Import all files in the stories directory ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.ts$/);

// Add global decorators
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
