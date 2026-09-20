# StreamVibe

Адаптивный многостраничный сайт стримингового сервиса StreamVibe. Проект создан на React и Minista и включает страницы каталога, фильма, сериала, подписок и поддержки.

Демо: [mironovvk.github.io/stream-vibe](https://mironovvk.github.io/stream-vibe/)

## Возможности

- адаптивная верстка для desktop, tablet и mobile;
- страницы фильмов и сериалов;
- баннеры и карточки контента;
- слайдеры на базе Swiper;
- кастомные `select`, `tabs`, `accordion` и video player;
- маска номера телефона;
- таблица сравнения тарифов;
- accessibility-атрибуты для интерактивных компонентов;
- обработка и оптимизация изображений, шрифтов, иконок и видео.

## Стек

- React 18;
- Minista и Vite;
- Sass/SCSS;
- PostCSS;
- `postcss-pxtorem`;
- `postcss-preset-env`;
- Swiper;
- IMask;
- Classnames.

## Требования

- Node.js 18 или новее;
- npm 9 или новее.

## Установка

```bash
git clone https://github.com/mironovvk/stream-vibe.git
cd stream-vibe
npm install
```

## Запуск

Запуск dev-сервера:

```bash
npm run start
```

Minista выведет адрес локального сервера в терминале.

Production-сборка:

```bash
npm run build
```

Результат сборки появится в папке `dist/`.

Просмотр production-сборки:

```bash
npm run preview
```

## Маршруты

| Маршрут | Назначение |
| --- | --- |
| `/` | Главная страница |
| `/movies` | Фильмы и сериалы |
| `/movie` | Страница фильма |
| `/show` | Страница сериала |
| `/subscriptions` | Тарифы и сравнение планов |
| `/support` | Поддержка и часто задаваемые вопросы |

## Структура проекта

```text
src/
├── assets/          # изображения, шрифты, иконки, видео и favicon
├── components/      # переиспользуемые UI-компоненты
├── constants/       # константы и media queries
├── layouts/         # Header, Footer, Content и Section
├── modules/         # клиентская логика интерактивных компонентов
├── pages/           # страницы сайта
├── sections/        # крупные секции страниц
├── styles/          # глобальные стили, переменные и SCSS helpers
├── utils/           # вспомогательные функции
├── global.jsx       # общий layout и metadata
└── main.js          # инициализация клиентских модулей
```

## Команды

| Команда | Назначение |
| --- | --- |
| `npm run start` | Запуск dev-сервера |
| `npm run build` | Production-сборка в `dist/` |
| `npm run preview` | Просмотр production-сборки |

## Ассеты

Ассеты компонентов хранятся в `src/assets/` и подключаются через алиас `@/`:

```js
import logoImgSrc from '@/assets/images/logo.svg'
```

Основные каталоги:

- `src/assets/images/` — изображения интерфейса и контента;
- `src/assets/fonts/` — шрифты Manrope;
- `src/assets/icons/` — SVG-иконки;
- `src/assets/videos/` — видео эпизодов;
- `src/assets/favicons/` — favicon и web manifest.

## Конфигурация

- `minista.config.js` — настройки Minista, alias `@/`, SCSS и обработки ассетов;
- `postcss.config.js` — production-плагины PostCSS;
- `jsconfig.json` — настройки JavaScript и путей проекта.

## Лицензия

Проект создан в учебных целях. Права на исходные изображения, макеты и другие материалы принадлежат их владельцам.
