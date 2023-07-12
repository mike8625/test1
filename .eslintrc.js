module.exports = {
  root: true,
  env: {
    node: true,
  },
  //plugins: ["mike8625"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    //"mike8625/function-endwith-num": ["error"],

    // "prettier/prettier": [
    //   "error",
    //   {
    //     singleQuote: false,
    //     semi: [2, "never"],
    //   },
    // ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
