import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-row',
  styleUrl: 'row.scss',
  shadow: true
})
export class Row implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}