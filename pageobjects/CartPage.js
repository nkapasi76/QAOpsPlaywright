const { expect } = require("@playwright/test");

class CartPage
{
constructor(page)
{
    this.page = page;
    this.cartItemNames = page.locator(".cartSection h3");
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
}

async VerifyProductIsDisplayed(productName)
{
    await expect(this.cartItemNames.filter({ hasText: productName })).toBeVisible();
}

async Checkout()
{
    await this.checkoutButton.click();
}
}
module.exports = {CartPage};
