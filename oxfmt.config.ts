import { defineConfig } from 'oxfmt'

export default defineConfig({
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 100,
  sortTailwindcss: {
    functions: ['clsx'],
    attributes: ['className', 'class:list', 'class'],
  },
  sortPackageJson: false,
  ignorePatterns: ['LICENSE.md'],
})
