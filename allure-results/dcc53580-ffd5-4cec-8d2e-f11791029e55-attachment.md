# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutFlow.spec.ts >> End to End checkout flow
- Location: tests/checkoutFlow.spec.ts:5:5

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
Call log:
  - waiting for locator('h1.sectionHeading')

```

# Test source

```ts
  1  | 
  2  | import type {Page, Locator} from '@playwright/test'
  3  | import { TIMEOUT } from 'node:dns';
  4  | 
  5  | export class ShowPage{
  6  | 
  7  |     venueName: Locator;
  8  |     showTitle_txt: Locator;
  9  |     findTickets_btn: Locator;
  10 |     performanceDate:Locator
  11 |     selectDate:Locator
  12 | 
  13 |     constructor(page:Page){
  14 |         this.venueName = page.locator('span.plainText');
  15 |         this.showTitle_txt = page.locator('h1.sectionHeading');
  16 |         this.findTickets_btn = page.locator('input.btn')
  17 |         this.performanceDate=page.getByRole('combobox')
  18 |         this.selectDate=page.locator('option')
  19 |         }
  20 | 
  21 |      async getShowTitle():Promise<String>{
  22 | 
> 23 |         const showTitle = await this.showTitle_txt.innerText();
     |                                                    ^ Error: locator.innerText: Target page, context or browser has been closed
  24 |         return showTitle ? showTitle.replace(/\s+/g,' ').trim() :''
  25 |     }
  26 | 
  27 | 
  28 |     async getVenueSelected():Promise<string>{
  29 | 
  30 |         const venueName = await this.venueName.innerText();
  31 |         return venueName ? venueName.trim() :''
  32 |     }
  33 | 
  34 |     async selectShowDate(date:string){
  35 | 
  36 |         await this.performanceDate.selectOption({ label: date });
  37 |     }
  38 | 
  39 |     async getShowDateSelected(){
  40 | 
  41 |         return await this.performanceDate.innerText()
  42 |     }
  43 | 
  44 |     async clickOnFindTickets(){
  45 |         await this.findTickets_btn.click()
  46 |     }
  47 | }
```