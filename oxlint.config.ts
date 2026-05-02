import { defineConfig } from 'oxlint'

/** Rules migrated from `eslint-plugin-astro` recommended (via @oxlint/migrate). */
const astroRecommended = {
  'astro/missing-client-only-directive-value': 'error',
  'astro/no-conflict-set-directives': 'error',
  'astro/no-deprecated-astro-canonicalurl': 'error',
  'astro/no-deprecated-astro-fetchcontent': 'error',
  'astro/no-deprecated-astro-resolve': 'error',
  'astro/no-deprecated-getentrybyslug': 'error',
  'astro/no-unused-define-vars-in-style': 'error',
  'astro/valid-compile': 'error',
} as const

export default defineConfig({
  plugins: ['typescript', 'unicorn', 'oxc', 'react', 'jsx-a11y'],
  categories: {
    correctness: 'error',
  },
  env: {
    builtin: true,
  },
  settings: {
    react: {
      version: '19.0',
    },
  },
  jsPlugins: ['eslint-plugin-astro', 'eslint-plugin-react-compiler'],
  rules: {
    ...astroRecommended,
    'react-compiler/react-compiler': 'off',
  },
  overrides: [
    {
      files: ['**/*.astro', '*.astro'],
      globals: {
        Fragment: 'readonly',
      },
      env: {
        astro: true,
        node: true,
      },
    },
    {
      files: ['**/*.{tsx,jsx}'],
      rules: {
        'react-compiler/react-compiler': 'error',
      },
    },
  ],
})
