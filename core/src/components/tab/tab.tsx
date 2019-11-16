import { Component, Element, Host, h, Method, Prop } from '@stencil/core';

@Component({
  tag: 'neo-tab',
  styleUrl: 'tab.scss',
  shadow: true
})
export class Tab {

  @Element() el!: HTMLNeoTabElement;

  /**
   * Label used for the tab button title
   */
  @Prop() tab!: string;

  /**
   * Should be activatble
   */
  @Prop() disabled: boolean;

  /**
   * Status of the tab
   */
  @Prop({ mutable: true }) active = false;

  /** Set the active component for the tab */
  @Method()
  async setActive(): Promise<void> {
    this.active = true;
  }

  render() {
    const { active } = this;

    return (
      <Host
        role="tabpanel"
        class={{
          'tab-hidden': !active
        }}
      >
        <slot></slot>
      </Host>
    );
  }

}
