const { chromium } = require('playwright');
(async () => {
  try {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    console.log('title:', await page.title());
    for (let i=0;i<15;i++){
      await new Promise(r => setTimeout(r, 1000));
      console.log(i, 'connected:', browser.isConnected());
      if(!browser.isConnected()) break;
    }
    await browser.close().catch(()=>{});
  } catch (e) {
    console.error('ERROR:', e.message);
  }
})();
