# Приклад: структура за доменами vs за шарами

## Варіант 1 — За доменами (рекомендовано для тестів)

```text
tests/
  auth/
    login.spec.ts
    registration.spec.ts
  guests/
    add-guest.spec.ts

src/
  pages/
  components/
  utils/
```

Плюси:
- швидко знайти тести по фічі
- зручно розширювати suite

Мінуси:
- pages/components все одно будуть “за шарами”

## Варіант 2 — За шарами (часто в маленьких проектах)

```text
src/
  pages/
  components/
  utils/

tests/
  pages/
    login.spec.ts
    guests.spec.ts
```

Плюси:
- дуже просто

Мінуси:
- складніше масштабувати (тести ростуть і починається хаос)
