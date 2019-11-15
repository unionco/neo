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
  })
  .add('Spacing', (): string => {
    return `
      <style>
        :root {
          --neo-spacing-base: ${number('--neo-spacing-base', 16, { min: 12, max: 24, step: 1 })}px;
        }
        .wrapper {
          border: 1px solid #eee;
          background: var(--neo-color-primary);
        }
        .spacer {
          background: white;
          display: block;
          min-height: 25px;
          position: relative;
        }
        .spacer span {
          margin-left: 16px;
        }
      </style>
      <div>
        <h2>Margin / Padding</h2>
        <div class="wrapper"><div class="spacer m-l-0"><span>0 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-1"><span>1 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-2"><span>2 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-3"><span>3 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-4"><span>4 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-5"><span>5 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-6"><span>6 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-8"><span>8 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-10"><span>10 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-12"><span>12 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-16"><span>16 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-20"><span>20 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-24"><span>24 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-32"><span>32 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-40"><span>40 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-48"><span>48 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-56"><span>56 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer m-l-64"><span>64 * 1rem</span></div></div>
      </div>
    `;
  });
