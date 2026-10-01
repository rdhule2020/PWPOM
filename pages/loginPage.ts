import {Page, Locator} from '@playwright/test'

export class LoginPage{

    page : Page;
    username:Locator;
    password : Locator;
    loginbtn : Locator;

    constructor(page:Page){
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginbtn = page.locator('[data-test="login-button"]');
    }

    async openApplication(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async doLogin(){
        await this.username.fill('standard_user');
        await this.password.fill('secret_sauce');
        await this.loginbtn.click();
    }

}