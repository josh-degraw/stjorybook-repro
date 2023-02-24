export default {
  stories: ["../src/**/*.stories.(ts|tsx|js|jsx)"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: true,
  },
};
