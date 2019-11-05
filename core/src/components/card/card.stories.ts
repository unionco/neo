import { storiesOf } from '@storybook/html';

storiesOf('Card', module)
  .add('Default', (): string => {
    return `
      <neo-grid>
        <neo-row>
          <neo-col size="12" size-md="4">
            <neo-card>
              <neo-img src="https://placehold.it/345x200.png"></neo-img>
              <neo-copy>
                <neo-heading size="4">Card Component</neo-heading>
                <neo-wysiwyg base="18">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                  </p>
                </neo-wysiwyg>
              </neo-copy>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card>
              <neo-img src="https://placehold.it/345x200.png"></neo-img>
              <neo-copy>
                <neo-heading size="4">Card Component</neo-heading>
                <neo-wysiwyg base="18">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                  </p>
                </neo-wysiwyg>
              </neo-copy>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card>
              <neo-img src="https://placehold.it/345x200.png"></neo-img>
              <neo-copy>
                <neo-heading size="4">Card Component</neo-heading>
                <neo-wysiwyg base="18">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                  </p>
                </neo-wysiwyg>
              </neo-copy>
            </neo-card>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  })
  .add('Media Behind', (): string => {
    return `
      <neo-grid>
        <neo-row>
          <neo-col size="12" size-md="4">
            <neo-card mediabehind>
              <neo-img src="https://placehold.it/345x200.png"></neo-img>
              <neo-copy>
                <neo-heading size="4">Card Component</neo-heading>
                <neo-wysiwyg base="18">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                  </p>
                </neo-wysiwyg>
              </neo-copy>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card mediabehind>
              <neo-img src="https://placehold.it/345x200.png"></neo-img>
              <neo-copy>
                <neo-heading size="4">Card Component</neo-heading>
                <neo-wysiwyg base="18">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                  </p>
                </neo-wysiwyg>
              </neo-copy>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card mediabehind>
              <neo-img src="https://placehold.it/345x200.png"></neo-img>
              <neo-copy>
                <neo-heading size="4">Card Component</neo-heading>
                <neo-wysiwyg base="18">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                  </p>
                </neo-wysiwyg>
              </neo-copy>
            </neo-card>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  })
  .add('Row Layout', (): string => {
    return `
      <neo-grid>
        <neo-row>
          <neo-col size="6">
            <neo-card layout="row" reverse>
              <neo-img src="https://placehold.it/345x200.png"></neo-img>
              <neo-copy>
                <neo-eyebrow upper="true">Eyebrow Text</neo-eyebrow>
                <neo-heading size="4">Card Component</neo-heading>
                <neo-wysiwyg base="18">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                  </p>
                </neo-wysiwyg>
              </neo-copy>
            </neo-card>
          </neo-col>
        </neo-row>
        <br/>
        <neo-row>
          <neo-col size="6">
            <neo-card layout="row">
              <neo-img src="https://placehold.it/345x200.png"></neo-img>
              <neo-copy>
                <neo-eyebrow upper="true">Eyebrow Text</neo-eyebrow>
                <neo-heading size="4">Card Component</neo-heading>
                <neo-wysiwyg base="18">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                  </p>
                </neo-wysiwyg>
              </neo-copy>
            </neo-card>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  });
