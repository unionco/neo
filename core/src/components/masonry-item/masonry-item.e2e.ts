import { newE2EPage } from '@stencil/core/testing';

describe('neo-masonry-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-masonry-item></neo-masonry-item>');

    const element = await page.find('neo-masonry-item');
    expect(element).toHaveClass('hydrated');
  });
});
