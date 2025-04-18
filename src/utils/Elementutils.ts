import { Page } from "@playwright/test";

export class ElementUtils {
    constructor(public page: Page) {
        this.page = page;
    }

    async clickElement(selector: string) {
        await this.page.click(selector);
    }

    async fillElement(selector: string, text: string) {
        await this.page.fill(selector, text);
    }

    async getText(selector: string) {
        return await this.page.textContent(selector);
    }

    async getUrl() {
        return await this.page.url();
    }
    async navigateurl(url: string) {
        await this.page.goto(url);
    }
};
module.exports = ElementUtils;