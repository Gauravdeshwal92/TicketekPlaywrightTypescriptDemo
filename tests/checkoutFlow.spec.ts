import { test, expect } from "../fixtures/testFixture";
import { ENV } from '../config/environment';
import { E2EBookingData as testData } from '../data/bookingData';

test.beforeEach(async ({ page }) => {
  await page.goto(ENV.showUrl);
});


test('End to End checkout flow',{tag:['@smoke']}, async ({ page, pom}, testInfo) => {
  
    expect(await pom.showPage.getShowTitle()).toContain(testData.title)
    expect(await pom.showPage.getVenueSelected()).toContain(testData.venue)
    await pom.showPage.selectShowDate(testData.performanceDate)
    expect(await pom.showPage.getShowDateSelected()).toContain(testData.performanceDate)
    await pom.showPage.clickOnFindTickets()
    await pom.selectTicketCategories.selectTicketCategory(testData.ticketCategory)
    await pom.selectTicketCategories.selectTicketQuantity(testData.priceType, testData.ticketQuantity)
    await pom.selectTicketCategories.chooseInAppDeliveryOption(testData.deliveryMethod)
    await pom.selectTicketCategories.clickOnNextButton()
    await pom.seatMapPage.goToCheckout()
    await pom.loginPage.enterValidCredentails(ENV.credentials.email,ENV.credentials.password)
    await pom.loginPage.clickOnSignInButton()
    const noOfTicketInBasket = await pom.checkoutPage.noOfItemsInBasket(testData.ticketCategory)
    expect(noOfTicketInBasket).toBe(testData.ticketQuantity)
    expect(await pom.checkoutPage.deliveryMethodInBasket()).toContain(testData.deliveryMethod)
    await pom.checkoutPage.selectTermsAndCondition()
    await pom.checkoutPage.submitPayment()
    const order_status = await pom.confirmPage.orderConfirmationMessage()
    expect(order_status).toContain(testData.orderStatus)
    const {customer_id:customerID, transaction_number} = await pom.confirmPage.orderDetails()
    await testInfo.attach("order details", {
        body: `customer_id is ${customerID} and transaction_number is ${transaction_number}`,
        contentType: "text/plain",
    })
})
