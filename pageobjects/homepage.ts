import Page from "./page";

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get logo () {
        return $('.svg-logo');
    }

    public get tagline () {
        return $('#Layer_1');
    }

    public get navigationMenu () {
        return $('#navigation-menu');
    }

    public get footer () {
        return $('#footer');
    }

    /**
     * a method to encapsulate automation code to interact with the page
     * e.g. to open the homepage
     */
    public open () {
        return super.open('/');
    }

    /**
     * a method to check if the logo is displayed
     */
    public async isLogoDisplayed (): Promise<boolean> {
        await this.logo.waitForDisplayed();
        return this.logo.isDisplayed();
    }

    /**
     * a method to check if the tagline is displayed
     */
    public async isTaglineDisplayed (): Promise<boolean> {
        await this.tagline.waitForDisplayed();
        return this.tagline.isDisplayed();
    }

    /**
     * a method to check if the navigation menu is displayed
     */
    public async isNavigationMenuDisplayed (): Promise<boolean> {
        await this.navigationMenu.waitForDisplayed();
        return this.navigationMenu.isDisplayed();
    }

    /**
     * a method to check if the footer is displayed
     */
    public async isFooterDisplayed (): Promise<boolean> {
        await this.footer.waitForDisplayed();
        return this.footer.isDisplayed();
    }
}

export default new HomePage();