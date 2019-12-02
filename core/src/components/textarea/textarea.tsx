import { Build, Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h, readTask } from '@stencil/core';
import { Color, StyleEventDetail, TextareaChangeEventDetail } from '../../interface';
import { debounceEvent, findFormGroupLabel } from '../../utils/helpers';
import { createColorClasses } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'neo-textarea',
  styleUrl: 'textarea.scss',
  scoped: true
})
export class Textarea implements ComponentInterface {

  private nativeInput?: HTMLTextAreaElement;
  private inputId = `neo-input-${textareaIds++}`;
  private didBlurAfterEdit = false;

  @Element() el!: HTMLElement;

  @State() hasFocus = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
   */
  @Prop() autocapitalize = 'none';

  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
   */
  @Prop({ mutable: true }) clearOnEdit = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `neoChange` event after each keystroke.
   */
  @Prop() debounce = 0;

  @Watch('debounce')
  protected debounceChanged() {
    this.neoChange = debounceEvent(this.neoChange, this.debounce);
  }

  /**
   * If `true`, the user cannot interact with the textarea.
   */
  @Prop() disabled = false;

  @Watch('disabled')
  protected disabledChanged() {
    this.emitStyle();
  }

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string | null;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * If `true`, the element will have its spelling and grammar checked.
   */
  @Prop() spellcheck = false;

  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
   */
  @Prop() cols?: number;

  /**
   * The number of visible text lines for the control.
   */
  @Prop() rows?: number;

  /**
   * Indicates how the control wraps text.
   */
  @Prop() wrap?: 'hard' | 'soft' | 'off';

  /**
   * If `true`, the element height will increase based on the value.
   */
  @Prop() autoGrow = false;

   /**
   * If `true`, the element will be resizeable.
   */
  @Prop() resize = false;

  /**
   * The value of the textarea.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }
    this.runAutoGrow();
    this.emitStyle();
    this.neoChange.emit({ value });
  }

  /**
   * Emitted when the input value has changed.
   */
  @Event() neoChange!: EventEmitter<TextareaChangeEventDetail>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() neoInput!: EventEmitter<KeyboardEvent>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() neoStyle!: EventEmitter<StyleEventDetail>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() neoBlur!: EventEmitter<void>;

  /**
   * Emitted when the input has focus.
   */
  @Event() neoFocus!: EventEmitter<void>;

  connectedCallback() {
    this.emitStyle();
    this.debounceChanged();
    if (Build.isBrowser) {
      this.el.dispatchEvent(new CustomEvent('neoInputDidLoad', {
        detail: this.el
      }));
    }
  }

  disconnectedCallback() {
    if (Build.isBrowser) {
      document.dispatchEvent(new CustomEvent('neoInputDidUnload', {
        detail: this.el
      }));
    }
  }

  componentDidLoad() {
    this.runAutoGrow();
  }

  // TODO: performance hit, this cause layout thrashing
  private runAutoGrow() {
    const nativeInput = this.nativeInput;
    if (nativeInput && this.autoGrow) {
      readTask(() => {
        nativeInput.style.height = 'inherit';
        nativeInput.style.height = nativeInput.scrollHeight + 'px';
      });
    }
  }

  /**
   * Sets focus on the specified `neo-textarea`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Returns the native `<textarea>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLTextAreaElement> {
    return Promise.resolve(this.nativeInput!);
  }

  private emitStyle() {
    this.neoStyle.emit({
      'interactive': true,
      'textarea': true,
      'input': true,
      'interactive-disabled': this.disabled,
      'has-placeholder': this.placeholder != null,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus
    });
  }

  /**
   * Check if we need to clear the text input if clearOnEdit is enabled
   */
  private checkClearOnEdit() {
    if (!this.clearOnEdit) {
      return;
    }

    // Did the input value change after it was blurred and edited?
    if (this.didBlurAfterEdit && this.hasValue()) {
      // Clear the input
      this.value = '';
    }

    // Reset the flag
    this.didBlurAfterEdit = false;
  }

  private focusChange() {
    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
    if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
      this.didBlurAfterEdit = true;
    }
    this.emitStyle();
  }

  private hasValue(): boolean {
    return this.getValue() !== '';
  }

  private getValue(): string {
    return this.value || '';
  }

  private onInput = (ev: Event) => {
    if (this.nativeInput) {
      this.value = this.nativeInput.value;
    }
    this.emitStyle();
    this.neoInput.emit(ev as KeyboardEvent);
  }

  private onFocus = () => {
    this.hasFocus = true;
    this.focusChange();

    this.neoFocus.emit();
  }

  private onBlur = () => {
    this.hasFocus = false;
    this.focusChange();

    this.neoBlur.emit();
  }

  private onKeyDown = () => {
    this.checkClearOnEdit();
  }

  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findFormGroupLabel(this.el);

    if (label) {
      label.id = labelId;
    }

    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={{
          ...createColorClasses(this.color),
          'has-resize': this.resize,
        }}
      >
        <textarea
          class="native-textarea"
          ref={el => this.nativeInput = el}
          autoCapitalize={this.autocapitalize}
          autoFocus={this.autofocus}
          disabled={this.disabled}
          maxLength={this.maxlength}
          minLength={this.minlength}
          name={this.name}
          placeholder={this.placeholder || ''}
          readOnly={this.readonly}
          required={this.required}
          spellCheck={this.spellcheck}
          cols={this.cols}
          rows={this.rows}
          wrap={this.wrap}
          onInput={this.onInput}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onKeyDown={this.onKeyDown}
        >
          {value}
        </textarea>
      </Host>
    );
  }
}

let textareaIds = 0;