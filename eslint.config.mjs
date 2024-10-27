import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  typescript: true,
  vue: true,
}).prepend({
  files: ['**/*.js', '**/*.vue', '**/*.ts'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
});
