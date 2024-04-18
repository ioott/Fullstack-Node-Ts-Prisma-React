export default {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
    {
      "env": {
        "node": true,
      },
      "files": [".eslintrc.{js,cjs}"],
      "parserOptions": {
        "sourceType": "script",
      },
    },
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./projeto_fullstack/backend/tsconfig.json"
  },
  "plugins": ["react"],
  "rules": {
  },
};
