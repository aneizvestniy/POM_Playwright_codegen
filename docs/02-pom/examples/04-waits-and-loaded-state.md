# Приклад: waits та "loaded state" у POM

Проблема: після переходу між сторінками тест може флейкати, якщо відразу клікає/асертить.

## Патерн: expectLoaded()

У кожної ключової сторінки зроби метод, який:
- перевіряє URL (опційно)
- перевіряє 1–2 ключові елементи (видимість)

```ts
import { expect, Locator, Page } from '@playwright/test';

export class DashboardPage {
  readonly heading: Locator;

  constructor(private page: Page) {
    this.heading = page.getByRole('heading', { name: 'Dashboard' });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/dashboard/);
    await expect(this.heading).toBeVisible();
  }
}
```

## Поради

- Не додавай `waitForTimeout()`.
- Якщо є спіннер/лоадер — краще чекати його зникнення (component-level wait).
- В `expectLoaded()` не роби бізнес-asserts (типу “сума = 100$”) — це краще у тесті.
