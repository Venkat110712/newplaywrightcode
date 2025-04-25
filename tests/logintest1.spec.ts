import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// /c:/Users/venka/Documents/newplaywrightcode/tests/logintest1.spec.ts

test.describe('Login Tests', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('validUser', 'validPassword');
        await expect(page).toHaveURL('https://example.com/dashboard'); // Replace with the actual dashboard URL
    });
});
//write a 