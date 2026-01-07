const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  /* Global timeout for each test */
  timeout: 90_000,

  /* Retry on CI or flaky environments */
  retries: 1,

  /* Reporter configuration */
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  /* Shared settings for all projects */
  use: {
    baseURL: 'https://automationintesting.online/',

    /* Browser behavior */
    headless: false,

    /* Artifacts */
    screenshot: 'only-on-failure',

    /* Timeouts */
    actionTimeout: 10_000,
    navigationTimeout: 30_000
  },

  /* Browsers to run against */
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
  ]
});
