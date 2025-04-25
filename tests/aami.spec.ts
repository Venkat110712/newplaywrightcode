import { test, expect } from '@playwright/test';

test.describe('AAMI Business Website Tests', () => {
    test('should navigate to About Your Business page and accept terms', async ({ page }) => {
        // Navigate to the AAMI Business website
        await page.goto('https://www.business.aami.com.au');

        // Click on "I understand" button if it exists
        const understandButton = await page.locator('button:has-text("I understand")');
        if (await understandButton.isVisible()) {
            await understandButton.click();
        }

        // Verify navigation to the About Your Business page
        await page.click('a:has-text("About Your Business")');
        await expect(page).toHaveURL(/.*about-your-business/);
    });

    test('should search and select occupation as Cleaner', async ({ page }) => {
        // Navigate to the About Your Business page
        await page.goto('https://www.business.aami.com.au/about-your-business');

        // Click on "I understand" button
        await page.click('button:has-text("I understand")');

        // Enter "Cleaner" in the occupation input field
        await page.fill('input[placeholder="Enter a keyword e.g. cleaning"]', 'Cleaner');

        // Select "Cleaner" from the occupation list
        await page.click('li:has-text("Cleaner")');

        // Verify the selected occupation
        const selectedOccupation = await page.inputValue('input[placeholder="Enter a keyword e.g. cleaning"]');
        expect(selectedOccupation).toBe('Cleaner');
    });

    test('should verify navigation to Contact Us page', async ({ page }) => {
        // Navigate to the AAMI Business website
        await page.goto('https://www.business.aami.com.au');

        // Click on "Contact Us" link
        await page.click('a:has-text("Contact Us")');

        // Verify navigation to the Contact Us page
        await expect(page).toHaveURL(/.*contact-us/);
    });
});