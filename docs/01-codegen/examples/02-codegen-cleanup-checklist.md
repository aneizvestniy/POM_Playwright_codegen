# Checklist: як перетворити codegen у підтримуваний тест

Codegen — це **чернетка**, а не фінальний тест.

## 1) Прибери сміття

- ❌ `page.waitForTimeout(...)` → ✅ `await expect(locator).toBeVisible()` або `toHaveText()`
- ❌ кліки по контейнерах/декору → ✅ тільки по цільових елементах
- ❌ довгі CSS ланцюжки → ✅ role/label/testid

## 2) Зроби локатори стабільними

Пріоритет:

1. `getByRole()`
2. `getByLabel()` / `getByPlaceholder()`
3. `getByTestId()` (кращий варіант для складних UI)
4. `locator('css')` — коли нема семантики
5. XPath — майже ніколи

## 3) Винеси повторюване

- логін → `LoginPage.login()`
- навігація по меню → `Header.openSettings()`
- створення тестових даних → `utils/testData.ts`

## 4) Додай asserts

Codegen часто генерує дії, але не додає "чому тест пройшов".

Мінімум:
- `expect(page).toHaveURL(...)`
- `expect(locator).toBeVisible()`
- `expect(locator).toHaveText(...)`

## 5) Зроби тест читабельним

Погано:

```ts
await page.locator('div:nth-child(2) > .x > .y').click();
```

Краще:

```ts
await loginPage.login(username, password);
await dashboard.expectLoaded();
```
