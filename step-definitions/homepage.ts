import { Given, Then } from '@cucumber/cucumber';
import HomePage from '../pageobjects/homepage';
import { expect } from '@wdio/globals'

Given('I am on the Modus Create homepage', async () => {
    await HomePage.open();
});

Then('I should see the Modus Create logo', async () => {
    const isDisplayed = await HomePage.isLogoDisplayed();
    expect(isDisplayed).toBe(true);
});

Then('I should see the Modus Create tagline', async () => {
    const isDisplayed = await HomePage.isTaglineDisplayed();
    expect(isDisplayed).toBe(true);
});

Then('I should see the Modus Create navigation menu', async () => {
    const isDisplayed = await HomePage.isNavigationMenuDisplayed();
    expect(isDisplayed).toBe(true);
});

Then('I should see the Modus Create footer', async () => {
    const isDisplayed = await HomePage.isFooterDisplayed();
    expect(isDisplayed).toBe(true);
});

