import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'neo-tab',
  styleUrl: 'tab.scss',
  shadow: true
})
export class Tab {

  /**
   * Label used for the tab button title
   */
  @Prop() label: string;

  /**
   * Should be activatble
   */
  @Prop() disabled: boolean;

  /**
   * Status of the tab
   */
  @Prop() open: boolean;


  render() {
    const { open } = this;

    return (
      <Host
        class={{
          'is-open': open
        }}
      >
        <slot></slot>
      </Host>
    );
  }

}
