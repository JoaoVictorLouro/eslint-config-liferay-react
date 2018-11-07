module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended"
  ],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
          "ecmaVersion": 6,
          "sourceType": "module",
          "arrowFunctions": true,
          "blockBindings": true,
          "classes": true,
          "decorators": true,
          "defaultParams": true,
          "destructuring": true,
          "experimentalDecorators": true,
          "experimentalObjectRestSpread": true,
          "forOf": true,
          "generators": true,
          "global-require": false,
          "jsx": true,
          "modules": true,
          "restParams": true,
          "spread": true,
          "superInFunctions": true,
          "templateStrings": true
    }
  },
  globals: {
    _: true,
    Liferay: true,
    window: true
  },
  env : {
    browser: true,
    es6: true
  },
  plugins: [
      "flowtype",
      "react"
  ],
  rules: {
      "allowIndentationTabs": true,
      "block-scoped-var": "error",
      "comma-dangle": ["error", "never"],
      "complexity": ["off", 11],
      "dot-location": ["error", "property"],
      "dot-notation": ["error", { allowKeywords: true }],
      "eol-last": [2, "never"],
      "import/default": "off",
      "import/extensions": 0,
      "import/named": "error",
      "import/no-cycle": ["error", { maxDepth: Infinity }],
      "import/no-duplicates": "error",
      "import/no-extraneous-dependencies": 0,
      "import/no-named-as-default": "error",
      "import/no-self-import": "error",
      "import/no-unresolved": ["error", { "ignore": ["electron", "readline"] }],
      "indent": ["error", "tab"],
      "no-console": 0,
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "no-else-return": 0,
      "no-implicit-globals": "off",
      "no-redeclare": "error",
      "no-underscore-dangle": 1,
      "no-unused-expressions": 1,
      "no-use-before-define": 1,
      "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],
      "no-useless-constructor": "error",
      "no-var": "error",
      "prefer-const": ["error", {destructuring: "any", ignoreReadBeforeAssign: true}],
      "quotes": ["error","single",{"avoidEscape": true}],
      "radix": "error",
      "react/display-name": 0,
      "react/jsx-filename-extension": 0,
      "react/prefer-stateless-function": 0,
      "semi": [2,"always"],
      "use-isnan": "error",
      "valid-typeof": ["error", { requireStringLiterals: true }]
  },
  settings: {
    react: {
      version: "16.6.0"
    }
  }
};