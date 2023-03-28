/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: "avoid",
  semi: true,
  bracketSameLine: true,
  endOfLine: "lf",
  jsxSingleQuote: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  bracketSpacing: true,
  plugins: [require("prettier-plugin-tailwindcss")]
};
