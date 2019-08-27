const puppeteer = require('puppeteer');
const { output } = require('../config');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.zhihu.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: `${output}/hn.pdf`, format: 'A4'});

  await browser.close();
})();