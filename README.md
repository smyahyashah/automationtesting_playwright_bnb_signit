# Playwright Automation – Admin & Customer Flow

This repository contains an **end-to-end automation test suite** built using **Playwright with JavaScript** for the demo application:

👉 https://automationintesting.online/

The project validates both **Customer-facing flows** and **Admin workflows** using modern, stable Playwright practices.

---

## 🧪 Tech Stack

- **Playwright**
- **JavaScript (Node.js)**
- **Playwright Test Runner**
- **HTML Reports**
- **Cross-browser testing (Chromium, Firefox, WebKit)**

---

## 📁 Project Structure
automationtesting_playwright_bnb_signit/
├─ tests/
│ ├─ customer-flow.spec.js # Customer UI flow tests
│ ├─ admin-flow.spec.js # Admin login & navigation tests
│
├─ playwright.config.js # Global Playwright configuration
├─ package.json # Project dependencies & scripts
├─ .gitignore # Ignored files/folders
└─ README.md


## 🚀 Setup Instructions

### 1️⃣ Prerequisites
- Node.js (v18+ recommended)
- npm

Check versions:
```bash
node -v
npm -v
```

nstall dependencies
```bash
npm install
```

Install Playwright browsers
```bash
npx playwright install
```

Run all tests
```bash
npm test
```

Run a specific test file
```bash
npx playwright test tests/customer-flow.spec.js
npx playwright test tests/admin-flow.spec.js
```

Test Reports
```bash
npx playwright show-report
```

📌 Notes
This project is designed for interviews, and demonstrations
The target site is a demo app; UI/content may change occasionally
Locators are written to be resilient to minor UI changes

Next steps
If you want, I can:
- Add **GitHub Actions CI**
- Refactor into **Page Object Model (POM)**
- Add **API + UI combined tests**
