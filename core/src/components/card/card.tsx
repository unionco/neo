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
  @Prop() mediabehind: 'default'|'tall';

  render() {
    const { layout, reverse, mediabehind } = this;

    return (
      <Host
        class={{
          [`u-${layout}`]: true,
          'neo-small': true,
          'neo-reverse': reverse,
          [`neo-${mediabehind}`]: mediabehind !== undefined,
          'has-background': mediabehind !== undefined,
        }}>
        <slot></slot>
      </Host>
    );
  }
}
