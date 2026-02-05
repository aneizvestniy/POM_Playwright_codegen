# 03 — Організація проєкту (структура)

## Мета модуля

Зробити структуру автотестів такою, щоб:
- легко масштабувати
- легко онбордити нових людей
- швидко знаходити потрібний код

## Рекомендована структура (варіант)

```text
src/
  components/
  pages/        (або pageObjects/)
  utils/

tests/
  smoke/
  regression/
  ...
```

## Принципи

1) **Розділяй pages і components**
- page = сторінка / екран
- component = повторюваний блок (header, form, modal)

2) **Тести групуй за бізнес-функціями**, а не за типом селектора.

3) **Utils** — тільки спільні речі
- генератори даних
- константи
- хелпери

4) **Нейминг**
- `LoginPage`, `HeaderComponent`
- `login.spec.ts`, `guests.spec.ts`

## Дивись також

- Приклади: `docs/03-project-organization/examples/`
- Вправи: `docs/03-project-organization/exercises/exercises.md`
