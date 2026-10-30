# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkoutFlow.spec.ts >> End to End checkout flow
- Location: tests/checkoutFlow.spec.ts:5:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('ul.seatarea').getByRole('listitem').filter({ has: getByText('GA', { exact: true }) }).getByRole('button', { name: 'Select', exact: true })
    - found getByRole('heading', { name: 'We value your privacy' }), intercepting action to run the handler
    - locator handler has finished, waiting for getByRole('heading', { name: 'We value your privacy' }) to be hidden
    - interception handler has finished, continuing

```

# Page snapshot

```yaml
- generic [active] [ref=f12e1]:
  - banner [ref=f12e2]:
    - generic [ref=f12e3]:
      - link [ref=f12e4] [cursor=pointer]:
        - /url: /default.aspx
        - img "Ticketek" [ref=f12e5]
      - generic [ref=f12e6]:
        - generic [ref=f12e7]:
          - generic [aria-hidden] [ref=f12e8]: 
          - generic [ref=f12e10]:
            - generic [ref=f12e11]: "9"
            - text: ":"
            - generic [ref=f12e12]: "01"
        - list [ref=f12e13]:
          - listitem [ref=f12e14]: "1"
          - listitem [ref=f12e15]: "2"
          - listitem [ref=f12e16]: "3"
          - listitem [ref=f12e17]: "4"
          - listitem [ref=f12e18]: "5"
      - text: 
  - generic [ref=f12e21]:
    - generic [ref=f12e25]:
      - text:     
      - generic [ref=f12e26]:
        - generic [ref=f12e29]:
          - generic [ref=f12e30]:
            - img "ESPLOAD" [ref=f12e32]
            - generic [ref=f12e33]:
              - heading "ESPLOAD" [level=1] [ref=f12e34]
              - paragraph [ref=f12e35]: Mon 30 Apr 2029 12:03PM
              - paragraph [ref=f12e36]: Enmore Theatre, Newtown, NSW
            - text: 
          - combobox [ref=f12e39] [cursor=pointer]:
            - option "Mon 30 Apr 2029 12:03PM" [selected]
            - option "Mon 30 Apr 2029 12:03PM"
            - option "Tue 01 May 2029 12:03PM"
            - option "Mon 31 Dec 2029 12:03PM"
        - text: 
        - generic [ref=f12e42]:
          - heading [level=2]
          - generic [ref=f12e43]:
            - list [ref=f12e44]:
              - listitem [ref=f12e45] [cursor=pointer]:
                - generic [ref=f12e47]: Best available (Any price)
                - generic [ref=f12e48]:
                  - text: $0.00 - $2.60
                  - superscript [ref=f12e49]:
                    - link "See pricing and fee information" [ref=f12e50]:
                      - /url: "#collapsePFI"
                      - text: †
                - button "Select Best available (Any price), $0.00 - $2.60" [ref=f12e52]: Select
              - listitem [ref=f12e53] [cursor=pointer]:
                - generic [ref=f12e55]: GA
                - generic [ref=f12e56]:
                  - text: $0.00
                  - superscript [ref=f12e57]:
                    - link "See pricing and fee information" [ref=f12e58]:
                      - /url: "#collapsePFI"
                      - text: †
                - button "Select GA, $0.00" [ref=f12e60]: Select
              - listitem [ref=f12e61] [cursor=pointer]:
                - generic [ref=f12e63]: PL2 Seat
                - generic [ref=f12e64]:
                  - text: $0.10
                  - superscript [ref=f12e65]:
                    - link "See pricing and fee information" [ref=f12e66]:
                      - /url: "#collapsePFI"
                      - text: †
                - button "Select PL2 Seat, $0.10" [ref=f12e68]: Select
              - listitem [ref=f12e69] [cursor=pointer]:
                - generic [ref=f12e71]: PL2 Side View
                - generic [ref=f12e72]:
                  - text: $2.50
                  - superscript [ref=f12e73]:
                    - link "See pricing and fee information" [ref=f12e74]:
                      - /url: "#collapsePFI"
                      - text: †
                - button "Select PL2 Side View, $2.50" [ref=f12e76]: Select
              - listitem [ref=f12e77] [cursor=pointer]:
                - generic [ref=f12e79]: PL3 Side View
                - generic [ref=f12e80]:
                  - text: $2.60
                  - superscript [ref=f12e81]:
                    - link "See pricing and fee information" [ref=f12e82]:
                      - /url: "#collapsePFI"
                      - text: †
                - button "Select PL3 Side View, $2.60" [ref=f12e84]: Select
            - text: 
          - generic: 
          - generic [ref=f12e86]:
            - generic [ref=f12e87]: Don't miss it. Afterpay it.
            - img "afterpay-logo" [ref=f12e89]
          - generic [ref=f12e92]:
            - heading "See pricing and fee information Pricing and fee information" [level=5] [ref=f12e94]:
              - generic [ref=f12e95]:
                - superscript:
                  - link "See pricing and fee information" [ref=f12e96] [cursor=pointer]:
                    - /url: "#collapsePFI"
                    - text: †
                - generic [ref=f12e97] [cursor=pointer]: Pricing and fee information
            - region "See pricing and fee information Pricing and fee information" [ref=f12e98]:
              - generic [ref=f12e99]:
                - generic:
                  - paragraph
                - paragraph
                - paragraph [ref=f12e100]: For this event, a one-off handling fee of $0.00 per transaction applies on all purchases of Standard Tickets. The actual fee may vary depending on the venue and/or method of delivery selected, or where you add other items to your basket. All ticket/item prices displayed for Standard Tickets for this event are subject to change at any time without notice before the point at which you add those tickets to your basket.
                - paragraph
                - paragraph [ref=f12e101]:
                  - text: Verified tickets sold by other fans (
                  - strong [ref=f12e102]: Verified Fan-to-Fan Tickets
                  - text: ) may also be made available for purchase for this event via Ticketek Marketplace. These are legitimate tickets being resold by other fans, and verified and reissued by Ticketek. If you choose these tickets, you will be redirected to the Ticketek Marketplace platform to complete your purchase. All purchases of Verified Fan-to-Fan Tickets on Ticketek Marketplace will incur a Service and Handling Fee of $17.95 and a Ticket Reissue Fee of $14.85.
                - paragraph [ref=f12e103]: All ticket/item prices include GST, if applicable, and are quoted in AU$.
                - paragraph [ref=f12e105]: Ticket orders purchased by credit/debit card are subject to credit/debit card approval and customer account verification.
        - generic [ref=f12e107]:
          - text: 
          - button "Back to event details" [ref=f12e109] [cursor=pointer]
      - text: 
      - generic: OK
    - generic [ref=f12e110]: © 2026 Ticketek Pty Ltd (ABN 92 010 129 110). All rights reserved. Version 5.22 B267 R0
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
  16 |         this.selectCategory = this.page.locator('ul.seatarea').getByRole('listitem');
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
> 28 |        await ticketCategory.getByRole('button',{'name':'Select', exact:true}).click()
     |                                                                               ^ Error: locator.click: Test timeout of 60000ms exceeded.
  29 |     }
  30 | 
  31 |     async selectTicketQuantity(priceType:string,noOfTickets:number){
  32 |         const ticketQuantity = this.priceCategory.filter({hasText:priceType}).first()
  33 |         await expect(ticketQuantity).toBeVisible()
  34 | 
  35 |             for (let i = 0; i < noOfTickets; i++) {
  36 |                 await ticketQuantity.getByRole('button', { name: 'Increase quantity' }).click()
  37 |              }
  38 |     }
  39 | 
  40 |     async chooseInAppDeliveryOption(deliveryOption:string){
  41 | 
  42 |        if( !await this.page.getByText(deliveryOption, { exact: true }).isChecked()){
  43 |             await this.page.getByText(deliveryOption).click();
  44 |        }
  45 |     }
  46 | 
  47 |     async clickOnNextButton(){
  48 |         await this.next_btn.click()
  49 |     }
  50 | 
  51 | 
  52 | }
```