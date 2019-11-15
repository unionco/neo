import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const label = 'Alignment';
const options = {
  Left: 'Left',
  Center: 'Center'
};
const defaultValue = 'center';

storiesOf('WYSIWYG', module)
  .add('Default', (): string => {
    return `
      <div>
        <h2>WYSIWYG</h2>
        <neo-grid>
          <neo-row>
            <neo-col size="6" offset="${select(label, options, defaultValue, 'wysiwyg') === 'Center' ? 3 : 0}">
              <neo-wysiwyg>
                <h2>Short headline</h2>
                <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</p>

                <h3>Medium length title</h3>
                <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p>
                  <figure>
                    <img src="https://placehold.it/250x250.png" alt="article image" />
                  </figure>
                </p>

                <h4>Medium length headline</h4>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>

                <ul>
                  <li>Cras justo odio, dapibus ac facilisis in</li>
                  <li>Egestas eget quam</li>
                  <li>Fusce dapibus, tellus ac cursus commodo, tortor mauris</li>
                  <li>Nibh, ut fermentum massa justo sit amet risus </li>
                </ul>

                <h4>Medium length headline</h4>
                <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

                <blockquote>
                  <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <span>John Smith</span>
                </blockquote>

                <neo-grid no-padding>
                  <neo-row>
                    <neo-col size="6">
                      <h4>Medium length headline</h4>
                      <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                      <neo-button no-padding fill="clear">Click Me</neo-button>
                    </neo-col>
                    <neo-col text-right size="6">
                      <img src="https://placehold.it/250x250.png" alt="article image" />
                    </neo-col>
                  </neo-row>
                </neo-grid>

                <h4>Medium length headline</h4>
                <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

                <neo-grid no-padding>
                  <neo-row>
                    <neo-col size="6">
                      <img src="https://placehold.it/250x250.png" alt="article image" />
                    </neo-col>
                    <neo-col size="6">
                      <h4>Medium length headline</h4>
                      <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                      <neo-button no-padding fill="clear">Click Me</neo-button>
                    </neo-col>
                  </neo-row>
                </neo-grid>
              </neo-wysiwyg>
            </neo-col>
          </neo-row>
        </neo-grid>
      </div>
    `;
  });
