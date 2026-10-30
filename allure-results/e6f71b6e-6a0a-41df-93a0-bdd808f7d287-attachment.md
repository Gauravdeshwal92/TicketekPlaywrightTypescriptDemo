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
  - waiting for locator('ul.seatarea').getByRole('listitem').filter({ hasText: 'GA' }).getByRole('button', { name: 'Select', exact: true })
    - found getByRole('heading', { name: 'We value your privacy' }), intercepting action to run the handler
    - locator handler has finished, waiting for getByRole('heading', { name: 'We value your privacy' }) to be hidden
    - interception handler has finished, continuing

```

# Page snapshot

```yaml
- generic [active] [ref=f14e1]:
  - banner [ref=f14e2]:
    - generic [ref=f14e3]:
      - link [ref=f14e4] [cursor=pointer]:
        - /url: /default.aspx
        - img "Ticketek" [ref=f14e5]
      - generic [ref=f14e6]:
        - generic [ref=f14e7]:
          - generic [aria-hidden] [ref=f14e8]: 
          - generic [ref=f14e10]:
            - generic [ref=f14e11]: "9"
            - text: ":"
            - generic [ref=f14e12]: "07"
        - list [ref=f14e13]:
          - listitem [ref=f14e14]: "1"
          - listitem [ref=f14e15]: "2"
          - listitem [ref=f14e16]: "3"
          - listitem [ref=f14e17]: "4"
          - listitem [ref=f14e18]: "5"
      - text: 
  - generic [ref=f14e21]:
    - generic [ref=f14e25]:
      - text:     
      - generic [ref=f14e26]:
        - generic [ref=f14e29]:
          - generic [ref=f14e30]:
            - img "ESPLOAD" [ref=f14e32]
            - generic [ref=f14e33]:
              - heading "ESPLOAD" [level=1] [ref=f14e34]
              - paragraph [ref=f14e35]: Mon 30 Apr 2029 12:03PM
              - paragraph [ref=f14e36]: Enmore Theatre, Newtown, NSW
            - text: 
          - combobox [ref=f14e39] [cursor=pointer]:
            - option "Mon 30 Apr 2029 12:03PM" [selected]
            - option "Mon 30 Apr 2029 12:03PM"
            - option "Tue 01 May 2029 12:03PM"
            - option "Mon 31 Dec 2029 12:03PM"
        - text: 
        - generic [ref=f14e42]:
          - heading [level=2]
          - generic [ref=f14e43]:
            - list [ref=f14e44]:
              - listitem [ref=f14e45] [cursor=pointer]:
                - generic [ref=f14e47]: Best available (Any price)
                - generic [ref=f14e48]:
                  - text: $0.00 - $2.60
                  - superscript [ref=f14e49]:
                    - link "See pricing and fee information" [ref=f14e50]:
                      - /url: "#collapsePFI"
                      - text: †
                - button "Select Best available (Any price), $0.00 - $2.60" [ref=f14e52]: Select
              - listitem [ref=f14e53] [cursor=pointer]:
                - generic [ref=f14e55]: GA
                - generic [ref=f14e56]:
                  - text: $0.00
                  - superscript [ref=f14e57]:
                    - link "See pricing and fee information" [ref=f14e58]:
                      - /url: "#collapsePFI"
                      - text: †
                - button "Select GA, $0.00" [ref=f14e60]: Select
              - listitem [ref=f14e61] [cursor=pointer]:
                - generic [ref=f14e63]: PL2 Seat
                - generic [ref=f14e64]:
                  - text: $0.10
                  - superscript [ref=f14e65]:
                    - link "See pricing and fee information" [ref=f14e66]:
                      - /url: "#collapsePFI"
                      - text: †
                - button "Select PL2 Seat, $0.10" [ref=f14e68]: Select
              - listitem [ref=f14e69] [cursor=pointer]:
                - generic [ref=f14e71]: PL2 Side View
                - generic [ref=f14e72]:
                  - text: $2.50
                  - superscript [ref=f14e73]:
                    - link "See pricing and fee information" [ref=f14e74]:
                      - /url: "#collapsePFI"
                      - text: †
                - button "Select PL2 Side View, $2.50" [ref=f14e76]: Select
              - listitem [ref=f14e77] [cursor=pointer]:
                - generic [ref=f14e79]: PL3 Side View
                - generic [ref=f14e80]:
                  - text: $2.60
                  - superscript [ref=f14e81]:
                    - link "See pricing and fee information" [ref=f14e82]:
                      - /url: "#collapsePFI"
                      - text: †
                - button "Select PL3 Side View, $2.60" [ref=f14e84]: Select
            - text: 
          - generic: 
          - generic [ref=f14e86]:
            - generic [ref=f14e87]: Don't miss it. Afterpay it.
            - img "afterpay-logo" [ref=f14e89]
          - generic [ref=f14e92]:
            - heading "See pricing and fee information Pricing and fee information" [level=5] [ref=f14e94]:
              - generic [ref=f14e95]:
                - superscript:
                  - link "See pricing and fee information" [ref=f14e96] [cursor=pointer]:
                    - /url: "#collapsePFI"
                    - text: †
                - generic [ref=f14e97] [cursor=pointer]: Pricing and fee information
            - region "See pricing and fee information Pricing and fee information" [ref=f14e98]:
              - generic [ref=f14e99]:
                - generic:
                  - paragraph
                - paragraph
                - paragraph [ref=f14e100]: For this event, a one-off handling fee of $0.00 per transaction applies on all purchases of Standard Tickets. The actual fee may vary depending on the venue and/or method of delivery selected, or where you add other items to your basket. All ticket/item prices displayed for Standard Tickets for this event are subject to change at any time without notice before the point at which you add those tickets to your basket.
                - paragraph
                - paragraph [ref=f14e101]:
                  - text: Verified tickets sold by other fans (
                  - strong [ref=f14e102]: Verified Fan-to-Fan Tickets
                  - text: ) may also be made available for purchase for this event via Ticketek Marketplace. These are legitimate tickets being resold by other fans, and verified and reissued by Ticketek. If you choose these tickets, you will be redirected to the Ticketek Marketplace platform to complete your purchase. All purchases of Verified Fan-to-Fan Tickets on Ticketek Marketplace will incur a Service and Handling Fee of $17.95 and a Ticket Reissue Fee of $14.85.
                - paragraph [ref=f14e103]: All ticket/item prices include GST, if applicable, and are quoted in AU$.
                - paragraph [ref=f14e105]: Ticket orders purchased by credit/debit card are subject to credit/debit card approval and customer account verification.
        - generic [ref=f14e107]:
          - text: 
          - button "Back to event details" [ref=f14e109] [cursor=pointer]
      - text: 
      - generic: OK
    - generic [ref=f14e110]: © 2026 Ticketek Pty Ltd (ABN 92 010 129 110). All rights reserved. Version 5.22 B267 R0
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
  26 |        const ticketCategory = this.selectCategory.filter({hasText:categoryName})
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