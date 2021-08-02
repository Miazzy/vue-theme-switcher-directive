const pascalcase = require("pascalcase");
const { name, version, author, license } = require("./package.json");

module.exports = {
  input: "src/index.js",
  output: {
    format: ["es", "cjs", "umd"],
    moduleName: pascalcase(name),
  },
  banner: `/*!
  * ${name} v${version}
  * (c) ${new Date().getFullYear()} ${author.name}
  * @license ${license}
  */`,
};
