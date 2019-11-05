import { storiesOf } from '@storybook/html';

storiesOf('Video', module)
  .add('Default', (): string => {
    return `
      <h2>Tag: neo-video</h2>
      <p>Handles video files or video embeds (youtube or vimeo)</p>
      <div style="max-width: 600px;">
        <neo-video controls="true" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"></neo-video>
      </div>
    `;
  })
  .add('Custom Controls', (): string => {
    return `
      <h2>Tag: neo-video</h2>
      <p>Handles video files or video embeds (youtube or vimeo)</p>
      <div style="max-width: 600px;">
        <p>Custom Controls are experimental</p>
        <neo-video src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4">
          <svg slot="main" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path transform="scale(1.6667)" d="m31.01 45.544c15.551-0.32109 27.989-8.1539 27.989-17.766 0-9.8227-12.98-17.777-28.999-17.777s-28.999 7.9547-28.999 17.777c0 8.3438 9.3609 15.333 22.001 17.255"/>
            <path transform="scale(1.6667)" d="m34.999 41.112-3.9984 4.4438 3.9984 4.4438"/>
            <path transform="scale(1.6667)" d="m14.967 37.001c1.9219 12.64 8.9109 22.001 17.255 22.001 9.8227 0 17.777-12.98 17.777-28.999 0-16.02-7.9547-28.999-17.777-28.999-9.6117 0-17.445 12.441-17.766 27.989"/>
            <path transform="scale(1.6667)" d="m18.888 25.001-4.4438 3.9984-4.4438-3.9984"/>
            <path transform="scale(1.6667)" d="m38.517 29.834-12.007 7.0266h-0.002344c-0.30469 0.18281-0.68203 0.18984-0.99375 0.016406-0.30938-0.17109-0.50625-0.49453-0.51328-0.84844v-14.055c0.007031-0.35391 0.20391-0.67969 0.51328-0.85078 0.31172-0.17109 0.68906-0.16406 0.99375 0.01875l12.007 7.0266h0.002343c0.29766 0.17109 0.48281 0.4875 0.48281 0.83203 0 0.34453-0.18516 0.66328-0.48281 0.83438z"/>
          </g>
          </svg>
        </neo-video>
      </div>
    `;
  });
