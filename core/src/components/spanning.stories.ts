import { storiesOf } from '@storybook/html';

storiesOf('Spanning Stripe', module)
  .add('Default', (): string => {
    return `
      <neo-grid class="neo-small">
        <neo-row>
          <neo-col size="6">
            <p eyebrow>Eyebrow Text</p>
            <h2>Definition Card</h2>
            <neo-wysiwyg base="18">
              <p>
                Body Copy of up to three lines. Maecenas faucibus mollis interdum. Donec sed odio duimollis interdum. Body Copy of up to three lines
              </p>
            </neo-wysiwyg>
          </neo-col>
          <neo-col class="neo-flex neo-align-items-center" size="4" offset="2">
            <neo-buttons>
              <neo-button>Primary Action CTA</neo-button>
              <neo-button fill="clear">Secondary Action CTA</neo-button>
            </neo-buttons>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  })
  .add('With Form', (): string => {
    return `
      <neo-grid class="neo-small">
        <neo-row>
          <neo-col class="neo-flex neo-flex-column neo-align-items-center" size="6" offset="3">
            <p eyebrow>Eyebrow Text</p>
            <h2>Definition Card</h2>
            <neo-wysiwyg base="18" class="neo-text-center">
              <p>
                Body Copy of up to three lines. Maecenas faucibus mollis interdum. Donec sed odio duimollis interdum. Body Copy of up to three lines
              </p>
            </neo-wysiwyg>
            <form>
              <input type="text" />
            </form>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  });
