import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  snapshotPathTemplate: '{testDir}/screenshots/{testFilePath}/{arg}{ext}',

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [['html', { open: 'never' }], process.env.CI ? ['github'] : ['list']],

  use: {
    baseURL: 'http://localhost:3000',

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: process.env.CI ? 'retain-on-failure' : 'off',

    actionTimeout: 10_000,
    navigationTimeout: 30_000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // webServer: {
  //   command: 'npm run dev',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  //   timeout: 120 * 1000,
  // },
});
