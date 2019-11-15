import { storiesOf } from '@storybook/html';

storiesOf('Card', module)
  .add('Default', (): string => {
    return `
      <neo-grid>
        <neo-row>
          <neo-col size="12" size-md="4">
            <neo-card>
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <p eyebrow>Eyebrow Text</p>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card>
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <p eyebrow>Eyebrow Text</p>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card>
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <p eyebrow>Eyebrow Text</p>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
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
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card mediabehind>
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card mediabehind>
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
            </neo-card>
          </neo-col>
        </neo-row>
        <neo-row>
          <neo-col size="12" size-md="4">
            <neo-card mediabehind="tall">
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card mediabehind="tall">
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card mediabehind="tall">
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
            </neo-card>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  })
  .add('Product', (): string => {
    return `
      <neo-grid>
        <neo-row>
          <neo-col size="12" size-md="4">
            <neo-card>
              <neo-chip>Featured</neo-chip>
              <neo-img src="https://placehold.it/345x200.png?text=Image" alt="product"></neo-img>
              <neo-card-content>
                <neo-grid no-padding>
                  <neo-row>
                    <neo-col size="6" no-padding>
                      <p eyebrow>Eyebrow Text</p>
                    </neo-col>
                    <neo-col class="neo-flex neo-justify-content-end" size="6" no-padding>
                      <span>$39</span>
                    </neo-col>
                  </neo-row>
                </neo-grid>
                <h3>Product Card</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
                <neo-buttons>
                  <neo-button color="primary">Primary</neo-button>
                  <neo-button color="primary" fill="clear">Secondary</neo-button>
                </neo-buttons>
              </neo-card-content>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card>
              <neo-img src="https://placehold.it/345x200.png?text=Image" alt="product"></neo-img>
              <neo-card-content>
                <neo-grid no-padding>
                  <neo-row>
                    <neo-col size="6" no-padding>
                      <p eyebrow>Eyebrow Text</p>
                    </neo-col>
                    <neo-col class="neo-flex neo-justify-content-end" size="6" no-padding>
                      <span>$39</span>
                    </neo-col>
                  </neo-row>
                </neo-grid>
                <h3>Product Card</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
                <neo-buttons>
                  <neo-button color="primary">Primary</neo-button>
                  <neo-button color="primary" fill="clear">Secondary</neo-button>
                </neo-buttons>
              </neo-card-content>
            </neo-card>
          </neo-col>
          <neo-col size="12" size-md="4">
            <neo-card>
              <neo-chip color="primary">Featured</neo-chip>
              <neo-img src="https://placehold.it/345x200.png?text=Image" alt="product"></neo-img>
              <neo-card-content>
                <neo-grid no-padding>
                  <neo-row>
                    <neo-col size="6" no-padding>
                      <p eyebrow>Eyebrow Text</p>
                    </neo-col>
                    <neo-col class="neo-flex neo-justify-content-end" size="6" no-padding>
                      <span>$39</span>
                    </neo-col>
                  </neo-row>
                </neo-grid>
                <h3>Product Card</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
                <neo-buttons>
                  <neo-button color="primary">Primary</neo-button>
                  <neo-button color="primary" fill="clear">Secondary</neo-button>
                </neo-buttons>
              </neo-card-content>
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
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <p eyebrow>Eyebrow Text</p>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
            </neo-card>
          </neo-col>
        </neo-row>
        <br/>
        <neo-row>
          <neo-col size="6">
            <neo-card layout="row">
              <neo-img src="https://placehold.it/345x200.png?text=Image"></neo-img>
              <neo-card-content>
                <p eyebrow>Eyebrow Text</p>
                <h3>Card Component</h3>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac censectetur ac.
                </p>
              </neo-card-content>
            </neo-card>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  })
  .add('Definition', (): string => {
    return `
      <neo-grid class="neo-small">
        <neo-row>
          <neo-col size="6">
            <h2 no-margin>Definition Card</h2>
          </neo-col>
          <neo-col size="6">
            <neo-wysiwyg base="18">
              <p>
                Body Copy of up to three lines. Maecenas faucibus mollis interdum. Donec sed odio duimollis interdum. Body Copy of up to three lines. Maecenas faucibus mollis interdum. Donec sed odio duimollis interdum.
              </p>
              <neo-button color="primary">Primary Action CTA</neo-button>
            </neo-wysiwyg>
          </neo-col>
        </neo-row>
    `;
  });
