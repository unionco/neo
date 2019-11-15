import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-masonry-item',
  styleUrl: 'masonry-item.scss',
  shadow: true
})
export class MasonryItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
