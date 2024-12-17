const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    get homepageInfo() {
        return $('#Layer_1');
    }

    get blog() {
        return $("//a[normalize-space()='BLOG']");
    }

    get blogUrl() {
        return $.pageUrl();
    }

    async clickBlog () {
        await this.blog.click();
    }
    
    async isHomePageDisplayed(){
        await  this.homepageInfo.waitForDisplayed();
        return await this.homepageInfo.isDisplayed();
    }

    async isBlogPageDisplayed(){
        return await browser.getUrl();
    }

    
    async open() {
        return super.open();
    }

}

export default new HomePage();