require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    plugins: ['@babel', 'import', 'vue', 'jest'],
    extends: [
        'plugin:vue/essential',
        'plugin:vue/base',
        'plugin:vue/strongly-recommended',
        '@vue/eslint-config-airbnb',
    ],
    rules: {
        indent: ['error', 4],
        'arrow-parens': [2, 'as-needed'],
        'import/prefer-default-export': ['off'],
        'import/extensions': ['off'],
        'prefer-object-spread': ['off'],
        'prefer-template': ['off'],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'linebreak-style': ['error', 'windows'],
    },
};
