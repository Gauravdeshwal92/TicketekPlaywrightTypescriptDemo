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

Locator: getByRole('link', { name: 'Add More Tickets' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('link', { name: 'Add More Tickets' }) with timeout 10000ms
  - waiting for getByRole('link', { name: 'Add More Tickets' })
    - waiting for "https://premier.ticketek.com.au/events/ESPLOAD/venues/NMO/performances/EMIS2029726NC/seatmap" navigation to finish...
    - navigated to "https://premier.ticketek.com.au/events/ESPLOAD/venues/NMO/performances/EMIS2029726NC/seatmap"
  - Target page, context or browser has been closed

```

```yaml
- banner:
  - link "Ticketek":
    - /url: /default.aspx
    - img "Ticketek"
  - text: 9:38
  - list:
    - listitem: "1"
    - listitem: "2"
    - listitem: "3"
    - listitem: "4"
    - listitem: "5"
- region "View venue map"
- img "ESPLOAD"
- heading "ESPLOAD" [level=1]
- paragraph: Mon 30 Apr 2029 12:03PM
- paragraph: Enmore Theatre, Newtown, NSW
- heading "Your Tickets" [level=4]
- button "Remove offer"
- article: Section GA Row GA Seat - Admit
- article: Section GA Row GA Seat - Admit
- strong: Delivery Method
- text: Mobile Ticket
- region "Your Tickets Remove offer":
  - heading "Order Summary" [level=4]
  - link:
    - /url: javascript:void(0);
  - text: 2 items in basket
  - table:
    - rowgroup:
      - row "Sub-total $0.00":
        - cell "Sub-total":
          - heading "Sub-total" [level=5]
        - cell "$0.00":
          - heading "$0.00" [level=5]
      - row "Ticket/Item Price † $0.00":
        - cell "Ticket/Item Price †":
          - text: Ticket/Item Price
          - superscript: †
        - cell "$0.00"
      - row "Service Fee $0.00":
        - cell "Service Fee"
        - cell "$0.00"
      - row "Handling Fee $0.00":
        - cell "Handling Fee"
        - cell "$0.00"
  - paragraph
  - paragraph:
    - superscript: †
    - text: All ticket/item prices include GST, if applicable, and are quoted in AU$.
- button "Go to checkout"
- button "Cancel"
- text: © 2026 Ticketek Pty Ltd (ABN 92 010 129 110). All rights reserved. Version 5.22 B267 R0
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
> 21 |         await expect(this.addMoreTickets_btn).toBeVisible({ timeout: 10000 });
     |                                               ^ Error: expect(locator).toBeVisible() failed
  22 |         await this.checkout_btn.click()
  23 |     }
  24 | }
```