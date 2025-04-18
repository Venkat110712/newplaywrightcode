import { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { LoginPageActions } from './actions/loginpageActions';

export class LoginPage {
    private page: Page;

    // Selectors
    private usernameInput = '#username';
    private passwordInput = '#password';
    private loginButton = '#login';

    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to the login page
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    // Enter username
    async enterUsername(username: string): Promise<void> {
        await this.page.fill(this.usernameInput, username);
    }

    // Enter password
    async enterPassword(password: string): Promise<void> {
        await this.page.fill(this.passwordInput, password);
    }

    // Click login button
    async clickLogin(): Promise<void> {
        await this.page.click(this.loginButton);
    }

    // Perform login
    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

//url https://business.aami.com.au/about-your-business
//clcik on I understand button
//select occupation as 'Electrician'
// Accept terms and select occupation
async acceptTermsAndSelectOccupation(occupation: string): Promise<void> {
    // Click on "I understand" button
    const iUnderstandButton = '#i-understand';
    await this.page.click(iUnderstandButton);

    // Select occupation from dropdown
    const occupationDropdown = '#occupation';
    await this.page.selectOption(occupationDropdown, { label: occupation });
}
// Example test case using the LoginPage class
test('User can log in and select occupation', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to the login page
    await loginPage.navigateTo('https://business.aami.com.au/about-your-business');

    // Perform login
    await loginPage.login('testuser', 'password123');

    // Accept terms and select occupation
    await loginPage.acceptTermsAndSelectOccupation('Electrician');

    // Add assertions to verify the behavior after selecting occupation
    const selectedOccupation = await page.$eval('#occupation', el => el.value);
    expect(selectedOccupation).toBe('Electrician');
});
