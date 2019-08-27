/**
 * @description Demo1: 访问网站，截屏保存
 */
const puppeteer = require('puppeteer');
const { output } = require('../config');

(async ()=>{
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 640,
    height: 480,
    deviceScaleFactor: 2  //dpr
  });
  await page.goto('https://example.com/');
  await page.screenshot({path:`${output}/example.png`});

  await browser.close();
})();