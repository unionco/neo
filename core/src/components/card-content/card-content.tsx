import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-card-content',
  styleUrl: 'card-content.scss',
  shadow: true
})
export class CardContent implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
