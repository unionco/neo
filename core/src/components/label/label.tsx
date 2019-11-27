import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { Color, StyleEventDetail } from '../../interface';
import { createColorClasses } from '../../utils/theme';

@Component({
  tag: 'neo-label',
  styleUrl: 'label.scss',
  scoped: true
})
export class Label implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * The position determines where and how the label behaves inside an item.
   */
  @Prop() position?: 'fixed' | 'stacked' | 'floating';

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() neoStyle!: EventEmitter<StyleEventDetail>;

  @State() noAnimate = false;

  componentWillLoad() {
    this.noAnimate = (this.position === 'floating');
    this.emitStyle();
  }

  componentDidLoad() {
    if (this.noAnimate) {
      setTimeout(() => {
        this.noAnimate = false;
      }, 1000);
    }
  }

  @Watch('position')
  positionChanged() {
    this.emitStyle();
  }

  private emitStyle() {
    const position = this.position;
    this.neoStyle.emit({
      'label': true,
      [`label-${position}`]: position !== undefined
    });
  }

  render() {
    const position = this.position;
    return (
      <Host
        class={{
          ...createColorClasses(this.color),
          [`label-${position}`]: position !== undefined,
          [`label-no-animate`]: (this.noAnimate)
        }}
      >
      </Host>
    );
  }
}