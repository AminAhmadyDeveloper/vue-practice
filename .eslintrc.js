module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "vue/require-default-prop": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  parser: "vue-eslint-parser",
  plugins: ["@typescript-eslint"],
};
