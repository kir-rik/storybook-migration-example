module.exports = {
  addons: [],
  babel: async (options) => options,
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => config
};