# Web приклад: Codegen локатори на реальному сайті (DemoQA)

Сайт: https://demoqa.com/text-box

## Мета

Порівняти, які локатори пропонує codegen на реальному UI і як їх покращити.

## Кроки

1) Запусти codegen:

```bash
npx playwright codegen https://demoqa.com/text-box
```

2) Заповни форму:
- Full Name
- Email
- Current Address
- Permanent Address
- Submit

3) Подивись, що згенерив codegen:
- чи є `getByLabel()`
- чи підхопив `getByPlaceholder()`
- чи впав у `locator('#userName')`

## Як покращити

- Для полів, які мають label — пробуй `getByLabel('Full Name')`
- Для кнопок — `getByRole('button', { name: 'Submit' })`
- Якщо UI складний — додай `data-testid` у власному продукті (DemoQA ти не зміниш)

## Важливо

DemoQA — публічний демо сайт. Іноді повільний, іноді змінюється. Для CI такі тести роби **опціональними** (познач тегом `@web`).
