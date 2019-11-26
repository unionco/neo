import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-link-list',
  styleUrl: 'link-list.scss',
  shadow: true
})
export class LinkList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );  
  }

}
