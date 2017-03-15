# Form numeric input component for [UIkit front-end framework](https://github.com/uikit/uikit)

This component adds nice-looking controls for decrementing and incrementing numeric input value.

## Limitations

- Only integer values are supported at the moment.
- Fast decrementing/incrementing by holding control pressed is not supported.

These features will be implemented in next releases.

## Installation

- Download the [latest release](https://github.com/dmitriyermolin/uikit-form-input-number/releases/latest).
- Install with [Bower](https://bower.io): `bower install uikit-form-input-number`
- Clone the repo to get all source files including build scripts: `git clone git://github.com/dmitriyermolin/uikit-form-input-number.git`

## Usage

Include CSS and JS to the pages, where component should be used. You can do it manually or use Grunt, Gulp, Webpack, whatever you prefer.

Use this markup to initialize component:

```html
<div class="uk-form-input-number" data-uk-form-input-number>
  <a href="" class="uk-form-input-number-decrement" data-uk-form-input-number-decrement><i class="uk-icon-minus"></i></a>
  <input class="uk-text-center">
  <a href="" class="uk-form-input-number-increment" data-uk-form-input-number-increment><i class="uk-icon-plus"></i></a>
</div>
```

You can use other icons for decrement and increments controls, remove text-centering class from input, using your styling instead.
There are several component options:

Option | Type | Default value
--- | --- | ---
min | integer | 0
max | integer | 9007199254740991 (Number.MAX_SAFE_INTEGER)
step | integer | 1

Use these options as in any UIkit component:

```html
<div class="uk-form-input-number" data-uk-form-input-number="{ min: 10, max: 100, step: 5 }">
  <a href="" class="uk-form-input-number-decrement" data-uk-form-input-number-decrement><i class="uk-icon-minus"></i></a>
  <input class="uk-text-center">
  <a href="" class="uk-form-input-number-increment" data-uk-form-input-number-increment><i class="uk-icon-plus"></i></a>
</div>
```
