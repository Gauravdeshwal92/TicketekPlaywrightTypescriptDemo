import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'
import path from 'path'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

dotenv.config({path:path.resolve(__dirname,'.env')});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout:60*1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html',{open:'never'}],
    ['allure-playwright',{
      detail:true,
      outputFolder:'allure-results',
      suiteTitle:true,
      categories: [
          {
            name: 'Timeout & Locator Failures',
            matchedStatuses: ['broken', 'failed'],
            messageRegex: '.*(timeout|waiting for locator|element\\(s\\) not found).*',
          },
          {
            name: 'Assertion / Business Logic Mismatches',
            matchedStatuses: ['failed'],
            messageRegex: '.*(expect\\(|to(Be|Contain|HaveText)).*',
          },
        ]
    }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName:'chromium',
    headless: process.env.HEADLESS === 'true',
    screenshot: 'only-on-failure',
    video:'retain-on-failure',
    viewport:null,
    launchOptions:{
      args:[
        '--start-maximized',
        '--disable-blink-features=AutomationControlled'],
      ignoreDefaultArgs:['--enable-automation'],
    },
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
 

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
