import { newE2EPage } from '@stencil/core/testing';

describe('neo-card-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<neo-card-header></neo-card-header>');
    const element = await page.find('neo-card-header');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<neo-card-header></neo-card-header>');
    const component = await page.find('neo-card-header');
    const element = await page.find('neo-card-header >>> div');
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
