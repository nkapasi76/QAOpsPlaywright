const {Before, After, AfterStep} = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');
const {chromium} = require('playwright');
const {POManager} = require('../../pageobjects/POManager');

Before(async function() {
    const browser = await chromium.launch({
        headless: false,
    });
    this.browser = browser;
    const context = await browser.newContext();
    const page = await context.newPage();
    this.page = page;
    this.poManager = new POManager(page);
});

AfterStep(async function(result) {
    if (result.result.status === 'FAILED') {
        const screenshot = await this.page.screenshot({ path: 'screenshot.png' });
        this.attach(screenshot, 'image/png');
    }
});

After(function() {
   console.log("Closing the browser");
    }
);