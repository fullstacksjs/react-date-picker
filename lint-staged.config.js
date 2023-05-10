module.exports = {
  '*.{md,json}': ['prettier --write', 'cspell --no-must-find-files'],
  '*.{ts,tsx}': ['eslint --fix', 'cspell --no-must-find-files'],
};
