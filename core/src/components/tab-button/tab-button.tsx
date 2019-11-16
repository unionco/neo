import { Component, Host, h, Element, Event, Listen, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'neo-tab-button',
  styleUrl: 'tab-button.scss',
  shadow: true
})
export class TabButton {

  @Element() el!: HTMLElement;

  /**
   * If `true`, the user cannot interact with the tab button.
   */
  @Prop() disabled = false;

  /**
   * The selected tab component
   */
  @Prop({ mutable: true }) selected = false;

  /**
   * A tab id must be provided for each `neo-tab`.
   */
  @Prop() tab?: string;

  /**
   * Emitted when the tab bar is clicked
   * @internal
   */
  @Event() neoTabButtonClick!: EventEmitter<any>;

  @Listen('neoTabBarChanged', { target: 'parent' })
  onTabBarChanged(ev: CustomEvent<any>) {
    this.selected = this.tab === ev.detail.tab;
  }

  private selectTab(ev: Event | KeyboardEvent) {
    if (this.tab !== undefined) {
      if (!this.disabled) {
        this.neoTabButtonClick.emit({
          tab: this.tab,
          selected: this.selected
        });
      }
      ev.preventDefault();
    }
  }

  private get tabIndex() {
    if (this.disabled) { return -1; }

    const hasTabIndex = this.el.hasAttribute('tabindex');

    if (hasTabIndex) {
      return this.el.getAttribute('tabindex');
    }

    return 0;
  }

  private onKeyUp = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      this.selectTab(ev);
    }
  }

  private onClick = (ev: Event) => {
    this.selectTab(ev);
  }

  render() {
    const { disabled, tabIndex, selected, tab } = this;

    return (
      <Host
        onClick={this.onClick}
        onKeyup={this.onKeyUp}
        role="tab"
        tabindex={tabIndex}
        aria-selected={selected ? 'true' : null}
        id={tab !== undefined ? `tab-button-${tab}` : null}
        class={{
          'tab-selected': selected,
          'tab-disabled': disabled,
          'neo-activatable': true,
          'neo-selectable': true,
          'neo-focusable': true
        }}
      >
        <a tabIndex={-1}>
          <slot></slot>
        </a>
      </Host>
    );
  }

}
