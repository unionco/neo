import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';

storiesOf('Image', module)
  .add('default', (): string => {
    return `
      <h2>Tag: neo-img</h2>
      <p>Lazy loads images</p>
      <div style="max-width: 250px;">
        <neo-img src="${text('URL', 'http://placehold.it/250x250.png')}" alt="test image" />
      </div>
    `;
  })
