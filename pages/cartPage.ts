import {Page, Locator} from '@playwright/test'
import { HeaderComponent } from '../components/HeaderComponent';

export class CartPage{

    page : Page;
    cartProduct : Locator;
    header : HeaderComponent;

    constructor(page : Page){
        this.page = page;
        this.header = new HeaderComponent(page);
        this.cartProduct = page.getByText('Sauce Labs Backpack', { exact: true }).first();
    }
}
