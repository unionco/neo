import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'neo-profile',
  styleUrl: 'profile.scss',
  shadow: true
})
export class Profile implements ComponentInterface {

  /**
   * Layout of container (flex) row or column
   */
  @Prop() layout: 'col' | 'row' = 'row';

  /**
   * Rounds the avatar image is provided.
   */
  @Prop() rounded: boolean = false;

  render() {
    const { rounded, layout } = this;

    return (
      <Host
        class={{
          'u-rounded': rounded,
          [`u-${layout}`]: true,
        }}
      >
        <div class="profile-inner">
          <slot name="start"></slot>
          <div class="profile-inner-content">
            <slot></slot>
          </div>
          <slot name="end"></slot>
        </div>
      </Host>
    );
  }
}
