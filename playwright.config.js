// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { worker } from 'node:cluster';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  workers: 2,
  use: {
  browserName: 'chromium',
   headless: false,
   storageState: 'state.json',
  },
  reporter: 'html',
 

  /* Configure projects for major browsers */
  
});
module.exports = config;

