import { newE2EPage } from '@stencil/core/testing';

describe('neo-masonry', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-masonry></neo-masonry>');

    const element = await page.find('neo-masonry');
    expect(element).toHaveClass('hydrated');
  });
});
