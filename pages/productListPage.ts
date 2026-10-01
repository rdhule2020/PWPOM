import {Page, Locator} from '@playwright/test'

export class ProductListPage{
    page :Page;
    addToCartbutton : Locator;
    cartBadgeicon : Locator;
    cartIcon : Locator;

    constructor(page : Page){
        this.page = page;
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