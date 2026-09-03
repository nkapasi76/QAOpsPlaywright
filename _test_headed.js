const { chromium } = require('playwright');
(async () => {
  try {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    console.log('title:', await page.title());
    await new Promise(r => setTimeout(r, 3000));
    console.log('still connected:', browser.isConnected());
    await browser.close();
  } catch (e) {
    console.error('ERROR:', e.message);
  }
})();
