import {Page} from '@playwright/test'
import { LoginPage } from './loginPage';
import { ShowPage } from './showPage';
import {CheckoutPage} from './checkoutPage'
import {ConfirmPage } from './confirmPage';
import {SeatMapPage} from './seatMapPage';
import {SelectTicketCategories} from './selectTicketCategories';





export class POManager{

   
    loginPage : LoginPage;
    showPage : ShowPage
    checkoutPage:CheckoutPage
    confirmPage:ConfirmPage
    seatMapPage:SeatMapPage
    selectTicketCategories:SelectTicketCategories
    

    constructor(page:Page){

   
        this.loginPage = new LoginPage(page);
        this.showPage = new ShowPage(page);
        this.checkoutPage=new CheckoutPage(page)
        this.confirmPage=new ConfirmPage(page);
        this.seatMapPage=new SeatMapPage(page)
        this.selectTicketCategories = new SelectTicketCategories(page)
    }

}
