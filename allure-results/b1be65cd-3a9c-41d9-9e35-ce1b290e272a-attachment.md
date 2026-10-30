# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutFlow.spec.ts >> End to End checkout flow using login API
- Location: tests/checkoutFlow.spec.ts:35:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import { test as baseTest, expect, type Cookie, type Page } from '@playwright/test';
  2  | import { POManager } from '../pages/POManager';
  3  | import { ENV } from '../config/environment';
  4  | 
  5  | export type AuthData = {
  6  |   token: string;
  7  |   cookies: Cookie[];
  8  | };
  9  | 
  10 | type PageFixtures = {
  11 |   pom: POManager;
  12 |   auth: AuthData;
  13 | };
  14 | 
  15 | export const test = baseTest.extend<PageFixtures>({
  16 |   auth: async ({ request }, use) => {
  17 |     const { email, password } = ENV.credentials;
  18 |     if (!email || !password) {
  19 |       throw new Error('API login requires username and password to be set in .env');
  20 |     }
  21 | 
  22 |     const loginResponse = await request.post(ENV.authLoginUrl, {
  23 |       data: { email, password },
  24 |     });
  25 |     if (!loginResponse.ok()) {
  26 |       throw new Error(`API login failed with HTTP ${loginResponse.status()}`);
  27 |     }
  28 | 
> 29 |     const responseBody = await loginResponse.json();
     |                          ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  30 |     const token = responseBody.token || responseBody.accessToken || '';
  31 | 
  32 |     const storageState = await request.storageState();
  33 |     const authCookies = storageState.cookies;
  34 | 
  35 |     await use({ token, cookies: authCookies });
  36 |   },
  37 | 
  38 |   pom: async ({ page }, use) => {
  39 |     const pom = new POManager(page);
  40 |     await use(pom);
  41 |   },
  42 | 
  43 |   page: async ({ page }, use) => {
  44 |     await page.addLocatorHandler(
  45 |       page.getByRole('heading', { name: 'We value your privacy' }),
  46 |       async () => {
  47 |         await page.getByRole('button', { name: 'Close' }).click();
  48 |       }
  49 |     );
  50 |     await use(page);
  51 |   },
  52 | });
  53 | 
  54 | export { expect } from '@playwright/test';
  55 | export { Page } from '@playwright/test';
```