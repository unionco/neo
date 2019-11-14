import { Component, ComponentInterface, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-buttons',
  styleUrl: 'buttons.scss',
  scoped: true
})
export class Buttons implements ComponentInterface {
  /**
   * The first name
   */
  @Prop({ reflectToAttr: true }) layout: 'row' | 'col';

  render() {
    return (
      <Host>
      </Host>
    );
  }
}
