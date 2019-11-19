import { Component, Element, Event, EventEmitter, Prop, Host, Watch, h } from '@stencil/core';
import { Color } from '../../interface';
import { createColorClasses } from '../../utils/theme';

@Component({
  tag: 'neo-tab-bar',
  styleUrl: 'tab-bar.scss',
  shadow: true
})
export class TabBar {

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

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
    const { color } = this;

    return (
      <Host
        role="tablist"
        class={{
          ...createColorClasses(color)
        }}
      >
        <slot></slot>
      </Host>
    );
  }

}
