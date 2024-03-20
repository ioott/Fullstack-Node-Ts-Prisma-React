module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "airbnb",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "react/recommended",
    "@typescript-eslint/recommended",
    "prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
