import { newE2EPage } from '@stencil/core/testing';

describe('neo-slides', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-slides></neo-slides>');

    const element = await page.find('neo-slides');
    expect(element).toHaveClass('hydrated');
  });
});
