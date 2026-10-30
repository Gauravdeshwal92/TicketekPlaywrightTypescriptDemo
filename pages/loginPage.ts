import type {Page, Locator} from '@playwright/test'

export class LoginPage{

    emailInputField:Locator
    passwordInputField:Locator
    signIn_btn:Locator

    constructor(page:Page){
        this.emailInputField=page.getByRole('textbox',{name:'Email'})
        this.passwordInputField=page.getByLabel('Password')
        this.signIn_btn=page.getByRole('button', { name: 'Sign In' })
  
    }

    async enterValidCredentails(email:string,password:string){

        await this.emailInputField.fill(email);
        await this.passwordInputField.fill(password);
    }

    async clickOnSignInButton(){
        await this.signIn_btn.click();
    }
}