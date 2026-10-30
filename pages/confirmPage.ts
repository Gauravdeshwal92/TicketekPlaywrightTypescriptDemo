import {Page, Locator, expect} from '@playwright/test'

export class ConfirmPage{

    orderConfirmed_txt:Locator
    orderSummary_txt:Locator
    customerID:Locator
    transactionNumber:Locator
    pleaseWait_loading_Spinner:Locator



    constructor(page:Page){

        this.pleaseWait_loading_Spinner=page.getByRole('heading', { name: 'Please wait' })
        this.orderConfirmed_txt=page.getByRole('heading',{name:'Order Confirmed'})
        this.orderSummary_txt=page.getByRole('heading',{name:'Order Summary'})
        this.customerID=page.locator('p').filter({hasText:'Customer ID:'})
        this.transactionNumber=page.locator('p').filter({hasText:'Transaction Number'})
    }

    async orderConfirmationMessage(){
        await expect(this.pleaseWait_loading_Spinner).toBeHidden()
        await expect(this.orderConfirmed_txt).toBeVisible()
        return (await this.orderConfirmed_txt.innerText()).trim();
    }

    async orderDetails(){

       const customer_id = await this.customerID.locator('span.bold').innerText()
       const transaction_number= await this.transactionNumber.locator('span.bold').textContent()
       return {customer_id, transaction_number}
    }



}