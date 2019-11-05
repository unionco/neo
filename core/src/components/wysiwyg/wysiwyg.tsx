import { Component, ComponentInterface, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-wysiwyg',
  styleUrl: 'wysiwyg.scss',
  // scoped: true
})
export class Wysiwyg implements ComponentInterface {
  /**
   * The first name
   */
  @Prop() base: number = 12;

  render() {
    const { base } = this;

    return (
      <Host class={{
        'wysiwyg': true,
        [`base-${base}`]: true
      }}>
        <div class="wysiwyg-native">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
