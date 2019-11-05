import { newE2EPage } from '@stencil/core/testing';

describe('neo-card-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<neo-card-content></neo-card-content>');
    const element = await page.find('neo-card-content');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<neo-card-content></neo-card-content>');
    const component = await page.find('neo-card-content');
    const element = await page.find('neo-card-content >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
