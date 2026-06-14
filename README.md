# NordHaus — Премиальный сайт строительной компании

Одностраничный лендинг для строительной компании премиум-класса. Создан на Next.js 15, Tailwind CSS v4 и Framer Motion.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Структура

- `app/` — layout, главная страница, глобальные стили
- `components/` — секции сайта (Hero, About, Portfolio и др.)
- `data/` — контент компании и проектов (легко редактировать)
- `public/images/` — фотографии проектов

## Редактирование контента

Все тексты, контакты и данные компании — в [`data/company.ts`](data/company.ts).  
Проекты портфолио — в [`data/projects.ts`](data/projects.ts).

## Сборка

```bash
npm run build
npm start
```
