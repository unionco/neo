import { Component, Element, Event, EventEmitter, Prop, Host, Watch, h } from '@stencil/core';

@Component({
  tag: 'neo-tab-bar',
  styleUrl: 'tab-bar.scss',
  shadow: true
})
export class TabBar {

  @Element() el!: HTMLElement;

  /**
   * The selected tab component
   */
  @Prop() selectedTab?: string;
  @Watch('selectedTab')
  selectedTabChanged() {
    if (this.selectedTab !== undefined) {
      this.neoTabBarChanged.emit({
        tab: this.selectedTab
      });
    }
  }

  /** @internal */
  @Event() neoTabBarChanged!: EventEmitter<any>;

  componentWillLoad() {
    this.selectedTabChanged();
  }

  render() {
    return (
      <Host
        role="tablist"
      >
        <slot></slot>
      </Host>
    );
  }

}
