module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue", "prettier", "eslint-plugin-import-helpers"],
  rules: {
    "prettier/prettier": "error",
    "vue/require-default-prop": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          ["/^vue$/", "/^vue-router$/", "/^vuex$/", "/^@vue/"],
          "module",
          "/^@/",
          [("parent", "sibling", "index")]
        ],
        alphabetize: { order: "ignore", ignoreCase: true }
      }
    ]
  }
}
