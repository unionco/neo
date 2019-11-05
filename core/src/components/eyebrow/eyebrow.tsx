import { Component, ComponentInterface, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-eyebrow',
  styleUrl: 'eyebrow.scss',
  shadow: true
})
export class Eyebrow implements ComponentInterface {
  /**
   * The first name
   */
  @Prop() upper: boolean = true;

  render() {
    const { upper } = this;

    return (
      <Host class={{
        'upper': upper,
        'eyebrow': true
      }}>
        <slot></slot>
      </Host>
    )
  }
}
