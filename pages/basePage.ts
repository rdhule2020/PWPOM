import {Page} from '@playwright/test';
import { HeaderComponent } from '../components/HeaderComponent';

export class BasePage{
    page :Page;
    header:HeaderComponent;

    constructor(page :Page){
        this.page = page;
        this.header = new HeaderComponent(page);

    }

    async waitForPageLoad(){
        await this.page.waitForLoadState('networkidle');
    }
}