const { test, expect } = require('@playwright/test');

test.describe('GreenKart Shopping', () => {
  test('Search for an existing product and add it with a custom quantity', async ({ page }) => {
    // 1. Open https://rahulshettyacademy.com/seleniumPractise/#/ in a fresh browser context.
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await expect(page.getByRole('searchbox', { name: 'Search for Vegetables and Fruits' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Cart' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Carrot - 1 Kg' })).toBeVisible();

    // 2. Enter `Carrot` in the "Search for Vegetables and Fruits" search box.
    const searchBox = page.getByRole('searchbox', { name: 'Search for Vegetables and Fruits' });
    await searchBox.fill('Carrot');
    const carrotCard = page.locator('div.product').filter({ hasText: 'Carrot - 1 Kg' });
    await expect(carrotCard).toHaveCount(1);
    await expect(carrotCard.getByRole('heading', { name: 'Carrot - 1 Kg' })).toBeVisible();
    await expect(carrotCard.getByRole('spinbutton')).toHaveValue('1');

    // 3. Increase the Carrot quantity from 1 to 2 using the plus control.
    await carrotCard.getByRole('link', { name: '+' }).click();
    await expect(carrotCard.getByRole('spinbutton')).toHaveValue('2');

    // 4. Click `ADD TO CART` for Carrot.
    await carrotCard.getByRole('button', { name: 'ADD TO CART' }).click();
    await expect(page.getByRole('row', { name: 'Items : 1' })).toBeVisible();
    await expect(page.getByRole('row', { name: 'Price : 112' })).toBeVisible();

    // 5. Open the cart popover.
    await page.getByRole('link', { name: 'Cart' }).click();
    const cartItem = page.getByRole('listitem').filter({ hasText: 'Carrot - 1 Kg' });
    await expect(cartItem).toContainText('Carrot - 1 Kg');
    await expect(cartItem).toContainText('2 Nos.');
    await expect(cartItem).toContainText('112');
    await expect(page.getByRole('button', { name: 'PROCEED TO CHECKOUT' })).toBeVisible();
  });
});
