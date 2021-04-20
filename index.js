module.exports = {
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'prettier',
    'react',
    'react-hooks',
    'unused-imports',
    'yaml',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:json/recommended',
    'plugin:yaml/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'eol-last': 'error',
    'import/no-unresolved': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react/display-name': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-pascal-case': 'off',
    'react/prop-types': 'off',
    strict: ['error', 'global'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
