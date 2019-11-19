import { newE2EPage } from '@stencil/core/testing';

describe('neo-gallery', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-gallery></neo-gallery>');

    const element = await page.find('neo-gallery');
    expect(element).toHaveClass('hydrated');
  });
});
