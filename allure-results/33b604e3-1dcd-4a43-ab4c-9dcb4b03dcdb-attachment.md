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
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Order Confirmed' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Order Confirmed' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Order Confirmed' })
    - waiting for navigation to finish...
  - Test timeout of 60000ms exceeded.

```

```yaml
- link "Ticketek":
  - /url: /default.aspx
  - img "Ticketek"
- heading "Loading ..." [level=1]
- paragraph
- heading "Do NOT refresh your browser" [level=2]:
  - text: Do
  - strong: NOT
  - text: refresh your browser
- paragraph
- paragraph:
  - text: If the confirmation page is not displayed within 10 seconds
  - button "click here."
```

# Test source

```ts
  1  | import {Page, Locator, expect} from '@playwright/test'
  2  | 
  3  | export class ConfirmPage{
  4  | 
  5  |     orderConfirmed_txt:Locator
  6  |     orderSummary_txt:Locator
  7  |     customerID:Locator
  8  |     transactionNumber:Locator
  9  |     pleaseWait_loading_Spinner:Locator
  10 | 
  11 | 
  12 | 
  13 |     constructor(page:Page){
  14 | 
  15 |         this.pleaseWait_loading_Spinner=page.locator('.overlay-content')
  16 |         this.orderConfirmed_txt=page.getByRole('heading',{name:'Order Confirmed'})
  17 |         this.orderSummary_txt=page.getByRole('heading',{name:'Order Summary'})
  18 |         this.customerID=page.locator('p').filter({hasText:'Customer ID:'})
  19 |         this.transactionNumber=page.locator('p').filter({hasText:'Transaction Number'})
  20 |     }
  21 | 
  22 |     async orderConfirmationMessage(){
  23 |         await expect(this.pleaseWait_loading_Spinner).toBeHidden()
> 24 |         await expect(this.orderConfirmed_txt).toBeVisible()
     |                                               ^ Error: expect(locator).toBeVisible() failed
  25 |         return (await this.orderConfirmed_txt.innerText()).trim();
  26 |     }
  27 | 
  28 |     async orderDetails(){
  29 | 
  30 |        const customer_id = await this.customerID.locator('span.bold').innerText()
  31 |        const transaction_number= await this.transactionNumber.locator('span.bold').textContent()
  32 |        return {customer_id, transaction_number}
  33 |     }
  34 | 
  35 | 
  36 | 
  37 | }
```