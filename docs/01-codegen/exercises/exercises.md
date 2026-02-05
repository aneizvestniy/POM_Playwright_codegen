# Вправи — 01 Codegen

## Вправа 1 — Запис і рефакторинг (TodoMVC)

1) Запусти:
```bash
npx playwright codegen https://demo.playwright.dev/todomvc
```

2) Запиши сценарій:
- додати 3 todo
- відмітити 2
- перевірити, що залишився 1 активний

3) Відрефактори код:
- прибери `waitForTimeout`
- зроби локатори семантичними (`getByRole`, `getByLabel`)
- додай 2 assert-и через `expect`

## Вправа 2 — "Codegen → POM"

Візьми записаний тест і зроби мінімальний POM:
- `BasePage`
- `TodoPage` (actions: `addTodo`, `toggleTodo`, `expectItemsLeft`)

Критерій: тест читається як сценарій, без селекторів.

## Вправа 3 — Web (DemoQA)

1) Запиши через codegen сценарій для:
- https://demoqa.com/text-box

2) Замінити 2 локатори на стабільніші:
- `getByRole('button', { name: 'Submit' })`
- `getByLabel(...)` (якщо працює)

> Познач цей тест тегом `@web`, якщо додаєш його у framework.
