# vue-theme-switcher-directive

> Vue 3 directive to switch css theme

## [Demo](https://chamexxxx.github.io/vue-theme-switcher-directive/)

## Installation

You can use NPM or Yarn to add this plugin to your project

```bash
npm install vue-theme-switcher-directive
# or
yarn add vue-theme-switcher-directive
```

You need to install this plugin in you main.js

```js
import { createApp } from "vue";
import VueThemeSwitcherDirective from "vue-theme-switcher-directive";

app.use(VueThemeSwitcherDirective, {
  themes: ["light", "dark"],
  theme: "light",
});
```

After installing the plugin, you will have the `v-theme` and `v-theme-switcher` directives,
the global `theme` property and the global `changeTheme` method

## Usage

Set styles in css file

```css
.title_theme_default {
  font-family: "Balsamiq Sans", serif;
}

.title_theme_light {
  color: #3eaf7c;
}

.title_theme_dark {
  color: #ffffff;
}
```

or specify them in the options in the themes property

```js
app.use(VueThemeSwitcherDirective, {
  themes: {
    default: {
      title: {
        fontFamily: '"Balsamiq Sans", serif',
      },
    },
    light: {
      title: {
        color: "#3eaf7c",
      },
    },
    dark: {
      title: {
        color: "#ffffff",
      },
    },
  },
  theme: "light",
});
```

### v-theme

You can add the `v-theme directive` to the dom elements for which you want to change the theme.

```html
<!-- App.vue -->
<h1 v-theme:title>...</h1>
```

### v-theme-switcher

You can use the `v-theme-switcher` directive to change the theme.

```html
<!-- App.vue -->
<button v-theme-switcher:dark>...</button>
```

## Saving to permanent storage

Example of getting and saving the current theme to local storage

```js
app.use(VueThemeSwitcherDirective, {
  themes: ["light", "dark"],
  theme: localStorage.getItem("theme") || "light",
  afterChanged: (theme) => {
    localStorage.setItem("theme", theme);
  },
});
```

## Options

| Property     | Description                                                                                                                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| themes       | Array of themes or object with styles                                                                                                                                                                             |
| theme        | Initial theme                                                                                                                                                                                                     |
| getClass     | A function that allows you to override the getting of the class <br> Arguments: <br>`theme` - the current theme <br>`arg` - the argument passed to the v-theme directive <br> The function should return a string |
| afterChanged | Hook that is executed after changing the theme <br> Arguments: <br> `theme` - new theme <br> `prevTheme` - previous theme                                                                                         |

## License

The code is available under the [MIT](LICENSE) license.
