import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

async function globalSetup() {
  const allureResultsPath = path.resolve(__dirname, 'allure-results');
  await rm(allureResultsPath, { recursive: true, force: true });
  await mkdir(allureResultsPath, { recursive: true });
}

export default globalSetup;
