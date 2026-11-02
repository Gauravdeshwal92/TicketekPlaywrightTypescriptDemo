
import {type Page, type Locator} from '@playwright/test'

export class ShowPage{

    venueName: Locator;
    showTitle_txt: Locator;
    findTickets_btn: Locator;
    performanceDate:Locator


    constructor(page:Page){
        this.venueName = page.locator('span.plainText');
        this.showTitle_txt=page.getByRole('heading', { name: 'ESPLOAD tickets', exact: true })
        this.findTickets_btn=page.getByRole('button', { name: 'Find Tickets' })
        this.performanceDate=page.getByRole('combobox')
  
        }

     async getShowTitle(){
        const showTitle = await this.showTitle_txt.innerText();
        return showTitle.replace(/\s+/g,' ').trim();
    }


    async getVenueSelected(){

        const venueName = await this.venueName.innerText();
        return venueName ? venueName.trim() :''
    }

    async selectShowDate(date:string){

        await this.performanceDate.selectOption({ label: date });
    }

    async getShowDateSelected(){

        return await this.performanceDate.innerText()
    }

    async clickOnFindTickets(){
        await this.findTickets_btn.click()
    }
}