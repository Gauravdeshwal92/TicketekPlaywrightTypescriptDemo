import {Page, Locator,expect} from '@playwright/test'


export class CheckoutPage{


    yourBasket_txt:Locator
    basketSeatSection:Locator
    deliveryMethodBasket:Locator
    submitPayment_btn:Locator
    enmoreTheatre_tAndC:Locator
    espload_tAndC:Locator
    

    constructor(page:Page){

        this.yourBasket_txt=page.getByRole('heading',{name:'Your basket'});
        this.basketSeatSection = page.locator('.basket_seat_section')
        this.deliveryMethodBasket=page.getByLabel('Delivery Method')
        this.submitPayment_btn=page.getByRole('button',{name:'Submit payment'})
        this.enmoreTheatre_tAndC=page.getByRole('checkbox',{name:'Enmore Theatre'})
        this.espload_tAndC=page.getByRole('checkbox',{name:'ESPLOAD'})



    }

    async noOfItemsInBasket(category: string) {
        await expect(this.yourBasket_txt).toBeVisible();
        const matchingItems = this.basketSeatSection.filter({ hasText: category });
        await expect(matchingItems.first()).toBeVisible();
        return matchingItems.count();
    }

    async deliveryMethodInBasket(){
        return await this.deliveryMethodBasket.innerText()
        
    }

    async submitPayment(){
        await this.submitPayment_btn.click()
    }

    async selectTermsAndCondition(){
        await this.enmoreTheatre_tAndC.check()
        await this.espload_tAndC.check()
    }


}