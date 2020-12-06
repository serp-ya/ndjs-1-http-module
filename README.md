# Домашнее задание к занятию «1.5 http-module. Переменные окружения»

## Установка и запуск
Для начала работы с приложением, необходимо:
- клонировать репозиторий
- установить модули при помощи команды `npm i`
- выполнить команду `npm run init`
- выполнить команду `npm link --force`
- добавить файл `.env`
- ввести команду `weather`

В файле `.env` должны быть определены 2 переменные:
- `WEATHER_STACK_API_KEY` - серверный API KEY
- `LOCAL_PORT` - порт для локального запуска утилиты

Для работы приложения, нужно ввести команду и передать обязательный аргмуент `-c` или аллиас `[--city]` и строку - название города, по которому мы хотим получить прогноз погоды.



#### Задание 1
Ознакомиться с документацией [API-сервиса weatherstack](https://weatherstack.com/documentation). 

Зарегистрируйтесь, выбрав [**Free**](https://weatherstack.com/signup/free) (бесплатный) тарифный план, чтобы получить токен для доступа к API.

#### Задание 2
На основе модуля http написать консольное приложение для динамической загрузки данных с [API](https://weatherstack.com/) погоды из *задания 1*. 

В качестве входных параметров клиент должен принимать название города, для которого требуется вывести прогноз. 

Токен для доступа к [API](https://weatherstack.com/) обязательно должен храниться в переменных окружения **env**

#### Реализация задания 2
Задание очень простое, приложение ожидает ввод города и делает запрос на [API-сервиса weatherstack](https://weatherstack.com/documentation).
Ответ обрабатывается и выводится форматированный ответ.
Так же, обрабатывается два вида ошибок:
- ошибки сети/общие ошибки
- ошибки ответа