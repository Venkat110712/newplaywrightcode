import{expect,Page} from '@playwright/test';
import { LoginPageElements } from '../elements/loginPageElements';
import { ElementUtils } from '../utils/elementutils';


export class LoginPageActions extends LoginPageElements {
    
    constructor (public page: Page)  {
        super(page);
        this.page = page;
    }
      elementUtils: ElementUtils = new ElementUtils(this.page);
    
    async openLoginPage() {
        //await this.page.goto('https://business.aami.com.au/about-your-business');
        this.elementUtils.navigateurl('https://business.aami.com.au/about-your-business');
    }

    async login(username: string, password: string) {

        await this.elementUtils.fillElement(this.username, username);
        await this.page.fill('[data-test=password]', password);
        await this.page.click('[data-test=login-button]');
    }

    async getErrorMessage() {
        return await this.page.textContent('[data-test=error]');
    }
};
module.exports = LoginPageActions;
