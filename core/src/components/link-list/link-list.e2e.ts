import { newE2EPage } from '@stencil/core/testing';

describe('link-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<link-list></link-list>');

    const element = await page.find('link-list');
    expect(element).toHaveClass('hydrated');
  });
});
