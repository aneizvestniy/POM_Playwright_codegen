# POM + Playwright Codegen — навчальні матеріали

Цей репозиторій — компактний навчальний набір по **Playwright** з фокусом на:
- **Codegen** (швидкий старт, генерація тестів/локаторів/асертів)
- **Page Object Model (POM)** (архітектура тестів, підтримка)
- **Організація проєкту** (структура папок, правила, практики)

Мова матеріалів: **українська**.

## Структура

- `prezentations/` — презентації (Markdown) по модулях
- `docs/` — конспекти, приклади, вправи
- `examples/test-frameworks/playwright/` — робочий приклад Playwright Test проєкту

## Швидкий старт (Playwright приклад)

```bash
cd examples/test-frameworks/playwright
npm ci
npm test
```

> За потреби додамо web-тести окремо (через теги `@web`) — як у попередньому навчальному репозиторії.

## Модулі

1. **Codegen** → `docs/01-codegen/` + `prezentations/01_Codegen.md`
2. **POM** → `docs/02-pom/` + `prezentations/02_Pom.md`
3. **Project organization** → `docs/03-project-organization/` + `prezentations/03_Project_organization.md`

## Як вносити матеріали

- Для кожного модуля:
  - `docs/XX-*/README.md` — короткий конспект (теорія + best practices)
  - `docs/XX-*/examples/*` — приклади (code snippets)
  - `docs/XX-*/exercises/exercises.md` — вправи

Якщо інформації бракує — розширюємо матеріал **прикладами і правилами**, а не “водою”.
