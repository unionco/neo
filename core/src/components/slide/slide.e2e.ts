import { newE2EPage } from '@stencil/core/testing';

describe('neo-slide', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-slide></neo-slide>');

    const element = await page.find('neo-slide');
    expect(element).toHaveClass('hydrated');
  });
});
