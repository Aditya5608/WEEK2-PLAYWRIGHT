import {test,expect} from "@playwright/test";

test('test', async({page})=>{
    await page.goto("https://vinothqaacademy.com/demo-site/")

     await expect(page).toHaveURL(/demo-site/);

    await page.locator(`//input[@id="vfb-5"]`).fill("Aditya")

        await expect(page.locator('#vfb-5')).toHaveValue("Aditya");

    await page.locator(`//input[@id="vfb-7"]`).fill("Singh")
    await page.locator(`//input[@id="vfb-31-1"]`).click()

        await expect(page.locator('#vfb-31-1')).toBeChecked();


    await page.locator(`//input[@id="vfb-13-address"]`).fill("Mohali,Punajab")

        await expect(page.locator('#vfb-13-address')).toHaveValue("Mohali,Punajab");

    await page.locator(`//input[@id="vfb-13-address-2"]`).fill("Street No 2")
    await page.locator(`//select[@id="vfb-13-country"]`).selectOption({value:"India"})
    // await page.locator(`//input[@class="select2-search__field"]`).fill("India").click()
    // await page.keyboard.press('Enter')
    await page.locator(`//input[@id="vfb-13-zip"]`).fill("800001")
    await page.locator(`//input[@id="vfb-14"]`).fill("adityasingh@gmail.com")
    await page.locator(`//select[@id="vfb-16-hour"]`).selectOption({value:"03"})
    await page.locator(`//select[@id="vfb-16-min"]`).selectOption({value:"20"})
    await page.locator(`//input[@id="vfb-19"]`).fill("9638527410")
    await page.locator(`//textarea[@id="vfb-23"]`).fill("I knowww")

        await expect(page.locator('#vfb-23')).toHaveValue("I knowww");

    await page.locator(`//input[@id="vfb-3"]`).fill("33")
    await page.locator(`//input[@id="vfb-4"]`).click()

    await expect(page.locator('body')).toBeVisible();

          await page.screenshot({path:"screenshot/assesment2.png"});

//    await expect(page).toHaveScreenshot("screenshot/assesment2.png")
})