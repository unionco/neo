import { Component, Event, EventEmitter, Host, h, Element, State, Method, Prop } from '@stencil/core';

@Component({
  tag: 'neo-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})
export class Tabs {

  @Element() el!: HTMLNeoTabsElement;

  /**
   * Layout to show tabs at top or side
   */
  @Prop() layout: string = 'column';

  @State() tabs: HTMLNeoTabElement[] = [];

  @Event() neoTabChange: EventEmitter;

  componentDidLoad() {
    this.tabs = Array.from(this.el.querySelectorAll('neo-tab'));
  }

  @Method()
  async currentTab() {
    return this.tabs.findIndex((tab) => tab.open);
  }

  @Method()
  async openTab(tabIndex: number) {
    if (!this.tabs[tabIndex].disabled) {
      this.tabs = this.tabs.map((tab) => {
        tab.open = false;
        return tab;
      });
      this.tabs[tabIndex].open = true;
      this.neoTabChange.emit({ idx: tabIndex });
    }
  }

  renderTabNav(tab: HTMLNeoTabElement, index: number) {
    return (
      <button
        class={{
          'neo-tab-button': true,
          'is-open': tab.open
        }}
        role="tab"
        disabled={tab.disabled}
        onClick={() => this.openTab(index)}>
        {tab.label}
      </button>
    )
  }

  render() {
    const { layout, tabs } = this;

    return (
      <Host
        class={{
          [`neo-layout-${layout}`]: true
        }}
      >
        <div class="neo-tab-container">
          <div class="neo-tab-nav">
            {tabs.map((tab: HTMLNeoTabElement, index: number) => this.renderTabNav(tab, index))}
          </div>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
