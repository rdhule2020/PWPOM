import {Page, Locator} from '@playwright/test'
import {TEST_DATA} from '../data/testData';

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
        await this.page.goto('/');
    }
    async doLogin(){
        await this.username.fill(TEST_DATA.user.username);
        await this.password.fill(TEST_DATA.user.password);
        await this.loginbtn.click();
    }

}