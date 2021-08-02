const css = (element, styles) => {
  for (const property in styles) {
    element.style[property] = styles[property];
  }
};

const clearCss = (element, styles) => {
  for (const property in styles) {
    delete element.style[property];
  }
};

export { css, clearCss };
