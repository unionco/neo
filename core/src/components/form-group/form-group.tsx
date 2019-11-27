import { Component, ComponentInterface, Element, Host, Listen, State, h } from '@stencil/core';

import { CssClassMap, StyleEventDetail } from '../../interface';

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
export class FormGroup implements ComponentInterface {

  private formGroupStyles = new Map<string, CssClassMap>();

  @Element() el!: HTMLNeoFormGroupElement;

  @State() multipleInputs = false;

  @Listen('neoStyle')
  itemStyle(ev: CustomEvent<StyleEventDetail>) {
    ev.stopPropagation();

    const tagName = (ev.target as HTMLElement).tagName;
    const updatedStyles = ev.detail;
    const newStyles = {} as any;
    const childStyles = this.formGroupStyles.get(tagName) || {};

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
      this.formGroupStyles.set(tagName, newStyles);
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

    // Check for multiple inputs to change the position of the input cover to relative
    // for all of the covered inputs above
    this.multipleInputs = covers.length + inputs.length > 1;
  }

  render() {
    const childStyles = {};
    const TagType = 'div' as any;

    this.formGroupStyles.forEach(value => {
      Object.assign(childStyles, value);
    });

    return (
      <Host
        class={{
          ...childStyles,
          'item': true,
          'form-group-multiple-inputs': this.multipleInputs,
          'neo-focusable': true,
        }}
      >
          <TagType
            class="form-group-native"
          >
            <div class="form-group-inner">
              <div class="input-wrapper">
                <slot></slot>
              </div>
            </div>
          </TagType>
      </Host>
    );
  }
}