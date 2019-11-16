import { newE2EPage } from '@stencil/core/testing';

describe('neo-tab-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-tab-bar></neo-tab-bar>');

    const element = await page.find('neo-tab-bar');
    expect(element).toHaveClass('hydrated');
  });
});
