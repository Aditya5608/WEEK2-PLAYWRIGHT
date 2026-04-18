import {test,expect} from "@playwright/test";

test('Login', async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
      await expect(page).toHaveURL(/automation-practice-form/);  

    await page.locator(`//input[@id="firstName"]`).fill("Aditya")
      await expect(page.locator('#firstName')).toHaveValue("Aditya");

    await page.locator(`//input[@id="lastName"]`).fill("Singh")

    await page.locator(`//input[@id="userEmail"]`).fill("adityasingh@gmail.com")
    await expect(page.locator('#userEmail')).toHaveValue("adityasingh@gmail.com");
    await page.locator(`//input[@value="Male"]`).click()
await expect(page.locator(`//input[@value="Male"]`)).toBeChecked();
  
    await page.locator(`//input[@id="userNumber"]`).fill("9356150677")
    await page.locator(`//input[@id="subjectsInput"]`).fill("Hindi")
    await page.keyboard.press(`Enter`)
    // await page.locator(`//div[@id="subjectsContainer"]`).fill("Industrial Engineering")
    await page.locator(`//input[@id="hobbies-checkbox-1"]`).click()
    await expect(page.locator(`//input[@id="hobbies-checkbox-1"]`)).toBeChecked();
    await page.locator(`//textarea[@id="currentAddress"]`).fill("Mohali,Punjab")
    await expect(page.locator('#currentAddress')).toHaveValue("Mohali,Punjab");
    // await page.locator(`//div[@id="react-select-3-placeholder"]`).click();
     await page.locator(`//div[@class="css-1xc3v61-indicatorContainer"]`).first().click()
     await page.keyboard.press(`Enter`)
   // await page.locator(`//div[@class="css-1dimb5e-singleValue" and text()="NCR"]`).click()
    await page.locator(`//input[@id="react-select-4-input"]`).click()
         await page.keyboard.press(`Enter`)

    // await page.locator(`//div[@class="css-1dimb5e-singleValue" and text()="Delhi"]`).click()
    await page.locator(`//button[@id="submit"]`).click()

      await expect(page.getByText('Thanks for submitting')).toBeVisible();

          await page.screenshot({path:"screenshot/assesment1.png"})
      
            //   await expect(page).toHaveScreenshot("screenshot/assesment1.png")
 
})