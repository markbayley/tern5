
module.exports = {
  "root": true,
  "env": {
    // "browser": true,
    // "node": true,
    "es6": true,
    "es2020": true
  },
  // TODO: we probably don't need babel-eslint parser
  // "parser": "babel-eslint",
  "parserOptions": {
    // "parserOptions": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "react-app",
    "airbnb",
    "airbnb/hooks",
    "airbnb/whitespace",
    "plugin:jsx-a11y/recommended",
  ],
  // default plugins from react-scripts
  // "plugins": ['import', 'flowtype', 'jsx-a11y', 'react', 'react-hooks'],
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "import/no-unused-modules": ["error", { "missingExports": true, "unusedExports": true, "ignoreExports": ["src/serviceWorker.js", "src/*.test.js", "src/index.js"] }],  // this rule requires the modules @typescript-eslint/parser and typescript to be installed ;(
    "import/no-extraneous-dependencies": "error",
    "import/no-unassigned-import": "error",
    "import/named": "error",
    "import/default": "error",

    // don't care settings ... may want to re-enable or re-configure those
    "import/prefer-default-export": "off",
    "camelcase": "off",

    // styles to warn about, producton builds will fail
    "quotes": ["warn", "double"],
    "no-trailing-spaces": "warn",

  }
}
