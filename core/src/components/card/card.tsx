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
   * Background image or video
   */
  @Prop() mediabehind: 'default'|'tall';

  render() {
    const { layout, mediabehind } = this;

    return (
      <Host
        class={{
          [`u-${layout}`]: true,
          'neo-small': true,
          [`neo-${mediabehind}`]: mediabehind !== undefined,
          'has-background': mediabehind !== undefined,
        }}>
        <div class="card-inner">
          <slot name="background"></slot>
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </div>
      </Host>
    );
  }
}
