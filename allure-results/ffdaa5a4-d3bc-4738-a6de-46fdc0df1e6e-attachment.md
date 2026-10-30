# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutFlow.spec.ts >> End to End checkout flow
- Location: tests/checkoutFlow.spec.ts:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: /find tickets/i })

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
  15 |         this.showTitle_txt=page.getByRole('heading', { name: 'ESPLOAD tickets', exact: true })
  16 |         //this.findTickets_btn = page.locator('input.btn')
  17 |         this.findTickets_btn=page.getByRole('button', { name: /find tickets/i })
  18 |         this.performanceDate=page.getByRole('combobox')
  19 |         this.selectDate=page.locator('option')
  20 |         }
  21 | 
  22 |      async getShowTitle():Promise<String>{
  23 | 
  24 |         const showTitle = await this.showTitle_txt.innerText();
  25 |         console.log(showTitle)
  26 |         return showTitle ? showTitle.replace(/\s+/g,' ').trim() :''
  27 |     }
  28 | 
  29 | 
  30 |     async getVenueSelected():Promise<string>{
  31 | 
  32 |         const venueName = await this.venueName.innerText();
  33 |         return venueName ? venueName.trim() :''
  34 |     }
  35 | 
  36 |     async selectShowDate(date:string){
  37 | 
  38 |         await this.performanceDate.selectOption({ label: date });
  39 |     }
  40 | 
  41 |     async getShowDateSelected(){
  42 | 
  43 |         return await this.performanceDate.innerText()
  44 |     }
  45 | 
  46 |     async clickOnFindTickets(){
> 47 |         await this.findTickets_btn.click()
     |                                    ^ Error: locator.click: Target page, context or browser has been closed
  48 |     }
  49 | }
```