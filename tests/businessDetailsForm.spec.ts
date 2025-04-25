import { test, expect } from '@playwright/test';

test('Complete Business Details Form', async ({ page }) => {
    // Step 1: Navigate to the URL
    await page.goto('https://business.aami.com.au/about-your-business');

    // Step 2: Enter "Cleaner" in the "What does your business do?" field
    await page.fill('input[placeholder="Enter a keyword e.g. cleaning"]', 'Cleaner');

    // Step 3: Select "Cleaner" from the list
    await page.click('li:has-text("Cleaner")');

    // Step 4: Enter "10 Shelley St, Sydney, 2000, NSW" in the "What is your business address?" field
    await page.fill('input[placeholder="Enter your business address"]', '10 Shelley St, Sydney, 2000, NSW');

    // Step 5: Select "$76K - $100K" for "What revenue do you think your business will make in the next 12 months?"
    await page.selectOption('select[aria-label="What revenue do you think your business will make in the next 12 months?"]', '$76K - $100K');

    // Step 6: Click "No" for "Do you have revenue across more than one state?"
    await page.click('button:has-text("No")');

    // Step 7: Click "Ok, I've got it" button
    await page.click('button:has-text("Ok, I\'ve got it")');

    // Step 8: Select "No payments made or Expected to be Made" from the dropdown for "If you utilise labour hire workers or sub-contractors, what are your expected annual payments to them?"
    await page.selectOption('select[aria-label="If you utilise labour hire workers or sub-contractors, what are your expected annual payments to them?"]', 'No payments made or Expected to be Made');

    // Step 9: Click "No" for "Do you clean any premises before and /or during their operating/business hours?"
    await page.click('button:has-text("No")');

    // Step 9: Click "No" for "Do you clean any premises before and /or during their operating/business hours?"
    await page.click('button:has-text("Yes")');


    // Step 10: Click "No" for "Does the business clean at shopping centres, supermarkets, shopping villages, shopping arcades, hospitals, refineries, railway stations or airports?"
    await page.click('button:has-text("No")');

    // Step 11: Click "No" for "Does the business clean at schools, childcare centres, day care centres, kindergartens, creches or children's nurseries?"
    await page.click('button:has-text("No")');

    // Step 12: Click "No" for "Is the person to be insured eligible for the NSW small business stamp duty exemption?"
    await page.click('button:has-text("No")');
});