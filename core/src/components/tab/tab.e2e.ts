import { newE2EPage } from '@stencil/core/testing';

describe('neo-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-tab></neo-tab>');

    const element = await page.find('neo-tab');
    expect(element).toHaveClass('hydrated');
  });
});
