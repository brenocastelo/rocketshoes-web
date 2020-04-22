module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    // todas as regras que o prettier não encpontrar, deve apontar erro
    'prettier/prettier': 'error',
    // airbnb permine código jsx somente em aquivos .jsx, mas vamos usar o .js
    // regra para apontar erro se a extensão não for .js u .jsx
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    // desativa regra que obrigado quando tem apenas um export em um aquitvo, que ele seja export default
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': [0],
    'react/static-property-placement': [0],
    'jsx-a11y/label-has-associated-control': [0],
    'no-console': ['error', { allow: ['tron'] }],
    'no-param-reassign': 'off',
  },
};
