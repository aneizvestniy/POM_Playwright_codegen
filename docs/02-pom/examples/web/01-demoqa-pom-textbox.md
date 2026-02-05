# Web приклад: POM для DemoQA Text Box

Сайт: https://demoqa.com/text-box

## Ідея

Зробити POM для форми і написати 1 тест без прямих селекторів у тесті.

## Page Object (чернетка)

```ts
import { expect, Locator, Page } from '@playwright/test';

export class TextBoxPage {
  readonly fullName: Locator;
  readonly email: Locator;
  readonly currentAddress: Locator;
  readonly permanentAddress: Locator;
  readonly submit: Locator;
  readonly output: Locator;

  constructor(private page: Page) {
    this.fullName = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.currentAddress = page.locator('#currentAddress');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submit = page.getByRole('button', { name: 'Submit' });
    this.output = page.locator('#output');
  }

  async open() {
    await this.page.goto('https://demoqa.com/text-box');
  }

  async fillForm(data: { name: string; email: string; current: string; permanent: string }) {
    await this.fullName.fill(data.name);
    await this.email.fill(data.email);
    await this.currentAddress.fill(data.current);
    await this.permanentAddress.fill(data.permanent);
  }

  async submitForm() {
    await this.submit.click();
  }

  async expectOutputContains(text: string) {
    await expect(this.output).toContainText(text);
  }
}
```

> Тут локатори через `#id` — бо DemoQA так побудований. У продукті краще `getByRole/getByLabel/getByTestId`.
