import { expect, Locator, Page } from '@playwright/test';
import { Urls } from '../utils/urls';
import { BasePage } from './BasePage';

export class DemoqaTextBoxPage extends BasePage {
  readonly fullName: Locator;
  readonly email: Locator;
  readonly currentAddress: Locator;
  readonly permanentAddress: Locator;
  readonly submit: Locator;
  readonly output: Locator;

  constructor(page: Page) {
    super(page);
    this.fullName = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.currentAddress = page.locator('#currentAddress');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submit = page.getByRole('button', { name: 'Submit' });
    this.output = page.locator('#output');
  }

  async open() {
    await this.page.goto(Urls.demoqaTextBox);
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
