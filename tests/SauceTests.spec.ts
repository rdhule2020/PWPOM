import {test, expect} from '../fixture/pageObjectFixture';
import { TEST_DATA } from '../data/testData';

test('Validate Login', async({page, loginpage})=>{
    /*  await loginpage.openApplication();
    await loginpage.doLogin(); */
    await page.goto(TEST_DATA.urls.inventory);
    await expect(page).toHaveURL(TEST_DATA.urls.inventory);
})

test('ValidateAddToCart', async({page, loginpage, productlistpage})=>{
    /* await loginpage.openApplication();
    await loginpage.doLogin(); */
    await page.goto(TEST_DATA.urls.inventory);
    await expect(page).toHaveURL(TEST_DATA.urls.inventory);
    await productlistpage.clickAddToCart();
    await expect(productlistpage.cartBadgeicon).toHaveText('1');
    await expect(page).toHaveURL(TEST_DATA.urls.inventory)
    await productlistpage.clickCartBadgeIcon();
    await productlistpage.clickCartIcon();
    await expect(page).toHaveURL(TEST_DATA.urls.cart)
})

test('Validate Cart Product', async({page, loginpage, productlistpage, cartpage})=>{
   /*await loginpage.openApplication();
     await loginpage.doLogin(); */
    await page.goto(TEST_DATA.urls.inventory);
    await expect(page).toHaveURL(TEST_DATA.urls.inventory);
    await productlistpage.clickAddToCart();
    await expect(productlistpage.cartBadgeicon).toHaveText('1');
    await productlistpage.clickCartBadgeIcon();
    await productlistpage.clickCartIcon();
    await expect(page).toHaveURL(TEST_DATA.urls.cart)
    await expect(cartpage.cartProduct).toHaveText('Sauce Labs Backpack');

})