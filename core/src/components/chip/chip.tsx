import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../interface';
import { createColorClasses } from '../../utils/theme';

@Component({
  tag: 'neo-chip',
  styleUrl: 'chip.scss',
  shadow: true
})
export class NeoChip {

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * Addes activatable class and adds hover states
   */
  @Prop() clickable: boolean = false;

  /**
   * Display an outline style button.
   */
  @Prop() outline = false;

  render() {
    const { clickable } = this;

    return (
      <Host
        class={{
          ...createColorClasses(this.color),
          'chip-outline': this.outline,
          'neo-activatable': clickable,
        }}
      >
        <slot></slot>
      </Host>
    );
  }

}
