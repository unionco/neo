import { newE2EPage } from '@stencil/core/testing';

describe('neo-tab-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-tab-button></neo-tab-button>');

    const element = await page.find('neo-tab-button');
    expect(element).toHaveClass('hydrated');
  });
});
