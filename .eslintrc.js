module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'linebreak-style': ['error', 'unix'],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
                ObjectPattern: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
                ImportDeclaration: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
                ExportDeclaration: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
            },
        ],
        // 'array-bracket-newline': ['error', { minItems: 4 }],
    },
};
