import {Page, Locator} from '@playwright/test';

export class HeaderComponent{
    page : Page;
    burgerMenu : Locator;
    burgerMenuClose :Locator;

    constructor(page : Page){
        this.page=page;
        this.burgerMenu = page.getByRole('button',{name:'Open Menu'});
        this.burgerMenuClose = page.getByRole('button',{name:'Close Menu'});
    }

    async openandCloseBurger(){
        await this.burgerMenu.click();
        await this.page.waitForTimeout(3000);
        await this.burgerMenuClose.click();
    }

}