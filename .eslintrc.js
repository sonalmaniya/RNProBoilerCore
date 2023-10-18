module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-native/no-unused-styles': 2,
        'no-unused-expressions': 1, // disallow usage of expressions in statement position
        // 'no-unused-vars': [
        //   1,
        //   {vars: 'all', args: 'none', ignoreRestSiblings: true},
        // ],
        // 'no-unused-vars': 1,
      },
      // '@typescript-eslint/no-use-before-define': 'off',
      // 'react-hooks/exhaustive-deps': 'warn',
      // 'no-unused-expressions': 1, // disallow usage of expressions in statement position
      // 'no-unused-vars': [
      //   1,
      //   {vars: 'all', args: 'none', ignoreRestSiblings: true},
      // ],
      // 'no-unused-vars': 1,
    },
  ],
  rules: {
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
