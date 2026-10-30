import { test, expect } from "../fixtures/testFixture";
import { ENV } from '../config/environment';


test('End to End checkout flow',{tag:['@smoke']}, async ({ page, pom}) => {
  
 
    await page.goto(ENV.showUrl)
    expect(await pom.showPage.getShowTitle()).toContain(ENV.showData.title)
    expect(await pom.showPage.getVenueSelected()).toContain(ENV.showData.venue)
    await pom.showPage.selectShowDate(ENV.showData.performanceDate)
    expect(await pom.showPage.getShowDateSelected()).toContain(ENV.showData.performanceDate)
    await pom.showPage.clickOnFindTickets()
    await pom.selectTicketCategories.selectTicketCategory(ENV.showData.ticketCategory)
    await pom.selectTicketCategories.selectTicketQuantity(ENV.showData.priceType, ENV.showData.ticketQuantity)
    await pom.selectTicketCategories.chooseInAppDeliveryOption(ENV.showData.deliveryMethod)
    await pom.selectTicketCategories.clickOnNextButton()
    await pom.seatMapPage.goToCheckout()
    await pom.loginPage.enterValidCredentails(ENV.credentials.email,ENV.credentials.password)
    await pom.loginPage.clickOnSignInButton()
    const noOfTicketInBasket = await pom.checkoutPage.noOfItemsInBasket(ENV.showData.ticketCategory)
    expect(noOfTicketInBasket).toBe(ENV.showData.ticketQuantity)
    expect(await pom.checkoutPage.deliveryMethodInBasket()).toContain(ENV.showData.deliveryMethod)
    await pom.checkoutPage.selectTermsAndCondition()
    await pom.checkoutPage.submitPayment()
    const order_status = await pom.confirmPage.orderConfirmationMessage()
    expect(order_status).toContain(ENV.showData.orderStatus)
    const {customer_id:customerID, transaction_number} = await pom.confirmPage.orderDetails()
    console.log("customer_id is "+customerID+" and transaction_number is "+transaction_number)
})


