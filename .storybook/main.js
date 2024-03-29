module.exports = {
  features: {
    postcss: false,
  },
  typescript: {
    reactDocgen: 'none'
  },
  stories: [
    "../src/components/**/stories.tsx",
    "../src/templates/**/stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}

