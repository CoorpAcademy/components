module.exports = {
  env: {
    es6: true,
    node: true
  },
  plugins: [
    "@coorpacademy/coorpacademy",
    "@typescript-eslint"
  ],
  extends: [
    "plugin:@coorpacademy/coorpacademy/core",
    "plugin:@coorpacademy/coorpacademy/ava",
    "plugin:@coorpacademy/coorpacademy/es20XX",
    "plugin:@coorpacademy/coorpacademy/lodash-fp",
    "plugin:@coorpacademy/coorpacademy/prettier",
    'plugin:@typescript-eslint/recommended',
    "plugin:import/typescript"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "project": "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/indent": "off",
    "ava/no-ignored-test-files": ["error", { "files": ["**/test/**/*.ts"] }],
    "no-restricted-properties": ["error", {
      "object": "Object",
      "property": "keys",
      "message": "IE doesn't support Object.keys with non-Object value. Use _.keys instead."
    }]
  },
  settings: {
  }
}
