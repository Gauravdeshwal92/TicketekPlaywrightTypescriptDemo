
import {type Page, type Locator, expect} from '@playwright/test'
import { TIMEOUT } from 'node:dns';

export class ShowPage{

    venueName: Locator;
    showTitle_txt: Locator;
    findTickets_btn: Locator;
    performanceDate:Locator
    selectDate:Locator

    constructor(page:Page){
        this.venueName = page.locator('span.plainText');
        this.showTitle_txt=page.getByRole('heading', { name: 'ESPLOAD tickets', exact: true })
        this.findTickets_btn=page.getByRole('button', { name: 'Find Tickets' })
        this.performanceDate=page.getByRole('combobox')
        this.selectDate=page.locator('option')
        }

     async getShowTitle():Promise<String>{

        const showTitle = await this.showTitle_txt.innerText();
        return showTitle ? showTitle.replace(/\s+/g,' ').trim() :''
    }


    async getVenueSelected():Promise<string>{

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