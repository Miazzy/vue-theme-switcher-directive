import { ref, computed } from "vue";
import isArray from "lodash/isArray";
import isFunction from "lodash/isFunction";
import isPlainObject from "lodash/isPlainObject";

export default (app, options) => {
  let { themes, theme, getClass } = options || {};

  if (!themes) {
    throw new Error("There are no themes in the options");
  }

  const themesIsPlainObject = isPlainObject(themes);

  if (!(themesIsPlainObject || isArray(themes))) {
    throw new Error("Incorrect themes format");
  }

  const styles = themesIsPlainObject ? themes : null;

  themes = themesIsPlainObject ? Object.keys(themes) : themes;

  if (themes.length === 0) {
    throw new Error("There is no list of themes or styles");
  }

  if (theme && !themes.includes(theme)) {
    throw new Error("The initial theme is not in the list");
  }

  if (getClass && !isFunction(getClass)) {
    throw new Error("getClass parameter must be a function");
  }

  const currentTheme = ref(theme || themes[0]);

  const changeTheme = (theme) => {
    if (!(theme && themes.includes(theme))) {
      throw new Error(`The ${theme} theme does not exist`);
    }

    currentTheme.value = theme;
  };

  app.config.globalProperties.theme = computed(() => currentTheme.value);
  app.config.globalProperties.changeTheme = changeTheme;

  return {
    currentTheme,
    changeTheme,
    styles,
    getClass: getClass
      ? getClass
      : (theme, arg) => `${arg}_theme_default ${arg}_theme_${theme}`,
  };
};
