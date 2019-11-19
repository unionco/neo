import { storiesOf } from '@storybook/html';
import { number } from '@storybook/addon-knobs';

storiesOf('Gallery', module)
  .add('Default', (): string => {
    const val = number('Gallery Items', 2);
    const arr = [...Array(val).keys()];
    const items = arr.map(() => {
      return "<neo-gallery-item><neo-img src=\"https://placehold.it/345x200.png?text=Image\"></neo-img></neo-gallery-item>";
    });

    return `
      <neo-gallery>
        ${items.join('')}
      </neo-gallery>
    `;
  });
