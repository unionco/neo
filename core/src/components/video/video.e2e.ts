import { newE2EPage } from '@stencil/core/testing';

describe('neo-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-video></neo-video>');

    const element = await page.find('neo-video');
    expect(element).toHaveClass('hydrated');
  });
});
