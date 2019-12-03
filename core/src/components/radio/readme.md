# neo-radio



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                            | Type      | Default        |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------- |
| `checked`  | `checked`  | If `true`, the radio is selected.                                                                                                                                                                                                                                      | `boolean` | `false`        |
| `color`    | `color`    | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string`  | `undefined`    |
| `disabled` | `disabled` | If `true`, the user cannot interact with the radio.                                                                                                                                                                                                                    | `boolean` | `false`        |
| `name`     | `name`     | The name of the control, which is submitted with the form data.                                                                                                                                                                                                        | `string`  | `this.inputId` |
| `value`    | `value`    | the value of the radio.                                                                                                                                                                                                                                                | `any`     | `undefined`    |


## Events

| Event       | Description                                | Type                                  |
| ----------- | ------------------------------------------ | ------------------------------------- |
| `neoBlur`   | Emitted when the radio button loses focus. | `CustomEvent<void>`                   |
| `neoFocus`  | Emitted when the radio button has focus.   | `CustomEvent<void>`                   |
| `neoSelect` | Emitted when the radio button is selected. | `CustomEvent<RadioChangeEventDetail>` |


## CSS Custom Properties

| Name                   | Description                           |
| ---------------------- | ------------------------------------- |
| `--background-checked` | Background Color of the checked radio |
| `--color-checked`      | Color of the checked radio            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
