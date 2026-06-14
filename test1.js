const { Builder, By } =
require('selenium-webdriver');

async function loginTest(){

    let driver =
    await new Builder()
    .forBrowser('chrome')
    .build();

    try{

        await driver.get(
        "file:C:\\Users\\shiva\\Downloads\\College-Website-Test\\login.html"
        );

        await driver
        .findElement(By.id("username"))
        .sendKeys("admin");

        await driver
        .findElement(By.id("password"))
        .sendKeys("admin123");

        await driver
        .findElement(By.tagName("button"))
        .click();

        console.log("Login Test Executed");

    }
    finally{

        await driver.quit();

    }

}

loginTest();