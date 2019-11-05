import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-slide',
  styleUrl: 'slide.scss',
})
export class Slide implements ComponentInterface {

  render() {
    return (
      <Host
        class={{
          'swiper-slide': true,
          'swiper-zoom-container': true
        }}
      >
      </Host>
    );
  }

}
