import { Component, Element, Host, h, State } from '@stencil/core';

@Component({
  tag: 'neo-masonry',
  styleUrl: 'masonry.scss',
  shadow: true
})
export class Masonry {

  layoutTypes: any = {
    2: 'xs',
    3: 'sm',
    4: 'md',
    5: 'lg',
  };

  @Element() el!: HTMLElement;

  @State() children: NodeListOf<HTMLElement>;

  componentDidLoad() {
    this.children = this.el.querySelectorAll('neo-masonry-item');
  }

  render() {
    const length = this.children ? this.children.length : 0;
    const layout = this.layoutTypes[length];

    return (
      <Host
        class={{
          [`neo-layout-${layout}`]: layout !== undefined
        }}
      >
        <div class="masonry-inner">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
