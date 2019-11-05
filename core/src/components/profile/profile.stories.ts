import { storiesOf } from '@storybook/html';

storiesOf('Profile', module)
  .add('Default', (): string => {
    return `
      <h2>Tag: neo-profile</h2>
      <p>Avatar profile item</p>
      <div style="max-width: 250px;">
        <neo-profile>
          <neo-img slot="start" src="https://placehold.it/250x250.png" alt="profile"></neo-img>
          <p>John Smith</p>
          <p>ABC Company</p>
        </neo-profile>

        <neo-profile>
          <neo-img slot="end" src="https://placehold.it/250x250.png" alt="profile"></neo-img>
          <p>John Smith</p>
          <p>ABC Company</p>
        </neo-profile>
      </div>
    `;
  })
  .add('Rounded', (): string => {
    return `
      <h2>Tag: neo-profile</h2>
      <p>Avatar profile item</p>
      <div style="max-width: 250px;">
        <neo-profile rounded>
          <neo-img slot="start" src="https://placehold.it/250x250.png" alt="profile"></neo-img>
          <p>John Smith</p>
          <p>ABC Company</p>
        </neo-profile>

        <neo-profile rounded>
          <neo-img slot="end" src="https://placehold.it/250x250.png" alt="profile"></neo-img>
          <p>John Smith</p>
          <p>ABC Company</p>
        </neo-profile>
      </div>
    `;
  })
  .add('Column Layout', (): string => {
    return `
      <h2>Tag: neo-profile</h2>
      <p>Avatar profile item</p>
      <div style="max-width: 250px;">
        <neo-profile rounded layout="col">
          <neo-img slot="start" src="https://placehold.it/250x250.png" alt="profile"></neo-img>
          <p>John Smith</p>
          <p>ABC Company</p>
        </neo-profile>

        <neo-profile rounded layout="col">
          <neo-img slot="end" src="https://placehold.it/250x250.png" alt="profile"></neo-img>
          <p>John Smith</p>
          <p>ABC Company</p>
        </neo-profile>
      </div>
    `;
  });
