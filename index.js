const plugin = require("tailwindcss/plugin");

module.exports = plugin(function({ addUtilities, theme, variants }) {
  const stackTokens = theme("stack");
  const stackVariants = variants("stack", []);

  if (!stackTokens) {
    console.warn(
      'Please add a "stack" key to your Tailwind config (under "theme") in order to use tailwind-stack-plugin'
    );
    return;
  }

  Object.keys(stackTokens).forEach(token => {
    const spacingValue = stackTokens[token];

    // Vertical Classes
    const baseStackClass = `.stack-${token}`;
    const resetClass = `${baseStackClass} > *`;
    const spacingClass = `${baseStackClass} > * + *`;

    const verticalClasses = {
      [baseStackClass]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
      },
      [resetClass]: {
        margin: 0
      },
      [spacingClass]: {
        marginTop: spacingValue
      }
    };

    // Inline Classes
    const inlineBaseStackClass = `.stack-inline-${token}`;
    const inlineResetClass = `${inlineBaseStackClass} > *`;
    const inlineSpacingClass = `${inlineBaseStackClass} > * + *`;

    const inlineClasses = {
      [inlineBaseStackClass]: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
      },
      [inlineResetClass]: {
        margin: 0
      },
      [inlineSpacingClass]: {
        marginLeft: spacingValue
      }
    };

    addUtilities({ ...verticalClasses, ...inlineClasses }, stackVariants);
  });
});
