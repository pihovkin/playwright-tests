# Playwright Test Automation Practice Project

Automated UI tests for [playwright.dev](https://playwright.dev/) built with Playwright and TypeScript.

## What is tested

Main page header:
- Visibility of navigation elements
- Text content of navigation elements
- href attributes of navigation links
- Light/dark theme switching (attribute check)
- Screenshot comparison for light and dark themes

## Project structure

```
tests/
├── fixtures/      # Custom fixtures (mainPage)
├── models/        # Page Object Model classes (MainPage)
├── pages/         # Test spec files
└── screenshots/   # Baseline screenshots for visual testing
```

## Tech stack

- [Playwright](https://playwright.dev/)
- TypeScript
- GitHub Actions (CI)

## How to run

npm install
npx playwright install
npx playwright test

## Author

Denys Pikhovkin — QA Engineer
[LinkedIn](https://www.linkedin.com/in/pikhovkin/)
