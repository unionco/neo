import { newE2EPage } from '@stencil/core/testing';

describe('neo-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-tabs></neo-tabs>');

    const element = await page.find('neo-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
