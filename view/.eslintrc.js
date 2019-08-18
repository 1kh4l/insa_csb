module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    rules: {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': ['error', 4],
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never'
        }]
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js','.jsx','.vue']
            }
        },
    },
};
