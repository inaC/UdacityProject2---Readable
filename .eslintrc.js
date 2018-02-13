module.exports = {
    "extends": "airbnb",
    "globals": {
      "document": true,
      "window": true
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "function-paren-newline": ["error", "consistent"],
      "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }]
    },
   "parser": "babel-eslint",

}
