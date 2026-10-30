# Playwright TypeScript Tests

End-to-end tests for the Ticketek checkout flow.

## System requirements

- Windows, macOS, or Linux supported by Playwright
- Node.js 20 or later and npm
- Chromium and its required system dependencies (installed during setup)
- Network access to install dependencies and reach the test environment

## Setup

Install dependencies and the Chromium browser:

```sh
npm ci
npx playwright install chromium
```

Create a `.env` file in the project root:

```dotenv
SHOW_URL=https://your-test-environment/show
LOGIN_API_URL=https://your-test-environment/login
username=your-test-account-email
password=your-test-account-password
```

Keep real credentials out of source control. The `.env` file is ignored by Git.

## Run tests

```sh
npm run checkout
```

To run tests without opening a browser window:

```sh
HEADLESS=true npm run checkout
```

The UI-login checkout test submits payment. Run it only in an authorized test environment where it cannot create a real order or charge.
