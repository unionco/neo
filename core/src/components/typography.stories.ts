import { storiesOf } from '@storybook/html';
import { number } from '@storybook/addon-knobs';

storiesOf('Typography', module)
  .add('Large', (): string => {
    return `
      <style>
        :root {
          --neo-font-base: ${number('--neo-font-base', 16, { min: 12, max: 24, step: 1 })}px;
        }
      </style>
      <div large>
        <p eyebrow>Eyebrow / 1.25</p>
        <h1 class="neo-display">Display Text</h1>
        <h1>H1. Heading Text</h1>
        <h2>H2. Heading Text</h2>
        <h3>H3. Heading Text</h3>
        <h4>H4. Heading Text</h4>
        <h5>H5. Heading Text</h5>
        <h6>H6. Heading Text</h6>
        <p>Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
        <p><small>something small</small></p>
      </div>
    `;
  })
  .add('Default', (): string => {
    return `
      <style>
        :root {
          --neo-font-base: ${number('--neo-font-base', 16, { min: 12, max: 24, step: 1 })}px;
        }
      </style>
      <div>
        <p eyebrow>Eyebrow / 1</p>
        <h1 class="neo-display">Display Text</h1>
        <h1>H1. Heading Text</h1>
        <h2>H2. Heading Text</h2>
        <h3>H3. Heading Text</h3>
        <h4>H4. Heading Text</h4>
        <h5>H5. Heading Text</h5>
        <h6>H6. Heading Text</h6>
        <p>Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
        <p><small>something small</small></p>
      </div>
    `;
  })
  .add('Medium', (): string => {
    return `
      <style>
        :root {
          --neo-font-base: ${number('--neo-font-base', 16, { min: 12, max: 24, step: 1 })}px;
        }
      </style>
      <div medium>
        <p eyebrow>Eyebrow / 0.75</p>
        <h1 class="neo-display">Display Text</h1>
        <h1>H1. Heading Text</h1>
        <h2>H2. Heading Text</h2>
        <h3>H3. Heading Text</h3>
        <h4>H4. Heading Text</h4>
        <h5>H5. Heading Text</h5>
        <h6>H6. Heading Text</h6>
        <p>Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
        <p><small>something small</small></p>
      </div>
    `;
  })
  .add('Small', (): string => {
    return `
      <style>
        :root {
          --neo-font-base: ${number('--neo-font-base', 16, { min: 12, max: 24, step: 1 })}px;
        }
      </style>
      <div small>
        <p eyebrow>Eyebrow / 0.5</p>
        <h1 class="neo-display">Display Text</h1>
        <h1>H1. Heading Text</h1>
        <h2>H2. Heading Text</h2>
        <h3>H3. Heading Text</h3>
        <h4>H4. Heading Text</h4>
        <h5>H5. Heading Text</h5>
        <h6>H6. Heading Text</h6>
        <p>Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
        <p><small>something small</small></p>
      </div>
    `;
  });
