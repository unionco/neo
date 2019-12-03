import { Component, ComponentInterface, Element, Host, Listen, Prop, State, h } from '@stencil/core';

import { Color, CssClassMap, StyleEventDetail } from '../../interface';
import { ButtonInterface } from '../../utils/element-interface';
import { createColorClasses } from '../../utils/theme';

/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot start - Content is placed to the left of the item text in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the item text in LTR, and to the left in RTL.
 */
@Component({
  tag: 'neo-form-group',
  styleUrl: 'form-group.scss',
  shadow: true
})
export class FormGroup implements ComponentInterface, ButtonInterface {

  private itemStyles = new Map<string, CssClassMap>();

  @Element() el!: HTMLNeoFormGroupElement;

  @State() multipleInputs = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * If `true`, a button tag will be rendered and the item will be tappable.
   */
  @Prop() button = false;

  /**
   * If `true`, the user cannot interact with the item.
   */
  @Prop() disabled = false;

  /**
   * The type of the button. Only used when an `onclick` or `button` property is present.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  @Listen('neoStyle')
  itemStyle(ev: CustomEvent<StyleEventDetail>) {
    ev.stopPropagation();

    const tagName = (ev.target as HTMLElement).tagName;
    const updatedStyles = ev.detail;
    const newStyles = {} as any;
    const childStyles = this.itemStyles.get(tagName) || {};

    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach(key => {
      if (updatedStyles[key]) {
        const itemKey = `form-group-${key}`;
        if (!childStyles[itemKey]) {
          hasStyleChange = true;
        }
        newStyles[itemKey] = true;
      }
    });
    if (!hasStyleChange && Object.keys(newStyles).length !== Object.keys(childStyles).length) {
      hasStyleChange = true;
    }
    if (hasStyleChange) {
      this.itemStyles.set(tagName, newStyles);
      this.el.forceUpdate();
    }
  }

  componentDidLoad() {
    // The following elements have a clickable cover that is relative to the entire item
    const covers = this.el.querySelectorAll('neo-checkbox, neo-datetime, neo-select, neo-radio');

    // The following elements can accept focus alongside the previous elements
    // therefore if these elements are also a child of item, we don't want the
    // input cover on top of those interfering with their clicks
    const inputs = this.el.querySelectorAll('neo-input, neo-range, neo-searchbar, neo-segment, neo-textarea, neo-toggle');

    // The following elements should also stay clickable when an input with cover is present
    const clickables = this.el.querySelectorAll('neo-anchor, neo-button, a, button');

    // Check for multiple inputs to change the position of the input cover to relative
    // for all of the covered inputs above
    this.multipleInputs = covers.length + inputs.length > 1
      || covers.length + clickables.length > 1
      || covers.length > 0 && this.isClickable();
  }

  // If the item contains an input including a checkbox, datetime, select, or radio
  // then the item will have a clickable input cover that covers the item
  // that should get the hover, focused and activated states UNLESS it has multiple
  // inputs, then those need to individually get each click
  private hasCover(): boolean {
    const inputs = this.el.querySelectorAll('neo-checkbox, neo-datetime, neo-select, neo-radio');
    return inputs.length === 1 && !this.multipleInputs;
  }

  // If the item has an href or button property it will render a native
  // anchor or button that is clickable
  private isClickable(): boolean {
    return this.button;
  }

  private canActivate(): boolean {
    return (this.isClickable() || this.hasCover());
  }

  render() {
    const { disabled } = this;
    const childStyles = {};
    const clickable = this.isClickable();
    const canActivate = this.canActivate();
    const TagType = clickable ? 'button' : 'div' as any;
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : {};
    this.itemStyles.forEach(value => {
      Object.assign(childStyles, value);
    });

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          ...childStyles,
          ...createColorClasses(this.color),
          'item': true,
          'form-group-disabled': disabled,
          'form-group-multiple-inputs': this.multipleInputs,
          'neo-activatable': canActivate,
          'neo-focusable': true,
        }}
      >
          <TagType
            {...attrs}
            class="form-group-native"
            disabled={disabled}
          >
            <slot name="start"></slot>
            <div class="form-group-inner">
              <div class="input-wrapper">
                <slot></slot>
              </div>
              <slot name="end"></slot>
            </div>
          </TagType>
      </Host>
    );
  }
}