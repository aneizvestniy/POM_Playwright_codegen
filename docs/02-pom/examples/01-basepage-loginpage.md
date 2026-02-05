# Приклад: BasePage + LoginPage

## BasePage

```ts
import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page, protected url: string) {}

  async open() {
    await this.page.goto(this.url);
  }
}
```

## LoginPage

```ts
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page, '/login');
    this.userNameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async login(username: string, password: string) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoaded() {
    await expect(this.loginButton).toBeVisible();
  }
}
```
