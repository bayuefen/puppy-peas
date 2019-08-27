const puppeteer = require('puppeteer');
const iPhone_6 = puppeteer.devices['iPhone 6'];

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.emulate(iPhone_6);
  await page.goto('https://www.baidu.com');
  console.log(iPhone_6);
  /**
   * @log
   {
      name: 'iPhone 6',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      viewport:
       { width: 375,
         height: 667,
         deviceScaleFactor: 2,
         isMobile: true,
         hasTouch: true,
         isLandscape: false
       }
   }
   */
  await browser.close();
});