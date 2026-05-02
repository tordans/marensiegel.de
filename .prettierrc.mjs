/** Prettier is kept only for `.astro` / `.mdx` until Oxfmt supports Astro templates. */
/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 100,
  plugins: ['prettier-plugin-astro'],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
}
