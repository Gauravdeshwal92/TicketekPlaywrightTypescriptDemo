# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutFlow.spec.ts >> End to End checkout flow
- Location: tests/checkoutFlow.spec.ts:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Your basket' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Your basket' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Your basket' })

```

```yaml
- iframe
- iframe
```

# Test source

```ts
  1  | import {Page, Locator,expect} from '@playwright/test'
  2  | 
  3  | 
  4  | export class CheckoutPage{
  5  | 
  6  | 
  7  |     yourBasket_txt:Locator
  8  |     basketSeatSection:Locator
  9  |     deliveryMethodBasket:Locator
  10 |     submitPayment_btn:Locator
  11 |     enmoreTheatre_tAndC:Locator
  12 |     espload_tAndC:Locator
  13 |     
  14 | 
  15 |     constructor(page:Page){
  16 | 
  17 |         this.yourBasket_txt=page.getByRole('heading',{name:'Your basket'});
  18 |         this.basketSeatSection = page.locator('.basket_seat_section')
  19 |         this.deliveryMethodBasket=page.getByLabel('Delivery Method')
  20 |         this.submitPayment_btn=page.locator('.submitPayment')
  21 |         this.enmoreTheatre_tAndC=page.getByRole('checkbox',{name:'Enmore Theatre'})
  22 |         this.espload_tAndC=page.getByRole('checkbox',{name:'ESPLOAD'})
  23 | 
  24 | 
  25 | 
  26 |     }
  27 | 
  28 |     async noOfItemsInBasket(category: string) {
> 29 |         await expect(this.yourBasket_txt).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
  30 |         const matchingItems = this.basketSeatSection.filter({ hasText: category });
  31 |         await expect(matchingItems.first()).toBeVisible();
  32 |         return matchingItems.count();
  33 |     }
  34 | 
  35 |     async deliveryMethodInBasket(){
  36 |         return await this.deliveryMethodBasket.innerText()
  37 |         
  38 |     }
  39 | 
  40 |     async submitPayment(){
  41 |         await this.submitPayment_btn.click()
  42 |     }
  43 | 
  44 |     async selectTermsAndCondition(){
  45 |         await this.enmoreTheatre_tAndC.check()
  46 |         await this.espload_tAndC.check()
  47 |     }
  48 | 
  49 | 
  50 | }
```