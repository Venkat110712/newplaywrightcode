import { test, expect } from '@playwright/test';

test.describe('Occupation Selection Test', () => {
    test('should select cleaning occupation', async ({ page }) => {
        // Navigate to the URL
        await page.goto('https://business.aami.com.au/about-your-business');

        // Click on the "I understand" button
        await page.click('button:has-text("I understand")');

        // Enter "cleaner" in the occupation input field with the placeholder "Enter a keyword e.g. cleaning"
        await page.fill('input[placeholder="Enter a keyword e.g. cleaning"]', 'Cleaner');

        // Select "cleaner" from the occupation list
        await page.click('li:has-text("Cleaner")');

        // Add an assertion to verify the selection (if applicable)
        const selectedOccupation = await page.inputValue('input[placeholder="Enter a keyword e.g. cleaning"]');
        expect(selectedOccupation).toBe('Cleaner');
    });
});