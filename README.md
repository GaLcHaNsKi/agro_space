<div align="center">

# 🌱 AgroSpace

**Умный советник по выбору культуры для вашего поля или космической станции**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Flask](https://img.shields.io/badge/Flask-3-000000?logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-1.6-F7931E?logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🚀 О проекте

**AgroSpace** — это веб-приложение на основе машинного обучения, которое анализирует характеристики почвы и климата и предсказывает урожайность культур. Оно помогает принимать обоснованные решения о том, что и где выращивать — будь то фермерское хозяйство или автономная космическая станция.

### 🎭 Два режима использования

| 👨‍🌾 Фермер | 👨‍🚀 Астронавт |
|---|---|
| Вводит цены на культуры | Вводит количество людей и площадь |
| Получает **прогноз дохода** с каждой культуры | Получает **количество дней**, на которое хватит урожая |
| Оптимизирует прибыль хозяйства | Планирует продовольственную безопасность |

---

## 🌾 Поддерживаемые культуры

| Культура | Калорийность (ккал/кг) |
|---|---|
| 🌽 Кукуруза (Maize) | 3650 |
| 🥔 Картофель (Potato) | 700 |
| 🌾 Пшеница (Wheat) | 3300 |
| 🌾 Ячмень (Barley) | 3540 |
| 🫘 Фасоль (Bean) | 3300 |
| 🟢 Горох (Pea) | 3300 |

---

## 🧪 Входные параметры модели

Модель принимает **9 агрономических показателей** для предсказания урожайности:

| Параметр | Описание |
|---|---|
| **N** | Содержание азота в почве |
| **P** | Содержание фосфора в почве |
| **K** | Содержание калия в почве |
| **pH** | Кислотность почвы |
| **temperature** | Среднесуточная температура (°C) |
| **humidity** | Влажность воздуха (%) |
| **rainfall** | Количество осадков (мм) |
| **Zn** | Содержание цинка в почве |
| **S** | Содержание серы в почве |

---

## 🛠️ Технологический стек

**Frontend:**
- ⚛️ React 19 + Vite
- 🎨 Tailwind CSS
- 🔀 React Router DOM
- 🖼️ Lucide React (иконки)

**Backend:**
- 🐍 Flask + Flask-CORS
- 📊 scikit-learn (ML модель)
- 🐼 pandas

---

## 🗂️ Структура проекта

```
agro_space/
├── frontend/              # React-приложение
│   ├── src/
│   │   ├── pages/
│   │   │   ├── role.jsx   # Страница выбора роли (Фермер / Астронавт)
│   │   │   └── main.jsx   # Главная страница с формой и результатами
│   │   └── components/    # Переиспользуемые компоненты
│   └── package.json
├── backend/
│   ├── server.py          # Flask API сервер
│   └── crop_yield_model.pkl  # Обученная ML-модель
└── requirements.txt       # Python-зависимости
```

---

## ⚡ Как запустить проект

### 1. Установка зависимостей

```bash
# Python-зависимости для бэкенда
pip install -r requirements.txt

# Node.js-зависимости для фронтенда
cd frontend && npm install
```

### 2. Запуск бэкенда

```bash
python ./backend/server.py
```

Сервер запустится на `http://localhost:5000`.

### 3. Запуск фронтенда

```bash
cd frontend
npm run dev
```

Приложение будет доступно на `http://localhost:5173`.

### 4. Production-сборка

```bash
cd frontend
npm run product
```

---

## 📡 API

### `POST /predict`

Предсказывает урожайность для всех культур.

**Тело запроса:**

```json
{
  "mode": "FARM",
  "args": {
    "N": 80, "P": 40, "K": 40,
    "ph": 6.5,
    "temperature": 22,
    "humidity": 65,
    "rainfall": 200,
    "Zn": 2,
    "S": 10
  },
  "depParam": {
    "Maize": { "price": 200 },
    "Wheat": { "price": 180 }
  }
}
```

**Режимы (`mode`):**
- `"FARM"` — расчёт дохода. `depParam` содержит цены за тонну по каждой культуре.
- `"STATION"` — расчёт дней пропитания. `depParam` содержит `peopleNumber` и `square` (площадь в м²).

---

## 💡 Как это работает

1. Пользователь выбирает роль: **Фермер** или **Астронавт**
2. Вводит параметры почвы и климата
3. ML-модель (Random Forest / Gradient Boosting на scikit-learn) предсказывает урожайность (т/га) для каждой из 6 культур
4. Приложение рассчитывает итоговый показатель (доход или дни питания) и сортирует культуры по убыванию
5. Результаты отображаются на карточках с рекомендациями

---

<div align="center">
  <sub>Наслаждайтесь! 🌍</sub>
</div>
