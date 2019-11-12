import { newE2EPage } from '@stencil/core/testing';

describe('neo-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-chip></neo-chip>');

    const element = await page.find('neo-chip');
    expect(element).toHaveClass('hydrated');
  });
});
