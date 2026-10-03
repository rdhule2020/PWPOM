import {Page, Locator} from '@playwright/test'
import { HeaderComponent } from '../components/HeaderComponent';
import { BasePage } from './basePage';

export class CartPage extends BasePage{

    page : Page;
    cartProduct : Locator;
    //header : HeaderComponent;

    constructor(page : Page){
        super(page)
        this.page = page;
        //this.header = new HeaderComponent(page);
        this.cartProduct = page.getByText('Sauce Labs Backpack', { exact: true }).first();
    }
}
