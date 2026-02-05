import { test } from '@playwright/test';
import { DemoqaTextBoxPage } from '../src/pages/DemoqaTextBoxPage';

test.describe('POM on real site (DemoQA) @web', () => {
  test('submit text box form using Page Object', async ({ page }) => {
    const textBox = new DemoqaTextBoxPage(page);

    await textBox.open();
    await textBox.fillForm({
      name: 'John Doe',
      email: 'john@example.com',
      current: 'Current address',
      permanent: 'Permanent address',
    });
    await textBox.submitForm();

    await textBox.expectOutputContains('John Doe');
    await textBox.expectOutputContains('john@example.com');
  });
});
