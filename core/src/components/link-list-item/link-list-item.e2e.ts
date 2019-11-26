import { newE2EPage } from '@stencil/core/testing';

describe('link-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<link-list-item></link-list-item>');

    const element = await page.find('link-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
