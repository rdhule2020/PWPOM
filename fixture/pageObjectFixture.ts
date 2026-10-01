import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import {ProductListPage} from '../pages/productListPage';
import {CartPage} from '../pages/cartPage';


type myFixture = {
    loginpage :LoginPage;
    productlistpage : ProductListPage;
    cartpage : CartPage;
}

export const test = base.extend<myFixture>({
    loginpage: async({page}, use)=>{
        await use(new LoginPage(page));
    },

    productlistpage:async({page}, use)=>{
        await use(new ProductListPage(page));
    },

    cartpage:async({page}, use)=>{
        await use(new CartPage(page));
    },
})

export {expect} from '@playwright/test';