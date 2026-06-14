// test.js

const {Builder} = require('selenium-webdriver');

async function runTest(){

    let driver = await new Builder()
    .forBrowser('chrome')
    .build();

    try{

        await driver.get("http://localhost:3000");

        let title =
        await driver.getTitle();

        console.log("Website Opened");

        let source =
        await driver.getPageSource();

        if(source.includes("Hello Node Application")){

            console.log("TEST PASSED");

        }else{

            console.log("TEST FAILED");

        }

    }
    finally{

        await driver.quit();

    }

}

runTest();