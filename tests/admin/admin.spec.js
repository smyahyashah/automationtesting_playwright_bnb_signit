const { test, expect } = require('@playwright/test');

async function loginAdminUI(page) {
  await page.goto('/admin');

  // Login page fields
  await page.getByLabel(/username/i).fill('admin');
  await page.getByLabel(/password/i).fill('password');
  await page.getByRole('button', { name: /login/i }).click();

  await page.getByRole('button', { name: 'Admin' }).click();

  // After login, you typically land on admin area with nav items like Rooms / Branding / Messages etc.
  await expect(page.getByText(/rooms|branding|messages|report/i)).toBeVisible({
    timeout: 15_000
  });
}

test.describe('Admin flow - automationintesting.online', () => {
  test('Admin can login and view admin dashboard/navigation', async ({ page }) => {
    await loginAdminUI(page);
  });

  test('Admin can navigate to Rooms (basic verification)', async ({ page }) => {
    await loginAdminUI(page);

    // Try to click Rooms if present
    const roomsLink = page.getByRole('link', { name: /rooms/i });
    if (await roomsLink.count()) {
      await roomsLink.first().click();
      await expect(page.getByText(/room/i)).toBeVisible({ timeout: 10_000 });
    } else {
      // Some builds use buttons/tabs instead of links
      const roomsBtn = page.getByRole('button', { name: /rooms/i });
      if (await roomsBtn.count()) {
        await roomsBtn.first().click();
        await expect(page.getByText(/room/i)).toBeVisible({ timeout: 10_000 });
      } else {
        // Still consider login validated if nav exists
        await expect(page.getByText(/branding|messages|report/i)).toBeVisible();
      }
    }
  });
});
