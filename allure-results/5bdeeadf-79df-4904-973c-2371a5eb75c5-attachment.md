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
  - waiting for locator('#goToPaymentButton')
    - waiting for navigation to finish...
    - navigated to "https://premier.ticketek.com.au/events/ESPLOAD/venues/NMO/performances/EMIS2029726NC/seatmap"
    - locator resolved to <input type="submit" id="goToPaymentButton" value="Go to checkout" class="btn btn-primary" data-ng-click="gotoPayment()" data-ng-disabled="togglePaymentButton()" data-ng-class="togglePaymentButtonClass()"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import {Locator, Page, expect} from '@playwright/test'
  2  | 
  3  | 
  4  | export class SeatMapPage{
  5  | 
  6  | 
  7  |     checkout_btn:Locator
  8  |     page:Page
  9  |     addMoreTickets_btn:Locator
  10 | 
  11 | 
  12 |     constructor(page:Page){
  13 | 
  14 |         this.page=page
  15 |         this.checkout_btn = page.locator('#goToPaymentButton')
  16 |         this.addMoreTickets_btn = page.getByRole('link',{name:'Add More Tickets'})
  17 | 
  18 |     }
  19 | 
  20 |     async goToCheckout(){
  21 |        // await expect(this.addMoreTickets_btn).toBeVisible({ timeout: 10000 });
  22 |        // await this.checkout_btn.click()
> 23 |         await this.checkout_btn.click({delay:8000})
     |                                 ^ Error: locator.click: Target page, context or browser has been closed
  24 |     }
  25 | }
```