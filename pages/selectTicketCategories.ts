import {Locator, Page, expect} from '@playwright/test'


export class SelectTicketCategories{

    page:Page
    chooseYourTickets_txt:Locator
    selectCategory:Locator
    priceCategory:Locator
    next_btn:Locator
    


    constructor(page:Page){
        this.page=page;
        this.selectCategory = this.page.locator('ul.seatarea li');
        this.priceCategory = page.locator('.selectTktBlock')
        this.chooseYourTickets_txt = page.getByRole('heading',{'name':'Choose your tickets'})
        this.next_btn = page.getByRole('button', { name: 'Next' })


    }


    async selectTicketCategory(categoryName :string){
       const ticketCategory = this.selectCategory.filter({has: this.page.getByLabel(categoryName)})
       await expect(ticketCategory).toBeVisible()
       await ticketCategory.click()
    }

    async selectTicketQuantity(priceType:string,noOfTickets:number){
        const ticketQuantity = this.priceCategory.filter({hasText:priceType}).first()
        await expect(ticketQuantity).toBeVisible()

            for (let i = 0; i < noOfTickets; i++) {
                await ticketQuantity.getByRole('button', { name: 'Increase quantity' }).click()
             }
    }

    async chooseInAppDeliveryOption(deliveryOption:string){

       if( !await this.page.getByText(deliveryOption, { exact: true }).isChecked()){
            await this.page.getByText(deliveryOption).click();
       }
    }

    async clickOnNextButton(){
        await this.next_btn.click()
    }


}