# neo-textarea



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                                                                                                                                                                                                                            | Type                        | Default        |
| ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | -------------- |
| `autoGrow`       | `auto-grow`      | If `true`, the element height will increase based on the value.                                                                                                                                                                                                        | `boolean`                   | `false`        |
| `autocapitalize` | `autocapitalize` | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.                                                                                                                                                      | `string`                    | `'none'`       |
| `autofocus`      | `autofocus`      | This Boolean attribute lets you specify that a form control should have input focus when the page loads.                                                                                                                                                               | `boolean`                   | `false`        |
| `clearOnEdit`    | `clear-on-edit`  | If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.                                                                                                                               | `boolean`                   | `false`        |
| `color`          | `color`          | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string`                    | `undefined`    |
| `cols`           | `cols`           | The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.                                                                                                                                                 | `number`                    | `undefined`    |
| `debounce`       | `debounce`       | Set the amount of time, in milliseconds, to wait to trigger the `neoChange` event after each keystroke.                                                                                                                                                                | `number`                    | `0`            |
| `disabled`       | `disabled`       | If `true`, the user cannot interact with the textarea.                                                                                                                                                                                                                 | `boolean`                   | `false`        |
| `maxlength`      | `maxlength`      | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.                                                                                       | `number`                    | `undefined`    |
| `minlength`      | `minlength`      | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.                                                                                       | `number`                    | `undefined`    |
| `mode`           | `mode`           | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`             | `undefined`    |
| `name`           | `name`           | The name of the control, which is submitted with the form data.                                                                                                                                                                                                        | `string`                    | `this.inputId` |
| `placeholder`    | `placeholder`    | Instructional text that shows before the input has a value.                                                                                                                                                                                                            | `string`                    | `undefined`    |
| `readonly`       | `readonly`       | If `true`, the user cannot modify the value.                                                                                                                                                                                                                           | `boolean`                   | `false`        |
| `required`       | `required`       | If `true`, the user must fill in a value before submitting a form.                                                                                                                                                                                                     | `boolean`                   | `false`        |
| `resize`         | `resize`         | If `true`, the element will be resizeable.                                                                                                                                                                                                                             | `boolean`                   | `false`        |
| `rows`           | `rows`           | The number of visible text lines for the control.                                                                                                                                                                                                                      | `number`                    | `undefined`    |
| `spellcheck`     | `spellcheck`     | If `true`, the element will have its spelling and grammar checked.                                                                                                                                                                                                     | `boolean`                   | `false`        |
| `value`          | `value`          | The value of the textarea.                                                                                                                                                                                                                                             | `string`                    | `''`           |
| `wrap`           | `wrap`           | Indicates how the control wraps text.                                                                                                                                                                                                                                  | `"hard" \| "off" \| "soft"` | `undefined`    |


## Events

| Event       | Description                               | Type                                     |
| ----------- | ----------------------------------------- | ---------------------------------------- |
| `neoBlur`   | Emitted when the input loses focus.       | `CustomEvent<void>`                      |
| `neoChange` | Emitted when the input value has changed. | `CustomEvent<TextareaChangeEventDetail>` |
| `neoFocus`  | Emitted when the input has focus.         | `CustomEvent<void>`                      |
| `neoInput`  | Emitted when a keyboard input occurred.   | `CustomEvent<KeyboardEvent>`             |


## Methods

### `getInputElement() => Promise<HTMLTextAreaElement>`

Returns the native `<textarea>` element used under the hood.

#### Returns

Type: `Promise<HTMLTextAreaElement>`



### `setFocus() => Promise<void>`

Sets focus on the specified `neo-textarea`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                        | Description                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `--background`              | Background of the textarea                                                                                  |
| `--border-radius`           | Border radius of the textarea                                                                               |
| `--color`                   | Color of the text                                                                                           |
| `--padding-bottom`          | Bottom padding of the textarea                                                                              |
| `--padding-end`             | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the textarea |
| `--padding-start`           | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the textarea |
| `--padding-top`             | Top padding of the textarea                                                                                 |
| `--placeholder-color`       | Color of the placeholder text                                                                               |
| `--placeholder-font-style`  | Style of the placeholder text                                                                               |
| `--placeholder-font-weight` | Weight of the placeholder text                                                                              |
| `--placeholder-opacity`     | Opacity of the placeholder text                                                                             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
