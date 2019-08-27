const puppeteer = require('puppeteer');

puppeteer.launch({
  headless: false
}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 960,
    deviceScaleFactor: 1
  });
  await page.goto('https://www.baidu.com');
  await page.keyboard.type('Hello World!');
});