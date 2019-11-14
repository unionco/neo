import { storiesOf } from '@storybook/html';

storiesOf('Buttons', module)
  .add('Default', (): string => {
    return `
      <h2>Tag: neo-button</h2>
      <p>All types of CTA's</p>
      <div>
        <p eyebrow>Colors</p>
        <neo-buttons layout="col">
          <neo-button color="primary">Primary</neo-button>
          <neo-button color="secondary">Secondary</neo-button>
          <neo-button color="tertiary">Tertiary</neo-button>
          <neo-button color="success">Success</neo-button>
          <neo-button color="warning">Warning</neo-button>
          <neo-button color="danger">Danger</neo-button>
          <neo-button color="light">Light</neo-button>
          <neo-button color="medium">Medium</neo-button>
          <neo-button color="dark">Dark</neo-button>
        </neo-buttons>

        <p eyebrow>Sizes</p>
        <neo-buttons layout="col">
          <neo-button size="large" color="primary">Large</neo-button>
          <neo-button color="primary">Default</neo-button>
          <neo-button size="small" color="primary">Small</neo-button>
        </neo-buttons>

        <p eyebrow>Outline</p>
        <neo-buttons layout="col">
          <neo-button fill="outline" color="primary">Primary</neo-button>
          <neo-button fill="outline" color="secondary">Secondary</neo-button>
          <neo-button fill="outline" color="tertiary">Tertiary</neo-button>
          <neo-button fill="outline" color="success">Success</neo-button>
          <neo-button fill="outline" color="warning">Warning</neo-button>
          <neo-button fill="outline" color="danger">Danger</neo-button>
          <neo-button fill="outline" color="light">Light</neo-button>
          <neo-button fill="outline" color="medium">Medium</neo-button>
          <neo-button fill="outline" color="dark">Dark</neo-button>
        </neo-buttons>

        <p eyebrow>Clear</p>
        <neo-buttons layout="col">
          <neo-button fill="clear" color="primary">Primary</neo-button>
          <neo-button fill="clear" color="secondary">Secondary</neo-button>
          <neo-button fill="clear" color="tertiary">Tertiary</neo-button>
          <neo-button fill="clear" color="success">Success</neo-button>
          <neo-button fill="clear" color="warning">Warning</neo-button>
          <neo-button fill="clear" color="danger">Danger</neo-button>
          <neo-button fill="clear" color="light">Light</neo-button>
          <neo-button fill="clear" color="medium">Medium</neo-button>
          <neo-button fill="clear" color="dark">Dark</neo-button>
        </neo-buttons>
      </div>
    `;
  })
