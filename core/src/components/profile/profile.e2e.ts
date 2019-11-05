import { newE2EPage } from '@stencil/core/testing';

describe('neo-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<neo-profile></neo-profile>');
    const element = await page.find('neo-profile');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<neo-profile></neo-profile>');
    const component = await page.find('neo-profile');
    const element = await page.find('neo-profile >>> div');
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
