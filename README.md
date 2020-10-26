# Онлайн магазин ReStore

Небольшое приложение, имитируещее работу части функционала реального интернет-магазина. Включает главную сраницу с катологом товаром и страницу с выбраными товарами. Реализован следующий функционал: добавление товаров к корзину, увеличение/уменьшения количества товаров в корзине, удаление товаров из корзины, подсчет общей стоимости и количества товаров в корзинне.

**Задача**: написать код компонентов с использованием React.js и его основных паттернов. Детально разбрать самую попульрную библиотеку для одностороннего потока данных - Redux, узнать ее особеннности. Научиться правильно работать с Redux в React приложении. Освоиить применение React + Redux на примере реального приложения.

ReStore использует mock (имитацию) сервера, чтобы работать с данными. Но проект лекго использовать с настоящим сервером.

## Доступные команды

* `npm install` - установить зависимости
* `npm start` - запустить встроенный сервер и следить за изменениями файлов
* `npm build` - собрать проект в папку `dist` в режиме production
##
#### В процессе создания приложение были изучены и применены на практике следующие инструменты:

* Работа с асинхронными данными 
* Обработка ошибок сети в компоненте
* Паттерны ппроектирования:
  * *Provider*
  * *Event switch*
  * *Компоненты высшего порядка (High-order components)*
  * *Layout component*
  * *Container component*
* Роутинг со Switch
* Pure function
* Flux-архитектура
* Использование Redux для управления состоянием приложения
* side-effects в Redux: создание и использование Middlewares
* Асинхронные action с redux-thunk

## Структура проекта
```
├── src/                                     # Исходники
│   ├── actions/                             # Action creators
│   │   └── index.js                         # 
│   ├── components/                          # Компоненты
│   │   ├── app/                             # Главный
│   │   │   ├── app.css                  
│   │   │   ├── app.js                    
│   │   │   └── index.js                     # Вспомогательный файл для import/export из компонента
│   │   ├── book-list/                       # Список товаров на странице
│   │   │   ├── book-list.css        
│   │   │   ├── book-list.js         
│   │   │   └── index.js                 
│   │   ├── book-list-item/                  # Элемент списка
│   │   │   ├── book-list-item.css      
│   │   │   ├── book-list-item.js       
│   │   │   └── index.js                 
│   │   ├── bookstore-service-context/       # Contex API          
│   │   │   ├── bookstore-service-context.js                    
│   │   │   └── index.js                 
│   │   ├── error-boundry/                   # Предохранитель
│   │   │   ├── error-boundry.css         
│   │   │   ├── error-boundry.js         
│   │   │   └── index.js                 
│   │   ├── error-indicator/                 # Сообщение об ошибке
│   │   │   ├── error-indicator.css         
│   │   │   ├── error-indicator.js          
│   │   │   └── index.js                 
│   │   ├── hoc/                             # Компоненты высшего порядка
│   │   │   ├── with-bookstore-services.js   # HOC для работы с контекстом        
│   │   │   └── index.js                 
│   │   ├── pages/                           # Страницы приложения
│   │   │   ├── cart-page.js                 # Страница заказа
│   │   │   ├── home-page.js                 # Страница с каталогом товаров/главная
│   │   ├── shop-header/                     # Шапка проекта
│   │   │   ├── shop-header.css         
│   │   │   ├── shop-header.js         
│   │   │   └── index.js                 
│   │   ├── shopping-cart-table/             # Таблица с выбранными товарами для покупки
│   │   │   ├── shopping-cart-table.css                  
│   │   │   ├── shopping-cart-table.js                   
│   │   │   └── index.js                 
│   │   └── spinner/                         # Спиннер для загрузки
│   │       ├── spinner.css              
│   │       ├── spinner.js                   
│   │       └── index.js                
│   └── reducers/                            # Reducers
│   │   └── index.js                         
│   └── services/                            # Сервисы
│   │   └── bookstore-services.js            # Сервис для работы с API
│   └── utils/                               # Утилиты
│   │   ├── compose.js                       # Функция compose
│   │   └── index.js                         
│   └── index.js                             # Корневой файл проекта
│   └── store.js                             # Логика создания store
│                                               
├── .gitignore                               # Список исключённых файлов из Git
├── README.md                                # Описание проекта
├── package-lock.json                        # Дерево установленных пакетов с блокировкой их версий
└── package.json                             # Список зависимостей
```
