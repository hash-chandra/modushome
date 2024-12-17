const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')

const HomePage = require('../pageobjects/home.page'); 

const pages = {
    home: HomePage
}

Given(/^Im on the homepage$/, async () => {
    await pages.home.open();
    const isDisplayed = await pages.home.isHomePageDisplayed();
    await expect(isDisplayed).toBe(true);
});

When(/^When I click on blog$/, async () => {
    await pages.home.clickBlog();
});

Then(/^Then I should see the blog page$/, async (message) => {
    const isBlogDisplayed = await pages.home.isBlogPageDisplayed();
    await expect(isBlogDisplayed).toBe(true);
    await expect(browser).toHaveUrlContaining("https://moduscreate.com/insights/blog/");
});
 


