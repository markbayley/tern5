module.exports = {
  root: true,
  env: {
    es6: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "react-app",
    "airbnb",
    "airbnb/hooks",
    "plugin:jsx-a11y/recommended",
  ],
  // default plugins from react-scripts
  // "plugins": ['import', 'flowtype', 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/no-unused-modules": [
      "error",
      {
        missingExports: true,
        unusedExports: true,
        ignoreExports: [
          "src/serviceWorker.js",
          "src/*.test.js",
          "src/index.js",
          "src/setupTests.js",
        ],
      },
    ], // this rule requires the modules @typescript-eslint/parser and typescript to be installed ;(
    "import/no-extraneous-dependencies": "error",
    "import/no-unassigned-import": [
      "error",
      { allow: ["**/*.css", "**/*.scss"] },
    ],
    "import/named": "error",
    "import/default": "error",

    // don't care settings ... may want to re-enable or re-configure those
    "import/prefer-default-export": "off",
    camelcase: "off",

    // styles to warn about, producton builds will fail
    quotes: ["warn", "double"],
    "no-trailing-spaces": "warn",
    // allow es properties to be access via bracket notation. (as a side effect allow dangling underscores, and camel case issues)
    "dot-notation": ["error", { allowPattern: "^[a-z]*(_[a-z]+)+$" }],

    // disallow reassignment of function parameters
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    "no-param-reassign": ["error", { props: false }],
    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: {
          minProperties: 5,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    //"comma-dangle": "off",
    // "no-console": "off",
  },
};
