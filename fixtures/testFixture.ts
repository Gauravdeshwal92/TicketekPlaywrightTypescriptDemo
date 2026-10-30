import { test as baseTest, expect, type Cookie, type Page } from '@playwright/test';
import { POManager } from '../pages/POManager';


export type AuthData = {
  token: string;
  cookies: Cookie[];
};

type PageFixtures = {
  pom: POManager;

};

export const test = baseTest.extend<PageFixtures>({

  pom: async ({ page }, use) => {
    const pom = new POManager(page);
    await use(pom);
  },

  page: async ({ page }, use) => {
    await page.addLocatorHandler(
      page.getByRole('heading', { name: 'We value your privacy' }),
      async () => {
        await page.getByRole('button', { name: 'Close' }).click();
      }
    );
    await use(page);
  },
});

export { expect } from '@playwright/test';
export { Page } from '@playwright/test';