const js = Object.freeze({
  'constructor-super': 'error',
  'getter-return': 'error',
  'for-direction': 'error',
  'no-async-promise-executor': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  'no-constant-binary-expression': 'error',
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-import-assign': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-self-assign': 'error',
  'no-setter-return': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-this-before-super': 'error',
  'no-undef': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': 'off',
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  'no-with': 'error',
  'require-yield': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
  'no-var': 'error',
  'prefer-const': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'no-duplicate-imports': 'error',
  'no-promise-executor-return': 'error',
  'no-self-compare': 'error',
  'no-template-curly-in-string': 'error',
  'no-unassigned-vars': 'error'
})

const ts = Object.freeze({
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-empty-object-type': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-function-type': 'error',
  '@typescript-eslint/no-unused-expressions': 'error',
  '@typescript-eslint/no-unused-vars': ['error'],
  '@typescript-eslint/no-wrapper-object-types': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/triple-slash-reference': 'error'
})

const reactHooks = Object.freeze({
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn'
})

const stylistic = Object.freeze(
  {
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    '@stylistic/arrow-spacing': ['error', { after: true, before: true }],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/comma-spacing': ['error', { after: true, before: false }],
    '@stylistic/comma-style': ['error', 'last'],
    '@stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': 'error',
    '@stylistic/generator-star-spacing': ['error', { after: true, before: false }],
    '@stylistic/indent': [
      'error', 2,
      {
        ArrayExpression: 1,
        CallExpression: { arguments: 1 },
        flatTernaryExpressions: false,
        FunctionDeclaration: { body: 1, parameters: 1, returnType: 1 },
        FunctionExpression: { body: 1, parameters: 1, returnType: 1 },
        ignoreComments: false,
        ignoredNodes: ['TSUnionType', 'TSIntersectionType'],
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        offsetTernaryExpressions: true,
        outerIIFEBody: 1,
        SwitchCase: 1,
        tabLength: 2,
        VariableDeclarator: 1
      }
    ],
    '@stylistic/indent-binary-ops': ['error', 2],
    '@stylistic/key-spacing': ['error', { afterColon: true, beforeColon: false }],
    '@stylistic/keyword-spacing': ['error', { after: true, before: true }],
    '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@stylistic/max-statements-per-line': ['error', { max: 1 }],
    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'none', requireLast: false },
        multilineDetection: 'brackets',
        overrides: {
          interface: { multiline: { delimiter: 'none', requireLast: false } }
        },
        singleline: { delimiter: 'comma' }
      }
    ],
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/new-parens': 'error',
    '@stylistic/no-extra-parens': ['error', 'functions'],
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
        groups: [
          [
            '==', '!=', '===',
            '!==', '>', '>=',
            '<', '<='
          ],
          ['&&', '||'],
          ['in', 'instanceof']
        ]
      }
    ],
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/operator-linebreak': ['error', 'before'],
    '@stylistic/padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/quotes': [
      'error',
      'single',
      { allowTemplateLiterals: 'always', avoidEscape: false }
    ],
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/semi-spacing': ['error', { after: true, before: false }],
    '@stylistic/space-before-blocks': ['error', 'always'],
    '@stylistic/space-before-function-paren': [
      'error',
      { anonymous: 'always', asyncArrow: 'always', named: 'never' }
    ],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': ['error', { nonwords: false, words: true }],
    '@stylistic/spaced-comment': [
      'error',
      'always',
      {
        block: { balanced: true, exceptions: ['*'], markers: ['!'] },
        line: { exceptions: ['/', '#'], markers: ['/'] }
      }
    ],
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/template-tag-spacing': ['error', 'never'],
    '@stylistic/type-annotation-spacing': ['error', {}],
    '@stylistic/type-generic-spacing': 'error',
    '@stylistic/type-named-tuple-spacing': 'error',
    '@stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    '@stylistic/yield-star-spacing': ['error', { after: true, before: false }],
    '@stylistic/jsx-closing-bracket-location': 'error',
    '@stylistic/jsx-closing-tag-location': 'error',
    '@stylistic/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
    '@stylistic/jsx-curly-newline': 'error',
    '@stylistic/jsx-curly-spacing': ['error', 'never'],
    '@stylistic/jsx-equals-spacing': 'error',
    '@stylistic/jsx-first-prop-new-line': 'error',
    '@stylistic/jsx-function-call-newline': ['error', 'multiline'],
    '@stylistic/jsx-indent-props': ['error', 2],
    '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    '@stylistic/jsx-quotes': 'error',
    '@stylistic/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never'
      }
    ],
    '@stylistic/jsx-wrap-multilines': [
      'error',
      {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        propertyValue: 'parens-new-line',
        return: 'parens-new-line'
      }
    ]
  }
)

export default { js, ts, reactHooks, stylistic }
