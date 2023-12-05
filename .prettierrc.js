const basePrettierConfigFormatterJavascript = require("@open4business/formatter-javascript/config/prettierConfig");

module.exports = {
  overrides: [
    ...basePrettierConfigFormatterJavascript.overrides,
    // Your other formatter configs here
  ],
  // Your custom configurations here
};
