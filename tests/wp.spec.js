const { test, expect } = require('@playwright/test');
const { testData } = require('./testData')

const baseUrl = process.env.BASE_URL || 'https://wordpress.com';

for (const { url_path, snapshot } of testData){

  test(`testing ${baseUrl}/${url_path}`, async ({ page }) => {
    await page.goto(baseUrl + '/' + url_path);
    // this might be needed to generate the snapshots..
     // await expect(page).toHaveScreenshot(snapshot, { fullPage: true, omitBackground: true });
     expect(await page.screenshot({ fullPage: true, omitBackground: true  })).toMatchSnapshot(snapshot, { fullPage:true, maxDiffPixels: 100 });
  });

}
