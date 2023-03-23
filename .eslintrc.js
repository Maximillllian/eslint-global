require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    plugins: [
        '@babel',
        'import',
        'vue',
        'jest',
    ],
    extends: [
        'plugin:vue/essential',
        'plugin:vue/base',
        'plugin:vue/strongly-recommended',
        '@vue/eslint-config-airbnb',
    ],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'windows'],
    },
};
