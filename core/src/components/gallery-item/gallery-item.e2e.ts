import { newE2EPage } from '@stencil/core/testing';

describe('neo-gallery-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-gallery-item></neo-gallery-item>');

    const element = await page.find('neo-gallery-item');
    expect(element).toHaveClass('hydrated');
  });
});
