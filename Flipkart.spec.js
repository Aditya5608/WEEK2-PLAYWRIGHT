import {test,expect} from "@playwright/test";
import { log } from "console";
import excel from "exceljs"

test('Flipkart', async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.keyboard.press("Escape");
    await expect(page).toHaveURL(/flipkart/)
    await page.locator(`//div[text()="Home"]`).click()
    await page.locator(`(//div[@class="grid-formation grid-column-2"])`).first().click()
    await page.locator(`//div[@class="buvtMR" and text()="4★ & above"]`).click()

    await expect(page.locator('//div[@class="buvtMR" and text()="4★ & above"]')).toBeVisible();
    await page.locator(`//div[@class="WNv7PR" and text()="Price -- Low to High"]`).click()
    // await page.locator('(//a[@class="pIpigb"])[5]').click();
       // await page.waitForEvent('page')
    const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator('(//a[@class="pIpigb"])[5]').click()
]);
   const title=  await newPage.locator(`//h1[@class="v1zwn21l v1zwn26 _1psv1zeb9 _1psv1ze0"]`).innerText()
   const price= await newPage.locator(`//div[@class="v1zwn21l v1zwn20 _1psv1zeb9 _1psv1ze0"]`).innerText()
   console.log(title);
   console.log(price);
   expect(title).toBeTruthy()
   expect(title.length).toBeGreaterThan(4)
   expect(price).toContain('₹')

    let book =new excel.Workbook();
     await book.xlsx.readFile("C:/Users/ADITYA SINGH/OneDrive/Desktop/PLAYWRIGHT/tests/DataDrivenTesting/excel.xlsx");
     let sheet =await book.getWorksheet("Sheet8");
    if (!sheet) {
    sheet = await book.addWorksheet("Sheet8"); 
}
   sheet.getCell('A2').value = title;
   sheet.getCell('B2').value = price;

   await book.xlsx.writeFile("C:/Users/ADITYA SINGH/OneDrive/Desktop/PLAYWRIGHT/tests/DataDrivenTesting/excel.xlsx");

   console.log("Data into Excel");
})