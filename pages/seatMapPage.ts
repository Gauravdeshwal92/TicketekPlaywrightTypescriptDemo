import {Locator, Page, expect} from '@playwright/test'


export class SeatMapPage{


    checkout_btn:Locator
    page:Page
    addMoreTickets_btn:Locator


    constructor(page:Page){

        this.page=page
        this.checkout_btn = page.locator('#goToPaymentButton')
        this.addMoreTickets_btn = page.getByRole('link',{name:'Add More Tickets'})

    }

    async goToCheckout(){
        await expect(this.addMoreTickets_btn).toBeVisible({ timeout: 10000 });
        await this.checkout_btn.click()
       // await this.checkout_btn.click({delay:8000})
    }
}