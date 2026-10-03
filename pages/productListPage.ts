import {Page, Locator} from '@playwright/test'
import { HeaderComponent } from '../components/HeaderComponent';
import { BasePage } from './basePage';

export class ProductListPage extends  BasePage{
    page :Page;
    addToCartbutton : Locator;
    cartBadgeicon : Locator;
    cartIcon : Locator;
   // header:HeaderComponent;

    constructor(page : Page){
        super(page);
        this.page = page;
       // this.header = new HeaderComponent(page);
        this.addToCartbutton = page.getByRole('button',{name:'Add to cart'}).first();
        this.cartBadgeicon = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
        
    }

    async clickAddToCart(){
        await this.addToCartbutton.click();
    }

    async clickCartBadgeIcon(){
        await this.cartBadgeicon.click();
    }

    async clickCartIcon(){
        await this.cartIcon.click();
    }
}