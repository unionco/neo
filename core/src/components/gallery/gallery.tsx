import { Component, Element, State, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-gallery',
  styleUrl: 'gallery.scss',
  shadow: true
})
export class Gallery {

  layoutTypes: any = {
    1: 'up-1',
    2: 'up-2',
    3: 'up-3',
    4: 'up-4',
    5: 'up-3',
    6: 'up-3',
    7: 'up-4',
    8: 'up-4',
    9: 'up-3',
    10: 'up-4',
  };

  @Element() el!: HTMLElement;

  @State() children: NodeListOf<HTMLElement>;

  componentDidLoad() {
    this.children = this.el.querySelectorAll('neo-gallery-item');
  }

  private determineMinWidth(): { [key: string]: boolean } {
    const length = this.children ? this.children.length : 0;
    const layout = this.layoutTypes[length];

    return {
      [layout ? layout : 'up-4']: true
    };
  }

  render() {
    return (
      <Host
        class={{
          ...this.determineMinWidth()
        }}
      >
        <div class="gallery-inner">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
