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
  - waiting for locator('li').filter({ has: getByText('GA', { exact: true }) }).getByRole('button', { name: 'Select', exact: true })

```

# Test source

```ts
  1  | import {Locator, Page, expect} from '@playwright/test'
  2  | 
  3  | 
  4  | export class SelectTicketCategories{
  5  | 
  6  |     page:Page
  7  |     chooseYourTickets_txt:Locator
  8  |     selectCategory:Locator
  9  |     priceCategory:Locator
  10 |     next_btn:Locator
  11 |     
  12 | 
  13 | 
  14 |     constructor(page:Page){
  15 |         this.page=page;
  16 |         this.selectCategory = this.page.locator('li');
  17 |         this.priceCategory = page.locator('.selectTktBlock')
  18 |         this.chooseYourTickets_txt = page.getByRole('heading',{'name':'Choose your tickets'})
  19 |         this.next_btn = page.getByRole('button', { name: 'Next' })
  20 | 
  21 | 
  22 |     }
  23 | 
  24 | 
  25 |     async selectTicketCategory(categoryName :string){
  26 |        const ticketCategory = this.selectCategory.filter({has: this.page.getByText(categoryName, { exact: true })})
  27 |        await expect(ticketCategory).toBeVisible()
  28 |        console.log(await ticketCategory.innerText())
> 29 |        await ticketCategory.getByRole('button',{'name':'Select', exact:true}).click()
     |                                                                               ^ Error: locator.click: Target page, context or browser has been closed
  30 |     }
  31 | 
  32 |     async selectTicketQuantity(priceType:string,noOfTickets:number){
  33 |         const ticketQuantity = this.priceCategory.filter({hasText:priceType}).first()
  34 |         await expect(ticketQuantity).toBeVisible()
  35 | 
  36 |             for (let i = 0; i < noOfTickets; i++) {
  37 |                 await ticketQuantity.getByRole('button', { name: 'Increase quantity' }).click()
  38 |              }
  39 |     }
  40 | 
  41 |     async chooseInAppDeliveryOption(deliveryOption:string){
  42 | 
  43 |        if( !await this.page.getByText(deliveryOption, { exact: true }).isChecked()){
  44 |             await this.page.getByText(deliveryOption).click();
  45 |        }
  46 |     }
  47 | 
  48 |     async clickOnNextButton(){
  49 |         await this.next_btn.click()
  50 |     }
  51 | 
  52 | 
  53 | }
```