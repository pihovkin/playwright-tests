import { test, expect, Page, Locator } from '@playwright/test';
import { MainPage } from '../models/MainPage';

let mainPage: MainPage;

test.describe('тести головной сторінки', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });
  test('Перевірка відображення елементів навігації хедера', async () => {
    await mainPage.checkElementsVisibility();
  });
  test('Перевірка назви елементів навігації хедера', async () => {
    await mainPage.checkElementsText();
  });

  test('Перевірка атрибутів ahref елементів навігації хедера', async () => {
    await mainPage.checkElementsHrefAttribute();
  });
  test('Перевірка перемикання лайт мода', async () => {
    await test.step('Натискаємо на іконку перемикання лайт мода', async () => {
      await mainPage.clickSwitchLightModeIcon();
    });
    await test.step('Перевірка зміни значення атрибута', async () => {
      await mainPage.checkDataThemeAttribute();
    });
  });
  test(`Перевірка стилей зі світлою темою`, async () => {
    await test.step('Встановлення світлої теми', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Скріншотна перевірка з активною світлою темою', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });
  test(`Перевірка стилей з темною темою`, async () => {
    await test.step('Встановлення темної теми', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Скріншотна перевірка з активною темною темою', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
