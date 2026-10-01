import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductListPage } from '../pages/productListPage';
import { CartPage } from '../pages/cartPage';

test('Validate Login', async({page})=>{

    const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(5000);
})

test('ValidateAddToCart', async({page})=>{
    const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(3000);

    const productlistpage = new ProductListPage(page);
    await productlistpage.clickAddToCart();
    await expect(productlistpage.cartBadgeicon).toHaveText('1');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await productlistpage.clickCartBadgeIcon();

    await productlistpage.clickCartIcon();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await page.waitForTimeout(3000);
})

test('Validate Cart Product', async({page})=>{
    const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(3000);

    const productlistpage = new ProductListPage(page);
    await productlistpage.clickAddToCart();
    await expect(productlistpage.cartBadgeicon).toHaveText('1');
    await productlistpage.clickCartBadgeIcon();

    await productlistpage.clickCartIcon();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    const cartpage = new CartPage(page);
    await expect(cartpage.cartProduct).toHaveText('Sauce Labs Backpack');
    await page.waitForTimeout(3000);

})