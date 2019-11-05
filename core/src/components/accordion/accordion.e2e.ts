import { newE2EPage } from '@stencil/core/testing';

describe('neo-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-accordion></neo-accordion>');

    const element = await page.find('neo-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
