module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // settings: {
  //   react: {
  //     version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
  //   },
  //   'import/resolver': {
  //     alias: [['src', './src']],
  //   },
  // },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-shadow': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
