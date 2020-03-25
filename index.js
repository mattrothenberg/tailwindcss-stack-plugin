const plugin = require("tailwindcss/plugin");

module.exports = plugin(function({ addUtilities, theme }) {
  const stackTokens = theme("stack");

  Object.keys(stackTokens).forEach(token => {
    const baseStackClass = `.stack-${token}`;
    const resetClass = `${baseStackClass} > *`;
    const spacingClass = `${baseStackClass} > * + *`;
    const spacingValue = stackTokens[token];

    const stackClassMap = {
      [baseStackClass]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
      },
      [resetClass]: {
        marginTop: 0,
        marginBottom: 0
      },
      [spacingClass]: {
        marginTop: spacingValue
      }
    };

    addUtilities(stackClassMap, ["responsive"]);
  });
});
