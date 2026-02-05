# Приклад: Components (LoginForm)

Компоненти — повторювані блоки UI, які можна перевикористовувати на різних сторінках.

```ts
import { Locator, Page } from '@playwright/test';

export class LoginForm {
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.userNameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async fill(username: string, password: string) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.loginButton.click();
  }
}
```

Інтеграція в Page Object:

```ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginForm } from '../components/LoginForm';

export class LoginPage extends BasePage {
  readonly form: LoginForm;

  constructor(page: Page) {
    super(page, '/login');
    this.form = new LoginForm(page);
  }

  async login(username: string, password: string) {
    await this.form.fill(username, password);
    await this.form.submit();
  }
}
```
