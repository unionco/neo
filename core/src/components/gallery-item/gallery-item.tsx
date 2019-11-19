import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-gallery-item',
  styleUrl: 'gallery-item.scss',
  shadow: true
})
export class GalleryItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
