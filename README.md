shri2013.ru
===========

Экзаменационное задание для Московской ШРИ Яндекса 2013. [Демо.](http://jvee.github.io/shri2013.ru/)

Инсталляция
----------
Для сборки проекта необходимы: **Node.js**, **npm**, **Grunt**, **bower**,
```
npm install
bower install

grunt               // Запуск окружения разработки - сервер + watch + livereload
grunt build         // Сборка проекта перед деплоем
grunt testserver    // Запуск тестового сервера для проверки перед паблишем
grunt deploy        // Деплой проекта на gh-pages
grunt test          // Запуск тестов
```

Особенности
-----------

* **Сборка** и **деплой** - при помощи **Grunt**
* Библиотеки: **Backbone**, **Underscore**, **jQuery**
* Шаблонизаторы: **Jade** для сборки проекта, прекомпилированные **doT.js** шаблоны на клиенте
* Тесты: **Mocha** + **Chai** + **Sinon**
* Препроцессор - **stylus**
* **Git-flow**, насколько мне было дано понять

История 
------------
#### v0.11.0 ####
######  14.10.13 7:37 ######
* базовая реализация проекта

