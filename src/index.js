import { watch } from "vue";
import init from "./init";
import { css, clearCss } from "./helpers";

export default {
  install(app, options) {
    const { currentTheme, changeTheme, styles, getClass } = init(app, options);

    const addClass = (el, cssClass) => {
      el.classList.add(...cssClass.trim().split(/\s+/));
    };

    const removeClass = (el, cssClass) => {
      el.classList.remove(...cssClass.trim().split(/\s+/));
    };

    const addStyles = (el, theme, arg, styles) => {
      if (!theme) return;

      if (styles && styles.default && styles.default[arg]) {
        css(el, styles.default[arg]);
      }

      if (styles && styles[theme][arg]) {
        css(el, styles[theme][arg]);
      } else {
        addClass(el, getClass(theme, arg));
      }
    };

    const removeStyles = (el, theme, arg, styles) => {
      if (!theme) return;

      if (styles && styles[theme][arg]) {
        clearCss(el, styles[theme][arg]);
      } else {
        removeClass(el, getClass(theme, arg));
      }
    };

    app.directive("theme", {
      mounted(el, binding) {
        const { arg } = binding;

        if (!arg) return;

        addStyles(el, currentTheme.value, arg, styles);

        el.unwatch = watch(currentTheme, (theme, prevTheme) => {
          removeStyles(el, prevTheme, arg, styles);
          addStyles(el, theme, arg, styles);
        });
      },
      unmounted(el) {
        if (el.unwatch) el.unwatch();
      },
    });

    app.directive("theme-switcher", {
      mounted(el, binding) {
        el.addEventListener("click", () => {
          const { arg } = binding;
          changeTheme(arg);
        });
      },
    });
  },
};
