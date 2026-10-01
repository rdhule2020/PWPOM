import {Page, Locator} from '@playwright/test'

export class CartPage{

    page : Page;
    cartProduct : Locator;

    constructor(page : Page){
        this.page = page;
        this.cartProduct = page.getByText('Sauce Labs Backpack', { exact: true }).first();
    }
}
