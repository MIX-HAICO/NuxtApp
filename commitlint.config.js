module.exports = {
  // type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
  // type in following set: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test
  // see more https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', ['sentence-case']],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'sayhi',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        ':grinning:',
        ':smile:',
        ':laughing:',
        ':rofl:',
        ':slightly_smiling_face:',
        ':skull_and_crossbones:',
        ':ghost:',
        ':100:',
      ],
    ],
  },
}
