# 🎓 Навчальний курс: POM + Playwright Codegen

Навчальний репозиторій для студентів з автоматизованого тестування на базі **Playwright**.

Курс організований у тому ж стилі та підході, як у репозиторії:
**Playwright_locators_actions_assertions**

- ✅ Теорія простою мовою
- ✅ Практичні приклади з поясненнями
- ✅ Вправи для закріплення
- ✅ Готовий Playwright Test фреймворк з тестами (папка `examples/test-frameworks/playwright/`)

---

## 📚 Зміст курсу

### Модуль 01: Codegen

- що таке Playwright codegen і коли він корисний
- як згенерувати тест/локатори/асерти
- як перетворити codegen-чернетку у підтримуваний тест

📁 [Документація](./docs/01-codegen/README.md) | [Приклади](./docs/01-codegen/examples/) | [Web приклади](./docs/01-codegen/examples/web/) | [Вправи](./docs/01-codegen/exercises/)

---

### Модуль 02: Page Object Model (POM)

- Page Objects vs Components
- правила POM (де локатори, де asserts)
- waits та "loaded state" (`expectLoaded()`)
- chaining / hidden PO

📁 [Документація](./docs/02-pom/README.md) | [Приклади](./docs/02-pom/examples/) | [Web приклади](./docs/02-pom/examples/web/) | [Вправи](./docs/02-pom/exercises/)

---

### Модуль 03: Організація проєкту

- структура папок (pages/components/utils/tests)
- варіант за доменами vs за шарами
- неймінг і домовленості

📁 [Документація](./docs/03-project-organization/README.md) | [Приклади](./docs/03-project-organization/examples/) | [Вправи](./docs/03-project-organization/exercises/)

---

## 🧩 Презентації

Папка: [`prezentations/`](./prezentations)

- `01_Codegen.md`
- `02_Pom.md`
- `03_Project_organization.md`

---

## 🚀 Швидкий старт (Playwright Test framework)

### Передумови

- Node.js >= 18
- npm

### Встановлення

```bash
cd examples/test-frameworks/playwright
npm ci
npx playwright install chromium
```

> Якщо у середовищі не встановлені залежності для браузера (Linux CI/сервер), використовуй:
> `npx playwright install --with-deps chromium`

### Запуск тестів

```bash
npm test
```

> Дефолтний запуск **не включає** `@web` тести.

### Web tests (optional)

```bash
npm run test:web
```

### Відкриття UI mode

```bash
npm run test:ui
```

---

## 🔗 Корисні посилання

- Locator API: https://playwright.dev/docs/api/class-locator
- Playwright codegen: https://playwright.dev/docs/codegen
- HTML report: https://playwright.dev/docs/test-reporters
