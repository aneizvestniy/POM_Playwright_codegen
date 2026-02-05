# POM + Playwright Codegen — навчальні матеріали (UA)

Навчальний репозиторій по **Playwright** з упором на практику:
- **Codegen**: швидкий старт, генерація локаторів/асертів
- **Page Object Model (POM)**: архітектура для підтримуваних UI тестів
- **Організація проєкту**: структура папок, правила, масштабування

Мова: **українська**.

---

## Зміст

- [Огляд](#огляд)
- [Фічі](#фічі)
- [Структура репозиторію](#структура-репозиторію)
- [Пререквізити](#пререквізити)
- [Швидкий старт](#швидкий-старт)
- [Запуск тестів](#запуск-тестів)
- [Звіти](#звіти)
- [Ключові домовленості](#ключові-домовленості)
- [Розширення матеріалів](#розширення-матеріалів)
- [Troubleshooting](#troubleshooting)

---

## Огляд

Цей репозиторій складається з двох частин:

1) **Навчальні матеріали** (конспекти/приклади/вправи) — папка `docs/`
2) **Живий приклад фреймворку** на Playwright Test — `examples/test-frameworks/playwright/`

Ціль: щоб новачок міг прочитати короткий конспект → подивитись приклад → виконати вправу → одразу запустити тести.

## Фічі

- Готовий мінімальний Playwright Test проєкт (TS)
- Приклади локаторів + assertions + screenshot testing
- Розділення web-тестів через тег `@web` (щоб не ламати дефолтний запуск)
- Папки `docs/*` у форматі: **README + examples + exercises**

## Структура репозиторію

```text
POM_Playwright_codegen/
├── prezentations/                 # презентації (Markdown)
├── docs/                          # конспекти/приклади/вправи
│   ├── 01-codegen/
│   │   ├── README.md
│   │   ├── examples/
│   │   └── exercises/
│   ├── 02-pom/
│   └── 03-project-organization/
├── examples/
│   └── test-frameworks/
│       └── playwright/            # runnable Playwright Test project
│           ├── playwright.config.ts
│           ├── package.json
│           └── tests/
└── LICENSE
```

## Пререквізити

- **Node.js**: 18+ (рекомендовано 20+)
- **npm**: 9+
- ОС: Windows/macOS/Linux

## Швидкий старт

```bash
cd examples/test-frameworks/playwright
npm ci
npx playwright install chromium
npm test
```

> Якщо у середовищі не встановлені залежності для браузера (Linux CI/сервер), використовуй:
> `npx playwright install --with-deps chromium`

## Запуск тестів

Усі команди запускаються з папки `examples/test-frameworks/playwright`.

### Run all (default)

```bash
npm test
```

> Дефолтний запуск **не включає** `@web` тести.

### UI mode

```bash
npm run test:ui
```

### Headed

```bash
npm run test:headed
```

### Update snapshots

```bash
npm run test:update-snapshots
```

### Web tests (optional)

```bash
npm run test:web
```

## Звіти

Після запуску тестів можна відкрити HTML-звіт:

```bash
npx playwright show-report
```

## Ключові домовленості

- **Ніяких `waitForTimeout`** у реальних тестах → використовуємо auto-wait + `expect()`.
- **Селектори**: пріоритет `getByRole/getByLabel/getByTestId` → CSS/XPath як крайній випадок.
- **POM**:
  - локатори та actions — в Page Objects / Components
  - assertions — у тестах (зазвичай)

## Розширення матеріалів

Коли “мало інформації” — розширюємо не абзацами, а практикою:

- додай 1 новий приклад у `docs/XX-*/examples/`
- додай 2–3 вправи у `docs/XX-*/exercises/exercises.md`
- додай 1 тест у `examples/test-frameworks/playwright/tests/`

## Troubleshooting

**Playwright: browser executable doesn't exist**
- `npx playwright install chromium`

**На Linux падає через системні бібліотеки**
- `npx playwright install --with-deps chromium`

**Web тести флейкають через мережу**
- запускай `npm test` (він їх ігнорує)
- або позначай такі тести тегом `@web`
