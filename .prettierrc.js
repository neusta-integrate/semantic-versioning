const basePrettierConfigFormatterJavascript = require('@neusta-integrate/formatter-javascript/config/prettierConfig');

module.exports = {
  overrides: [
    ...basePrettierConfigFormatterJavascript.overrides,
    // Your other formatter configs here
  ],
  // Your custom configurations here
};
