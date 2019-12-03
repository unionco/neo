import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { Color, RadioChangeEventDetail, StyleEventDetail } from '../../interface';
import { findFormGroupLabel } from '../../utils/helpers';
import { createColorClasses, hostContext } from '../../utils/theme';

@Component({
  tag: 'neo-radio',
  styleUrl: 'radio.scss',
  shadow: true
})
export class Radio implements ComponentInterface {

  private inputId = `neo-rb-${radioButtonIds++}`;

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
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the user cannot interact with the radio.
   */
  @Prop() disabled = false;

  /**
   * If `true`, the radio is selected.
   */
  @Prop({ mutable: true }) checked = false;

  /**
   * the value of the radio.
   */
  @Prop({ mutable: true }) value?: any | null;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() neoStyle!: EventEmitter<StyleEventDetail>;

  /**
   * Emitted when the radio button is selected.
   */
  @Event() neoSelect!: EventEmitter<RadioChangeEventDetail>;

  /**
   * Emitted when checked radio button is selected.
   * @internal
   */
  @Event() neoDeselect!: EventEmitter<RadioChangeEventDetail>;

  /**
   * Emitted when the radio button has focus.
   */
  @Event() neoFocus!: EventEmitter<void>;

  /**
   * Emitted when the radio button loses focus.
   */
  @Event() neoBlur!: EventEmitter<void>;

  @Watch('color')
  colorChanged() {
    this.emitStyle();
  }

  @Watch('checked')
  checkedChanged(isChecked: boolean) {
    if (isChecked) {
      this.neoSelect.emit({
        checked: true,
        value: this.value
      });
    }
    this.emitStyle();
  }

  @Watch('disabled')
  disabledChanged() {
    this.emitStyle();
  }

  componentWillLoad() {
    if (this.value === undefined) {
      this.value = this.inputId;
    }
    this.emitStyle();
  }

  private emitStyle() {
    this.neoStyle.emit({
      'radio-checked': this.checked,
      'interactive-disabled': this.disabled,
    });
  }

  private onFocus = () => {
    this.neoFocus.emit();
  }

  private onBlur = () => {
    this.neoBlur.emit();
  }

  private onClick = () => {
    if (this.checked) {
      this.neoDeselect.emit();
    } else {
      this.checked = true;
    }
  }

  render() {
    const { inputId, disabled, checked, color, el } = this;
    const labelId = inputId + '-lbl';
    const label = findFormGroupLabel(el);
    if (label) {
      label.id = labelId;
    }
    return (
      <Host
        onClick={this.onClick}
        role="radio"
        aria-disabled={disabled ? 'true' : null}
        aria-checked={`${checked}`}
        aria-labelledby={labelId}
        class={{
          ...createColorClasses(color),
          'in-item': hostContext('neo-form-group', el),
          'interactive': true,
          'radio-checked': checked,
          'radio-disabled': disabled,
        }}
      >
        <div class="radio-icon">
          <div class="radio-inner"/>
        </div>
        <button
          type="button"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={disabled}
        >
        </button>
      </Host>
    );
  }
}

let radioButtonIds = 0;