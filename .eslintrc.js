module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0,
    "vue/require-prop-types":0,
    "no-console":0,
    "vue/no-template-shadow":0,
    'no-lonely-if':0,
    'vue/no-async-in-computed-properties':0,
  },
}
