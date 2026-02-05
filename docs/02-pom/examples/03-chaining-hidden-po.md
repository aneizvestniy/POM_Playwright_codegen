# Приклад: chaining / hidden Page Object

Ідея: метод Page Object **повертає інший Page Object**, моделюючи навігацію.

```ts
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { AddGuestPage } from './AddGuestPage';

export class GuestsListPage extends BasePage {
  readonly addGuestsBtn: Locator;

  constructor(page: Page) {
    super(page, '/guests');
    this.addGuestsBtn = page.locator('div.pagination a.abutton');
  }

  async clickAddGuestButton(): Promise<AddGuestPage> {
    await this.addGuestsBtn.click();
    return new AddGuestPage(this.page);
  }
}
```

Поради:
- chaining робить тести читабельними, але **переконайся**, що перехід завершився (auto-wait / `expect().toHaveURL()` / `expect(locator).toBeVisible()`).
