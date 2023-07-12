// 一开始说这个文件可以被导入到eslintrc.js里面 但试了一下好像不太行...待研究...
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      globalReturn: false,
      arrowFunctions: true,
      destructuring: true,
      classes: true,
      defaultParams: true,
      blockBindings: true,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      restParams: false, // 要求函数的参数必须进行声明或者用对象进行包装
      spread: true,
      forOf: true,
      generators: false, // 与传统方式使用区别大，一般场景用不到
      templateStrings: true,
      superInFunctions: false,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ["import", "babel", "vue"],
  settings: {
    "import/ignore": [
      "node_modules",
      "\\.(json|css|less|scss|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$",
      "\\.eslintrc",
    ],
    "import/extensions": [".js", ".vue"],
    "import/resolver": {
      node: {
        extensions: [".js", ".json"],
      },
    },
  },
  rules: {
    semi: [2, "never"],
  },
};
