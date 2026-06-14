const { Builder } = require('selenium-webdriver');

async function collegeTest() {

    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    try {

        await driver.get("https://matrusri.skolo.in/");

        let title = await driver.getTitle();

        console.log("Website Title:");
        console.log(title);

    } finally {

        await driver.quit();

    }

}

collegeTest();