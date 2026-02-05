# Приклад: шаблон структури

```text
src/
  components/
    Header.ts
    LoginForm.ts

  pages/
    BasePage.ts
    LoginPage.ts

  utils/
    testData.ts
    urls.ts

tests/
  auth/
    login.spec.ts
```

## Коментарі

- **components/** — використовує `Locator` і працює з частиною сторінки
- **pages/** — композиція з компонентів + сторінкові дії
- **utils/** — ніяких селекторів, тільки “спільне”
- **tests/** — сценарії, `expect` і мінімум деталей UI
