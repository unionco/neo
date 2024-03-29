import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

import { CheckboxChangeEventDetail, Color, StyleEventDetail } from '../../interface';
import { findFormGroupLabel, renderHiddenInput } from '../../utils/helpers';
import { createColorClasses, hostContext } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'neo-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})
export class Checkbox implements ComponentInterface {

  private inputId = `neo-cb-${checkboxIds++}`;
  private buttonEl?: HTMLElement;

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = '';

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true }) checked = false;

  /**
   * If `true`, the checkbox will visually appear as indeterminate.
   */
  @Prop({ mutable: true }) indeterminate = false;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled = false;

  /**
   * The value of the toggle does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
   * it's only used when the toggle participates in a native `<form>`.
   */
  @Prop() value = 'on';

  /**
   * Emitted when the checked property has changed.
   */
  @Event() neoChange!: EventEmitter<CheckboxChangeEventDetail>;

  /**
   * Emitted when the toggle has focus.
   */
  @Event() neoFocus!: EventEmitter<void>;

  /**
   * Emitted when the toggle loses focus.
   */
  @Event() neoBlur!: EventEmitter<void>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() neoStyle!: EventEmitter<StyleEventDetail>;

  componentWillLoad() {
    this.emitStyle();
  }

  @Watch('checked')
  checkedChanged(isChecked: boolean) {
    this.neoChange.emit({
      checked: isChecked,
      value: this.value
    });
    this.emitStyle();
  }

  @Watch('disabled')
  disabledChanged() {
    this.emitStyle();
  }

  private emitStyle() {
    this.neoStyle.emit({
      'checkbox-checked': this.checked,
      'interactive-disabled': this.disabled,
    });
  }

  private setFocus() {
    if (this.buttonEl) {
      this.buttonEl.focus();
    }
  }

  private onClick = () => {
    this.setFocus();
    this.checked = !this.checked;
    this.indeterminate = false;
  }

  private onFocus = () => {
    this.neoFocus.emit();
  }

  private onBlur = () => {
    this.neoBlur.emit();
  }

  render() {
    const { inputId, indeterminate, disabled, checked, value, color, el } = this;
    const labelId = inputId + '-lbl';
    const label = findFormGroupLabel(el);
    if (label) {
      label.id = labelId;
    }
    renderHiddenInput(true, el, (this.name ? this.name : this.inputId), (checked ? value : ''), disabled);

    let path = indeterminate
      ? <path d="M6 12L18 12"/>
      : <path d="M5.9,12.5l3.8,3.8l8.8-8.8" />;

    return (
      <Host
        onClick={this.onClick}
        role="checkbox"
        aria-disabled={disabled ? 'true' : null}
        aria-checked={`${checked}`}
        aria-labelledby={labelId}
        class={{
          ...createColorClasses(color),
          'in-item': hostContext('neo-form-group', el),
          'checkbox-checked': checked,
          'checkbox-disabled': disabled,
          'checkbox-indeterminate': indeterminate,
          'interactive': true
        }}
      >
        <svg class="checkbox-icon" viewBox="0 0 24 24">
          {path}
        </svg>
        <button
          type="button"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={this.disabled}
          ref={btnEl => this.buttonEl = btnEl}
        >
        </button>
      </Host>
    );
  }
}

let checkboxIds = 0;