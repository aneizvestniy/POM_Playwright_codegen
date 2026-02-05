Page Object Model (POM)
Концепція Page Object Model (POM) є шаблонним підходом до автоматизації тестування веб-додатків, який дозволяє структурувати та управляти автоматизованими тестами більш ефективно. Основна ідея полягає в розділенні коду автоматизованих тестів від коду сторінок веб-додатку.

Основні складові концепції Page Object Model:

Page Objects: Це класи або модулі, які відображають окремі сторінки або компоненти веб-додатку. Кожен об'єкт Page містить методи для взаємодії з елементами на цій сторінці (наприклад, введення тексту, клік на кнопку тощо) та методи для отримання даних з цієї сторінки.
Розділення логіки тестів від логіки сторінок: Завдяки використанню Page Objects, логіка тестів стає більш чистою і зрозумілою. Тестувальні скрипти використовують методи з об'єктів сторінок для виконання дій на сторінках, замість написання коду, пов'язаного зі структурою HTML або CSS.
Повторне використання та підтримка: При зміні елементів на сторінках веб-додатку, зміни уніфіковано вносяться в Page Object, що дозволяє уникнути редундантності та спрощує підтримку тестового коду.
Читабельність та обслуговування: POM допомагає зберігати код тестів більш читабельним, організованим та легким у розумінні. Це полегшує роботу з тестами для розробників та тестувальників.

Як реалізувати POM в Playwright
У Playwright реалізація Page Object Model (POM) базується на створенні класів, які представляють окремі сторінки або компоненти веб-додатку. Кожен клас Page відповідає конкретній сторінці або фрагменту сторінки і містить методи для взаємодії з елементами на цій сторінці.

Ось приклад реалізації POM в Playwright:


class BasePage {
  constructor(page, url) {
    this._page = page;
    this._url = url;
  }

  async open() {
    await this._page.goto(this._url);
  }
}

class LoginPage extends BasePage {
  constructor(page) {
    super(page, "/login");
    this.userNameInput = page.locator('input[name="username"]')
    this.passwordInput = page.locator('input[name="password"]')
    this.loginButton = page.locator('button[type="submit"]')
  }

  async login(username, password) {
    await this.userNameInput.fill( username);
    await this.passwordInput.fill( password);
    await this.loginButton.click();
  }
}

Зверніть увагу що ми передаємо лише відносний шлях сторінки "/login" оскільки зазвичай baseUrl вказано в конфізі.


Ось як ми використовуємо наші PO в тесті:


test('Login', async({page})=>{
	const user = {
		username: "John",
		password: "some password"
	}
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(user.username, user.password);

  // Додаткові кроки тестування на сторінці після входу 
})

У цьому прикладі створено два класи: BasePage, який містить загальні методи для сторінок (наприклад, метод для відкриття сторінки), та LoginPage, який успадковує BasePage і містить метод для авторизації користувача. Використовуючи ці класи, кожен учасник команди автоматизації може взаємодіяти зі сторінками веб-додатку за допомогою відповідних методів без необхідності писати дублюючий код.

Компоненти. Приховане створення PO
У контексті Page Object Model (POM) компоненти - це відокремлені частини сторінки чи її елементи, які можуть бути використані на різних сторінках або у різних частинах однієї сторінки.

Коли мова йде про POM, компоненти виступають як розширення сторінок, що допомагають створити єдиний шаблон для часто використовуваних елементів чи функціоналу. Вони відображають певні елементи чи функціонал на сторінці та дозволяють перевикористовувати цю логіку на різних сторінках або в різних тестах.

Наприклад, у POM можуть бути такі компоненти:

Шапка (Header): Може містити елементи, такі як логотип, меню навігації та пошук.
Футер (Footer): Містить інформацію про авторські права, посилання на соціальні мережі та інші додаткові елементи.
Форми (Forms): Включають поля введення, кнопки відправки та перевірки на формах різних сторінок.
Компоненти дозволяють створювати більш організовану структуру тестового коду, спрощуючи підтримку, тому що одні й ті ж елементи можна використовувати на різних сторінках без необхідності копіювання коду. Також вони полегшують зміну елементів, оскільки зміни в компонентах автоматично відображаються на всіх сторінках, де вони використовуються.

Розширимо наш попередній приклад:


//src/components/LoginForm.js
class LoginForm {
  constructor(page) {
    this.userNameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async fillLoginForm(username, password) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}

//src/pageObjects/LoginPage.js
import BasePage from './BasePage.js'
import LoginForm from '../components/LoginForm.js'

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page, "/login");
    this.loginForm = new LoginForm(page); // Ініціалізуємо компонент LoginForm
  }

  async login(username, password) {
    await this.loginForm.fillLoginForm(username, password); // Використовуємо методи LoginForm
    await this.loginForm.clickLogin();
  }
}

Ось як ми використовуємо це в тесті:


import LoginPage from '../src/pageObjects/LoginPage.js'

test('Login', async({page})=>{
	const user = {
		username: "John",
		password: "some password"
	}
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(user.username, user.password);

  // Додаткові кроки тестування на сторінці після входу 
})

Приховане створення PO
Існує прктика що називається "поверненням інстансу іншого Page Object з методу Page Object". Це відбувається, коли метод одного PO створює екземпляр іншого PO та повертає його для подальшого використання.


import BasePage from './BasePage.js'
import AddGuestPage from './AddGuestPage.js'

export default class GuestsListPage extends BasePage {
	constructor(page) {
		super(page, "/guests")
		this.addGuestsBtn = page.locator('div.pagination  a.abutton');
	}

	async clickAddGuestButton() {
		await this.addGuestsBtn.click();
		return new AddGuestPage(this.page);
	}
}

import GuestsListPage from '../src/pageObjects/GuestsListPage.js'

test('Add guest', async({page})=>{
	const guestsListPage = new GuestsListPage(page);
  await guestsListPage.open(); // Переходимо на сторінку списку гостей

  // Клік на кнопку додавання гостя і отримання сторінки додавання гостя
  const addGuestPage = await guestsListPage.clickAddGuestButton();

  // Тепер можна виконати дії на сторінці додавання гостя
  await addGuestPage.fillForm('John Doe', 'john@example.com');
  await addGuestPage.submitForm();

  // Перевірка результатів чи додано нового гостя
})