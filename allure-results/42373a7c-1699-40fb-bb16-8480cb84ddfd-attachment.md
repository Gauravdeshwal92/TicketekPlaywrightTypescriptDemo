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

Locator: locator('ul.seatArea li').filter({ has: getByText('GA', { exact: true }) })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('ul.seatArea li').filter({ has: getByText('GA', { exact: true }) }) with timeout 5000ms
  - waiting for locator('ul.seatArea li').filter({ has: getByText('GA', { exact: true }) })
    - waiting for navigation to finish...
    - navigated to "https://premier.ticketek.com.au/events/ESPLOAD/venues/NMO/performances/EMIS2029726NC/tickets"

```

```yaml
- banner:
  - link "Ticketek":
    - /url: /default.aspx
    - img "Ticketek"
  - text: 9:40
  - list:
    - listitem: "1"
    - listitem: "2"
    - listitem: "3"
    - listitem: "4"
    - listitem: "5"
- img "ESPLOAD"
- heading "ESPLOAD" [level=1]
- paragraph: Mon 30 Apr 2029 12:03PM
- paragraph: Enmore Theatre, Newtown, NSW
- combobox:
  - option "Mon 30 Apr 2029 12:03PM" [selected]
  - option "Mon 30 Apr 2029 12:03PM"
  - option "Tue 01 May 2029 12:03PM"
  - option "Mon 31 Dec 2029 12:03PM"
- heading [level=2]
- list:
  - listitem:
    - text: Best available (Any price) $0.00 - $2.60
    - superscript:
      - link "See pricing and fee information":
        - /url: "#collapsePFI"
    - button "Select Best available (Any price), $0.00 - $2.60": Select
  - listitem:
    - text: GA $0.00
    - superscript:
      - link "See pricing and fee information":
        - /url: "#collapsePFI"
    - button "Select GA, $0.00": Select
  - listitem:
    - text: PL2 Seat $0.10
    - superscript:
      - link "See pricing and fee information":
        - /url: "#collapsePFI"
    - button "Select PL2 Seat, $0.10": Select
  - listitem:
    - text: PL2 Side View $2.50
    - superscript:
      - link "See pricing and fee information":
        - /url: "#collapsePFI"
    - button "Select PL2 Side View, $2.50": Select
  - listitem:
    - text: PL3 Side View $2.60
    - superscript:
      - link "See pricing and fee information":
        - /url: "#collapsePFI"
    - button "Select PL3 Side View, $2.60": Select
- text: Don't miss it. Afterpay it.
- img "afterpay-logo"
- heading "See pricing and fee information Pricing and fee information" [level=5]:
  - superscript:
    - link "See pricing and fee information":
      - /url: "#collapsePFI"
  - text: Pricing and fee information
- region "See pricing and fee information Pricing and fee information":
  - paragraph
  - paragraph
  - paragraph: For this event, a one-off handling fee of $0.00 per transaction applies on all purchases of Standard Tickets. The actual fee may vary depending on the venue and/or method of delivery selected, or where you add other items to your basket. All ticket/item prices displayed for Standard Tickets for this event are subject to change at any time without notice before the point at which you add those tickets to your basket.
  - paragraph
  - paragraph:
    - text: Verified tickets sold by other fans (
    - strong: Verified Fan-to-Fan Tickets
    - text: ) may also be made available for purchase for this event via Ticketek Marketplace. These are legitimate tickets being resold by other fans, and verified and reissued by Ticketek. If you choose these tickets, you will be redirected to the Ticketek Marketplace platform to complete your purchase. All purchases of Verified Fan-to-Fan Tickets on Ticketek Marketplace will incur a Service and Handling Fee of $17.95 and a Ticket Reissue Fee of $14.85.
  - paragraph: All ticket/item prices include GST, if applicable, and are quoted in AU$.
  - paragraph: Ticket orders purchased by credit/debit card are subject to credit/debit card approval and customer account verification.
- button "Back to event details"
- text: © 2026 Ticketek Pty Ltd (ABN 92 010 129 110). All rights reserved. Version 5.22 B267 R0-23276-9b21f58ab32ed76a0008e8046745c2aae3b582ed
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
  16 |         this.selectCategory = this.page.locator('ul.seatArea li');
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
> 27 |        await expect(ticketCategory).toBeVisible()
     |                                     ^ Error: expect(locator).toBeVisible() failed
  28 |        console.log(await ticketCategory.innerText())
  29 |        await ticketCategory.getByRole('button',{'name':/Select/i, exact:false}).click()
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