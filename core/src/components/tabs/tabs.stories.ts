import { storiesOf } from '@storybook/html';

storiesOf('Tabs', module)
  .add('Default', (): string => {
    return `
      <h2>Tag: neo-tabs, neo-tab-bar, neo-tab-button</h2>
      <p>Tabbed component to show hide tab panels</p>

      <neo-grid>
        <neo-row>
          <neo-col size="8">
            <neo-tabs>
              <neo-tab-bar color="primary" slot="top">
                <neo-tab-button tab="tab1">Tab 1</neo-tab-button>
                <neo-tab-button tab="tab2" selected>Tab 2</neo-tab-button>
                <neo-tab-button tab="tab3" disabled>Tab 3</neo-tab-button>
              </neo-tab-bar>

              <neo-tab tab="tab1">
                <neo-wysiwyg>
                  <h2>Short headline 1</h2>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</p>

                  <h3>Medium length title</h3>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <neo-button>Button</neo-button>
                  <p>
                    <figure>
                      <img src="https://placehold.it/250x250.png" alt="article image" />
                    </figure>
                  </p>
                </neo-wysiwyg>
              </neo-tab>
              <neo-tab tab="tab2">
                <neo-wysiwyg>
                  <h2>Short headline 2</h2>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</p>

                  <h3>Medium length title</h3>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <p>
                    <figure>
                      <img src="https://placehold.it/250x250.png" alt="article image" />
                    </figure>
                  </p>
                </neo-wysiwyg>
              </neo-tab>
              <neo-tab tab="tab3">
                <neo-wysiwyg>
                  <h2>Short headline 3</h2>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</p>

                  <h3>Medium length title</h3>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <p>
                    <figure>
                      <img src="https://placehold.it/250x250.png" alt="article image" />
                    </figure>
                  </p>
                </neo-wysiwyg>
              </neo-tab>
            </neo-tabs>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  })
  .add('Custom', (): string => {
    return `
      <neo-grid>
        <neo-row>
          <neo-col size="8">
            <neo-tabs>
              <neo-grid no-padding slot="top">
                <neo-row>
                  <neo-col no-padding>
                    <h2>Heading</h2>
                  </neo-col>
                  <neo-col class="neo-flex" no-padding>
                    <neo-tab-bar color="primary">
                      <neo-tab-button tab="tab1">Tab 1</neo-tab-button>
                      <neo-tab-button tab="tab2" selected>Tab 2</neo-tab-button>
                      <neo-tab-button tab="tab3" disabled>Tab 3</neo-tab-button>
                    </neo-tab-bar>
                  </neo-col>
                </neo-row>
              </neo-grid>

              <neo-tab tab="tab1">
                <neo-wysiwyg>
                  <h2>Short headline 1</h2>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</p>

                  <h3>Medium length title</h3>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <neo-button>Button</neo-button>
                  <p>
                    <figure>
                      <img src="https://placehold.it/250x250.png" alt="article image" />
                    </figure>
                  </p>
                </neo-wysiwyg>
              </neo-tab>
              <neo-tab tab="tab2">
                <neo-wysiwyg>
                  <h2>Short headline 2</h2>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</p>

                  <h3>Medium length title</h3>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <p>
                    <figure>
                      <img src="https://placehold.it/250x250.png" alt="article image" />
                    </figure>
                  </p>
                </neo-wysiwyg>
              </neo-tab>
              <neo-tab tab="tab3">
                <neo-wysiwyg>
                  <h2>Short headline 3</h2>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</p>

                  <h3>Medium length title</h3>
                  <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <p>
                    <figure>
                      <img src="https://placehold.it/250x250.png" alt="article image" />
                    </figure>
                  </p>
                </neo-wysiwyg>
              </neo-tab>
            </neo-tabs>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  });
