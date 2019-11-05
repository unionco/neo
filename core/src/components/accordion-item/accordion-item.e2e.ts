import { newE2EPage } from '@stencil/core/testing';

describe('neo-accordion-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-accordion-item></neo-accordion-item>');

    const element = await page.find('neo-accordion-item');
    expect(element).toHaveClass('hydrated');
  });
});
