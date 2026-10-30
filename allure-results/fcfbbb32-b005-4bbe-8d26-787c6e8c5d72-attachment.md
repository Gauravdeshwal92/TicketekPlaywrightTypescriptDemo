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
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email' })

```

# Page snapshot

```yaml
- generic [ref=f26e1]:
  - banner [ref=f26e2]:
    - generic [ref=f26e3]:
      - link [ref=f26e4] [cursor=pointer]:
        - /url: /default.aspx
        - img "Ticketek" [ref=f26e5]
      - generic [ref=f26e6]:
        - generic [ref=f26e7]:
          - generic [aria-hidden] [ref=f26e8]: 
          - generic [ref=f26e10]:
            - generic [ref=f26e11]: "8"
            - text: ":"
            - generic [ref=f26e12]: "57"
        - list [ref=f26e13]:
          - listitem [ref=f26e14]: "1"
          - listitem [ref=f26e15]: "2"
          - listitem [ref=f26e16]: "3"
          - listitem [ref=f26e17]: "4"
          - listitem [ref=f26e18]: "5"
  - generic [ref=f26e21]:
    - generic [ref=f26e25]:
      - generic [ref=f26e26]:
        - generic [ref=f26e29]:
          - img "ESPLOAD" [ref=f26e31]
          - generic [ref=f26e32]:
            - heading "ESPLOAD" [level=1] [ref=f26e33]
            - paragraph [ref=f26e34]: Mon 30 Apr 2029 12:03PM
            - paragraph [ref=f26e35]: Enmore Theatre, Newtown, NSW
        - generic [ref=f26e36]:
          - generic [ref=f26e37]:
            - heading "Your Tickets" [level=4] [ref=f26e38]
            - button "Remove offer" [ref=f26e39] [cursor=pointer]:
              - generic [aria-hidden] [ref=f26e40]: 
          - generic [ref=f26e41]:
            - generic [ref=f26e42]:
              - article [ref=f26e43]:
                - generic [ref=f26e44]:
                  - generic [ref=f26e45]:
                    - generic [ref=f26e46]: Section
                    - text: GA
                  - generic [ref=f26e47]:
                    - generic [ref=f26e48]: Row
                    - text: GA
                  - generic [ref=f26e49]:
                    - generic [ref=f26e50]: Seat
                    - generic [ref=f26e51]: "-"
                - generic [ref=f26e52]: Admit
              - article [ref=f26e54]:
                - generic [ref=f26e55]:
                  - generic [ref=f26e56]:
                    - generic [ref=f26e57]: Section
                    - text: GA
                  - generic [ref=f26e58]:
                    - generic [ref=f26e59]: Row
                    - text: GA
                  - generic [ref=f26e60]:
                    - generic [ref=f26e61]: Seat
                    - generic [ref=f26e62]: "-"
                - generic [ref=f26e63]: Admit
            - generic [ref=f26e66]:
              - strong [ref=f26e67]: Delivery Method
              - generic [ref=f26e68]: Mobile Ticket
          - region "Your Tickets Remove offer" [ref=f26e69]:
            - generic [ref=f26e70]:
              - generic [ref=f26e71]:
                - heading "Order Summary" [level=4] [ref=f26e72]
                - link:
                  - /url: javascript:void(0);
                - generic [ref=f26e73]: 2 items in basket
              - table [ref=f26e76]:
                - rowgroup [ref=f26e77]:
                  - row [ref=f26e78]:
                    - cell [ref=f26e79]:
                      - heading "Sub-total" [level=5] [ref=f26e80]
                    - cell [ref=f26e81]:
                      - heading "$0.00" [level=5] [ref=f26e82]
                  - row [ref=f26e83]:
                    - cell [ref=f26e84]:
                      - text: Ticket/Item Price
                      - superscript [ref=f26e85]: †
                    - cell "$0.00" [ref=f26e86]
                  - row [ref=f26e87]:
                    - cell "Service Fee" [ref=f26e88]
                    - cell "$0.00" [ref=f26e89]
                  - row [ref=f26e90]:
                    - cell "Handling Fee" [ref=f26e91]
                    - cell "$0.00" [ref=f26e92]
              - generic [ref=f26e93]:
                - paragraph
                - paragraph [ref=f26e94]:
                  - superscript [ref=f26e95]: †
                  - text: All ticket/item prices include GST, if applicable, and are quoted in AU$.
      - generic [ref=f26e96]:
        - text: 
        - generic [ref=f26e97]:
          - link "Add More Tickets" [ref=f26e98] [cursor=pointer]:
            - /url: https://tickets.t20worldcup.com/content/wt20/home.aspx
          - button "Go to checkout" [active] [ref=f26e99] [cursor=pointer]
        - button "Cancel" [ref=f26e101] [cursor=pointer]
    - generic [ref=f26e102]: © 2026 Ticketek Pty Ltd (ABN 92 010 129 110). All rights reserved. Version 5.22 B267 R0
```

# Test source

```ts
  1  | import type {Page, Locator} from '@playwright/test'
  2  | 
  3  | export class LoginPage{
  4  | 
  5  |     emailInputField:Locator
  6  |     passwordInputField:Locator
  7  |     signIn_btn:Locator
  8  | 
  9  |     constructor(page:Page){
  10 |         this.emailInputField=page.getByRole('textbox',{name:'Email'})
  11 |         this.passwordInputField=page.getByLabel('Password')
  12 |         this.signIn_btn=page.getByRole('button', { name: 'Sign In' })
  13 |   
  14 |     }
  15 | 
  16 |     async enterValidCredentails(email:string,password:string){
  17 | 
> 18 |         await this.emailInputField.fill(email);
     |                                    ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  19 |         await this.passwordInputField.fill(password);
  20 |     }
  21 | 
  22 |     async clickOnSignInButton(){
  23 |         await this.signIn_btn.click();
  24 |     }
  25 | }
```