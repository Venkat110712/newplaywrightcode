import { test, expect } from '@playwright/test';

test('simple login test', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the login form
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');

    // Submit the form
    await page.click('button[type="submit"]'); // Corrected the button selector

    // Verify successful login by checking for a specific element
    await expect(page.locator('text=Welcome, testuser')).toBeVisible();
});

test('login with invalid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the login form with invalid credentials
    await page.fill('input[name="username"]', 'invaliduser');
    await page.fill('input[name="password"]', 'wrongpassword');

    // Submit the form
    await page.click('button[type="submit"]'); // Corrected the button selector

    // Verify error message is displayed
    await expect(page.locator('.error-message')).toBeVisible();
});

test('login with empty credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Submit the form without filling in any credentials
    await page.click('button[type="submit"]'); // Corrected the button selector

    // Verify error message is displayed
    await expect(page.locator('.error-message')).toBeVisible();
});

test('login with valid credentials and check URL', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the login form
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');

    // Submit the form
    await page.click('button[type="submit"]'); // Corrected the button selector

    // Verify successful login by checking for a specific element
    await expect(page.locator('text=Welcome, testuser')).toBeVisible();

    // Verify the URL after login
    await expect(page).toHaveURL('https://example.com/dashboard'); // Adjust the URL as needed
});

test('login with special characters', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the login form with special characters
    await page.fill('input[name="username"]', '!@#$%^&*()');
    await page.fill('input[name="password"]', '!@#$%^&*()');

    // Submit the form
    await page.click('button[type="submit"]'); // Corrected the button selector

    // Verify error message is displayed
    await expect(page.locator('.error-message')).toBeVisible();
});

test('login with long credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the login form with long credentials
    await page.fill('input[name="username"]', 'a'.repeat(100)); // 100 characters
    await page.fill('input[name="password"]', 'b'.repeat(100)); // 100 characters

    // Submit the form
    await page.click('button[type="submit"]'); // Corrected the button selector

    // Verify error message is displayed
    await expect(page.locator('.error-message')).toBeVisible();
});

test('login with SQL injection attempt', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the login form with SQL injection attempt
    await page.fill('input[name="username"]', "' OR '1'='1");
    await page.fill('input[name="password"]', "' OR '1'='1");

    // Submit the form
    await page.click('button[type="submit"]'); // Corrected the button selector

    // Verify error message is displayed
    await expect(page.locator('.error-message')).toBeVisible();
});

test('login with XSS attempt', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the login form with XSS attempt
    await page.fill('input[name="username"]', '<script>alert("XSS")</script>');
    await page.fill('input[name="password"]', '<script>alert("XSS")</script>');

    // Submit the form
    await page.click('button[type="submit"]'); // Corrected the button selector

    // Verify error message is displayed
    await expect(page.locator('.error-message')).toBeVisible();
});

test('login with different browsers', async ({ browserName, page }) => {
    // Use the browserName parameter to run the test in different browsers
    test.skip(browserName === 'firefox', 'Skipping this test in Firefox');

    // Navigate to the login page
    await page.goto('https://example.com/login');

    // Fill in the login form
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');

    // Submit the form
    await page.click('button[type="submit"]'); // Corrected the button selector

    // Verify successful login by checking for a specific element
    await expect(page.locator('text=Welcome, testuser')).toBeVisible();
});


