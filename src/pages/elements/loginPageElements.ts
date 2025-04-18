// Importing the Page class from Playwright
import { Page } from '@playwright/test';

export class LoginPageElements {
    
    constructor (public page: Page)  {
        this.page = page;
    }

    // Define the elements on the login page
    public username = '[data-test=username]';
    public password = '[data-test=password]';
    public loginButton = '[data-test=login-button]';
    public errorMessage = '[data-test=error]';
    public loginUrl = '';
    
};
module.exports = LoginPageElements;

