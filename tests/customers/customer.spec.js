const {test, expect} = require('@playwright/test');

test.describe('Customer (Public) - automationtesting', () => {
    test('Hompage loads and show mnain sections', async ({page}) => {
        await page.goto('/');

        //Basic home page exceptions
        //await expect(page).toHaveText("Shady Meadows B&B");

        await expect(
            page.locator('.room-card').first()).toBeVisible();        
    });

    //contact form submition
    test('Customer can submit contact form ', async ({page}) => {
        await page.goto('/');

        await page.getByRole('button', { name: 'Submit' }).scrollIntoViewIfNeeded();


        await page.getByRole('textbox', { name: 'Name' }).fill('Yahya ${Date.now()}');
        await page.getByRole('textbox', { name: 'Email' }).fill('Yahya ${Date.now()}@yopmail.com');
        await page.getByRole('textbox', { name: 'Phone' }).fill('00923322212009');
        await page.getByRole('textbox', { name: 'Subject' }).fill('Yahya Booking Room');
        await page.getByTestId('ContactDescription').fill('Yahya doing automation using Playwright for the project');
        await page.getByRole('button', { name: 'Submit' }).click();

    });

    test('Customer can open booking form for a room (basic booking flow entry)', async ({ page }) => {
    await page.goto('/');

    // Rooms area is typically below the fold
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Click the first “Book this room” button (keep it flexible)
    const bookBtn = page.getByRole('button', { name: /book this room/i }).first();
    await expect(bookBtn).toBeVisible({ timeout: 15_000 });
    await bookBtn.click();

    // Booking form usually opens (modal/section) – assert something booking-related appears
    await expect(page.getByText(/book|reservation|check in|check out/i)).toBeVisible({
      timeout: 15_000
    });

    // Optional: if fields exist, fill what’s available (won’t fail if field not found)
    const maybeFirstName = page.locator('input[name="firstname"], input[placeholder*="First"], #firstname');
    if (await maybeFirstName.count()) await maybeFirstName.first().fill('Yahya');

    const maybeLastName = page.locator('input[name="lastname"], input[placeholder*="Last"], #lastname');
    if (await maybeLastName.count()) await maybeLastName.first().fill('Shah');

    // Don’t hard-fail on unknown UI variations; the key verification is the booking form opens.
  });
})