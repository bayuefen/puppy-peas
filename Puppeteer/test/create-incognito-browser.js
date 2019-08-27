const puppeteer = require('puppeteer');

puppeteer.launch({
  headless: true
}).then(async browser => {
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  await page.goto('https://www.baidu.com');

  await page.close();
});