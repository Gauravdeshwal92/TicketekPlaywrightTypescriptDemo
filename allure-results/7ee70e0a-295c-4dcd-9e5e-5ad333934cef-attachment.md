# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutFlow.spec.ts >> End to End checkout flow
- Location: tests/checkoutFlow.spec.ts:5:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('input.btn') to be visible

```

# Test source

```ts
  1  | 
  2  | import type {Page, Locator} from '@playwright/test'
  3  | import { TIMEOUT } from 'node:dns';
  4  | 
  5  | export class ShowPage{
  6  | 
  7  |     cookieCloseButton: Locator;
  8  |     venueName: Locator;
  9  |     showTitle_txt: Locator;
  10 |     findTickets_btn: Locator;
  11 |     performanceDate:Locator
  12 |     selectDate:Locator
  13 |     buyButtonSpinner:Locator
  14 | 
  15 |     constructor(page:Page){
  16 |         this.cookieCloseButton = page.getByRole('button', { name: 'Close' });
  17 |         this.venueName = page.locator('span.plainText');
  18 |         this.showTitle_txt = page.locator('h1.sectionHeading');
  19 |         this.findTickets_btn = page.locator('input.btn')
  20 |         this.performanceDate=page.getByRole('combobox')
  21 |         this.selectDate=page.locator('option')
  22 |         this.buyButtonSpinner = page.locator('#buyButton-three-dots');
  23 |     }
  24 | 
  25 |      async getShowTitle():Promise<String>{
  26 | 
  27 |         const showTitle = await this.showTitle_txt.innerText();
  28 |         return showTitle ? showTitle.replace(/\s+/g,' ').trim() :''
  29 |     }
  30 | 
  31 | 
  32 |     async getVenueSelected():Promise<string>{
  33 | 
  34 |         const venueName = await this.venueName.innerText();
  35 |         return venueName ? venueName.trim() :''
  36 |     }
  37 | 
  38 |     async selectShowDate(date:string){
  39 | 
  40 |         //await this.performanceDate.click()
  41 |         await this.performanceDate.selectOption({ label: date });
  42 |        // this.buyButtonSpinner.waitFor({state:'hidden', timeout:10000}).catch(()=>{});
  43 |     }
  44 | 
  45 |     async getShowDateSelected(){
  46 | 
  47 |         return await this.performanceDate.innerText()
  48 |     }
  49 | 
  50 |     async clickOnFindTickets(){
> 51 |         await this.findTickets_btn.waitFor({ state: 'visible', timeout: 15000 })
     |                                    ^ Error: locator.waitFor: Target page, context or browser has been closed
  52 |         await this.findTickets_btn.click();
  53 |     }
  54 | }
```