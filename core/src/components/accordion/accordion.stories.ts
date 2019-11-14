import { storiesOf } from '@storybook/html';

storiesOf('Accordion', module)
  .add('Default', (): string => {
    return `
      <h2>Tag: neo-accordion & neo-accordion-item</h2>
      <p>Basic accordion with zero configuration</p>
      <style>
        neo-accordion-item h2 {
          margin: 0;
        }
      </style>
      <div>
        <neo-accordion>
          <neo-accordion-item>
            <div slot="trigger">
              <h3>Test</h3>
            </div>
            <div slot="content">
              <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>
            </div>
          </neo-accordion-item>

          <neo-accordion-item>
            <div slot="trigger">
              <h3>Test</h3>
            </div>
            <div slot="content">
              <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>
            </div>
          </neo-accordion-item>

          <neo-accordion-item>
            <div slot="trigger">
              <h3>Test</h3>
            </div>
            <div slot="content">
              <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>
            </div>
          </neo-accordion-item>
        </neo-accordion>
      </div>
    `;
  })
  .add('Close Others', (): string => {
    return `
      <h2>Tag: neo-accordion & neo-accordion-item</h2>
      <p>Basic accordion with auto close items</p>
      <style>
        neo-accordion-item h2 {
          margin: 0;
        }
      </style>
      <div>
        <neo-accordion close-others="true">
          <neo-accordion-item>
            <div slot="trigger">
              <h3>Test</h3>
            </div>
            <div slot="content">
              <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>
            </div>
          </neo-accordion-item>

          <neo-accordion-item>
            <div slot="trigger">
              <h3>Test</h3>
            </div>
            <div slot="content">
              <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>
            </div>
          </neo-accordion-item>

          <neo-accordion-item>
            <div slot="trigger">
              <h3>Test</h3>
            </div>
            <div slot="content">
              <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.</p>
              <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.</p>
              <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.</p>
            </div>
          </neo-accordion-item>
        </neo-accordion>
      </div>
    `;
  });
