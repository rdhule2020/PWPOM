import {test, expect} from '../fixture/pageObjectFixture';

test('Validate Login', async({page, loginpage})=>{
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(5000);
})

test('ValidateAddToCart', async({page, loginpage, productlistpage})=>{
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(3000);
    await productlistpage.clickAddToCart();
    await expect(productlistpage.cartBadgeicon).toHaveText('1');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await productlistpage.clickCartBadgeIcon();
    await productlistpage.clickCartIcon();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await page.waitForTimeout(3000);
})

test('Validate Cart Product', async({page, loginpage, productlistpage, cartpage})=>{
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(3000);
    await productlistpage.clickAddToCart();
    await expect(productlistpage.cartBadgeicon).toHaveText('1');
    await productlistpage.clickCartBadgeIcon();
    await productlistpage.clickCartIcon();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(cartpage.cartProduct).toHaveText('Sauce Labs Backpack');
    await page.waitForTimeout(3000);

})