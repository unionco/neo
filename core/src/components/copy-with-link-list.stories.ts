import { storiesOf } from '@storybook/html';

storiesOf('Copy With Link List', module)
  .add('Default', (): string => {
      return `
      <neo-grid class="neo-small">
        <neo-row>
          <neo-col size="6">
            <h2>Headline Text</h2>
            <neo-wysiwyg base="18">
              <p>
                Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna.
              </p>
            </neo-wysiwyg>
            <neo-buttons>
              <neo-button>Primary Action CTA</neo-button>
            </neo-buttons>
          </neo-col>
          <neo-col size="6">
            <neo-link-list>
                <neo-link-list-item hover href="#">Retail</neo-link-list-item>
                <neo-link-list-item hover href="#">Healthcare</neo-link-list-item>
                <neo-link-list-item hover href="#">Retail</neo-link-list-item>
                <neo-link-list-item href="#">Healthcare</neo-link-list-item>
            </neo-link-list>
          </neo-col>
        </neo-row>
      </neo-grid>
      `;
  })