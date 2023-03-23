require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
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
