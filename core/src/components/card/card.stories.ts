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
                <neo-eyebrow upper="true">Eyebrow Text</neo-eyebrow>
                <h2>Card Component</h2>
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
                <neo-eyebrow upper="true">Eyebrow Text</neo-eyebrow>
                <h2>Card Component</h2>
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
                <neo-eyebrow upper="true">Eyebrow Text</neo-eyebrow>
                <h2>Card Component</h2>
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
                <h2>Card Component</h2>
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
                <h2>Card Component</h2>
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
                <h2>Card Component</h2>
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
  .add('Product', (): string => {
    return `
      <neo-grid>
        <neo-row>
          <neo-col size="12" size-md="4">
            <neo-card>
              <neo-chip>Featured</neo-chip>
              <neo-img src="https://placehold.it/345x200.png" alt="product"></neo-img>
              <neo-copy>
                <neo-grid no-padding>
                  <neo-row>
                    <neo-col size="6" no-padding>
                      <neo-eyebrow upper="true">Eyebrow Text</neo-eyebrow>
                    </neo-col>
                    <neo-col class="neo-flex neo-justify-content-end" size="6" no-padding>
                      <span>$39</span>
                    </neo-col>
                  </neo-row>
                </neo-grid>
                <h2>Product Card</h2>
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
              <neo-img src="https://placehold.it/345x200.png" alt="product"></neo-img>
              <neo-copy>
                <neo-grid no-padding>
                  <neo-row>
                    <neo-col size="6" no-padding>
                      <neo-eyebrow upper="true">Eyebrow Text</neo-eyebrow>
                    </neo-col>
                    <neo-col class="neo-flex neo-justify-content-end" size="6" no-padding>
                      <span>$39</span>
                    </neo-col>
                  </neo-row>
                </neo-grid>
                <h2>Product Card</h2>
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
              <neo-chip>Featured</neo-chip>
              <neo-img src="https://placehold.it/345x200.png" alt="product"></neo-img>
              <neo-copy>
                <neo-grid no-padding>
                  <neo-row>
                    <neo-col size="6" no-padding>
                      <neo-eyebrow upper="true">Eyebrow Text</neo-eyebrow>
                    </neo-col>
                    <neo-col class="neo-flex neo-justify-content-end" size="6" no-padding>
                      <span>$39</span>
                    </neo-col>
                  </neo-row>
                </neo-grid>
                <h2>Product Card</h2>
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
                <h2>Card Component</h2>
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
                <h2>Card Component</h2>
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
  .add('Definition', (): string => {
    return `
      <neo-grid>
        <neo-row>
          <neo-col size="12">
            <neo-card class="neo-justify-content-between" layout="row">
              <neo-grid>
                <neo-row>
                  <neo-col size="6">
                    <h2 no-margin>Definition Card</h2>
                  </neo-col>
                  <neo-col size="6">
                    <neo-wysiwyg base="18">
                      <p>
                        Body Copy of up to three lines. Maecenas faucibus mollis interdum. Donec sed odio duimollis interdum. Body Copy of up to three lines. Maecenas faucibus mollis interdum. Donec sed odio duimollis interdum.
                      </p>
                      <button>Primary Action CTA</button>
                    </neo-wysiwyg>
                  </neo-col>
                </neo-row>
              </neo-grid>
            </neo-card>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  })
  .add('Spanning Stripe', (): string => {
    return `
      <neo-grid>
        <neo-row>
          <neo-col size="12">
            <neo-card class="neo-justify-content-between" layout="row">
              <neo-grid>
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
                    <button>Primary Action CTA</button>
                  </neo-col>
                </neo-row>
              </neo-grid>
            </neo-card>
          </neo-col>
        </neo-row>
      </neo-grid>
    `;
  });
