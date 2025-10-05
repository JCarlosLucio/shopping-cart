/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: 'always',
  quoteProps: 'as-needed',
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  proseWrap: 'always',
  endOfLine: 'auto',
  jsxSingleQuote: false,
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  singleAttributePerLine: false,
  vueIndentScriptAndStyle: false,
  requirePragma: false,
  insertPragma: false,
};

// jsxBracketSameLine: false // [deprecated]

export default config;
