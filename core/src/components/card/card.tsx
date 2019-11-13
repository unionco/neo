import { Component, ComponentInterface, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'neo-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card implements ComponentInterface {

  /**
   * Layout of container (flex) row or column
   */
  @Prop() layout: 'col' | 'row' = 'col';

  /**
   * Reverse order
   */
  @Prop() reverse: boolean = false;

  /**
   * Background image or video
   */
  @Prop() mediabehind: boolean = false;

  render() {
    const { layout, reverse, mediabehind } = this;

    return (
      <Host
        class={{
          [`u-${layout}`]: true,
          'neo-small': true,
          'u-reverse': reverse,
          'has-background': mediabehind,
        }}>
        <slot></slot>
      </Host>
    );
  }
}
