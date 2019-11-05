import { Component, ComponentInterface, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'neo-copy',
  styleUrl: 'copy.css',
  shadow: true
})
export class Copy implements ComponentInterface {
  /**
   * The first name
   */
  @Prop() prop: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
