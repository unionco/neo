import { Component, Event, EventEmitter, Host, h, Element, Method, State } from '@stencil/core';

@Component({
  tag: 'neo-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})
export class Tabs {

  private leavingTab?: HTMLNeoTabElement;

  @Element() el!: HTMLNeoTabsElement;

  @State() selectedTab?: HTMLNeoTabElement;

  /**
   * Emitted when the navigation is about to transition to a new component.
   */
  @Event({ bubbles: false }) neoTabsWillChange!: EventEmitter<{ tab: string }>;

  /**
   * Emitted when the navigation has finished transitioning to a new component.
   */
  @Event({ bubbles: false }) neoTabsDidChange!: EventEmitter<{ tab: string }>;

  async componentWillLoad() {
    const tabs = this.tabs;
    if (tabs.length > 0) {
      await this.select(tabs[0]);
    }
  }

  componentWillRender() {
    const tabBar = this.el.querySelector('neo-tab-bar');
    if (tabBar) {
      const tab = this.selectedTab ? this.selectedTab.tab : undefined;
      tabBar.selectedTab = tab;
    }
  }

  /**
   * Select a tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  @Method()
  async select(tab: string | HTMLNeoTabElement): Promise<boolean> {
    this.leavingTab = this.selectedTab;

    const selectedTab = getTab(this.tabs, tab);

    this.neoTabsWillChange.emit({ tab: selectedTab.tab });

    if (this.leavingTab) {
      this.leavingTab.active = false;
    }

    selectedTab.active = true;

    this.selectedTab = selectedTab;

    this.neoTabsDidChange.emit({ tab: selectedTab.tab });

    return true;
  }

  private get tabs() {
    return Array.from(this.el.querySelectorAll('neo-tab'));
  }

  private onTabClicked = (ev: CustomEvent<any>) => {
    const { tab } = ev.detail;
    this.select(tab);
  }

  render() {
    return (
      <Host
        onNeoTabButtonClick={this.onTabClicked}
      >
        <slot name="top"></slot>
        <slot name="start"></slot>
        <div class="tabs-inner">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

const getTab = (tabs: HTMLNeoTabElement[], tab: string | HTMLNeoTabElement): HTMLNeoTabElement | undefined => {
  const tabEl = (typeof tab === 'string')
    ? tabs.find(t => t.tab === tab)
    : tab;

  if (!tabEl) {
    console.error(`tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
