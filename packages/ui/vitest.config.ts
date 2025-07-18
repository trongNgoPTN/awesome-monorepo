import { coverageConfigDefaults, defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/.storybook/**',
        '**/*.stories.*',
        '**/storybook-static/**',
        'src/Demo.tsx',
        'src/index.ts',
        'src/main.tsx',
      ],
    },
  },
});
