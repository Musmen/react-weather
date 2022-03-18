# react-weather. Приложение - прогноз погоды. Техническое задание

### Структура приложения

Приложение состоит из четырёх функциональных блоков.

- Блок контроля
- Погода за сегодня
- Прогноз погоды на три дня
- Геолокационные данные

Макет приложения:
[Макет в Figma](https://www.figma.com/file/3aQwTNcZWg5CTuvlQ1t5MQ/fancy-weather?node-id=0%3A1)
_В предложенный макет можно вносить свои изменения с целью его улучшения, не удаляя и не упрощая представленные на макете элементы дизайна_

### Описание функциональных блоков

**1. Блок контроля**

- кнопка для переключения фонового изображения
- кнопка для переключения языка (en/ru/be)
- кнопка для переключения единиц измерения температуры (°C/°F)
- строка поиска

**2. Погода за сегодня**

- название населённого пункта, название страны
- текущая дата: день недели в коротком формате, число, месяц. Например: Сб 26 октября
- время: часы, минуты, секунды. Например: 17:23:12. Обновляется раз в секунду
- температура в текущий промежуток времени
- описание погоды (summary), ощущаемая температура (apparent temperature), скорость ветра(м/с), влажность(%)
- иконка погоды

**3. Прогноз погоды на три дня**

- день недели в полном формате
- средняя температура
- иконка погоды

**4. Геолокационные данные**

- координаты населённого пункта: долгота и широта (в градусах и минутах)
- карта местности

## Работа приложения

- Когда пользователь открывает приложение, все данные на странице относятся к текущему местоположению пользователя
- В строке поиска осуществляется поиск по населённому пункту
- Фоновое изображение изменяется при обновлении содержания страницы или при клике по кнопке для переключения фонового изображения в блоке контроля
- Настройки при первом запуске приложения: язык – английский, единицы измерения температуры – градусы Цельсия:
  - переключатель языка изменяет язык отображения текста страницы (en/ru/be).
  - переключатель температуры изменяет единицы измерения температуры (°C/°F).
  - пользовательские настройки языка и температуры сохраняются в local storage.

## Технические требования

- приложение корректно работает в последней версии Chrome
- можно использовать css-препроцессоры, bootstrap, material design, lodash.js
- разрешается использовать jQuery или другие JS библиолеки только в качесте подключаемой зависимости для UI библиотек. Использование jQuery и JS библиотек в основном коде приложения не допускается

## Критерии оценки:

### Basic scope +80

- вёрстка, дизайн, UI **30 баллов**
  - минимальная ширина страницы, при которой она отображается корректно – 320 рх. Все указанные в задании элементы присутствуют как на десктопной, так и на мобильной версии +10
  - приложение корректно отображается для любого выбранного языка, единиц измерения температуры, указанного в поиске населённого пункта +10
  - внешний вид приложения внешне соответствует макету или является его улучшенной версией +10
- В блоке "Погода за сегодня" корректно отображаются данные, относящиеся к текущему местоположению пользователя – **20 баллов**
  - данные о погоде и местоположении пользователя - +10
  - дата в указанном в описании задания формате, часы, обновляющие время каждую секунду +10
- В блоке "Прогноз погоды на три дня" корректно отображаются данные, относящиеся к текущему местоположению пользователя – **10 баллов**
- В блоке "Геолокационные данные" корректно отображаются данные, относящиеся к текущему местоположению пользователя – **20 баллов**
  - карта с маской (форма карты отличная от прямоугольной) и маркером населённого пункта +10
  - координаты в градусах и минутах +10

### Advanced scope +80/+130

- Реализован поиск. Если в поиске вводится корректный запрос, по которому каждый из использованных API возвращает результат. Все данные на странице, в том числе дата и время, обновляются в соответствии с указанным в поиске населённым пунктом – **50 баллов**
  - поиск работает как при нажатии на клавишу Enter в поле поиска, так и при клике на кнопку Поиск +5
  - поиск корректно работает для разных населённых пунктов - больших и маленьких, столиц и посёлков +10
  - при вводе в поле поиска некорректных запросов, по которому API возвращает ошибку, приложение не ломается, выводится уведомление об ошибке. Возникающие ошибки в работе с API (прерывание соединения в ходе запроса, возвращаемые ошибки от API типа 4xx, 5xx) также обрабатываются клиентом и выводятся в область уведомления об ошибке +10
  - дата и время указываются для того часового пояса, в котором находится указанный в поле поиска населённый пункт +10
  - если у координаты есть знак минус, он тоже выводится, или возле координаты выводится буква, обозначающая широту (северная (N), южная (S)) и долготу (восточная (E), западная (W)) +5
  - одновременное обновление всех элементов страницы при вводе нового населенного пункта после получения успешного ответа по каждому из запросов (название по локации приходит быстро, а погода, иконки ее и т.п. - медленно). В случае возникновения ошибки по одному из запросов данные не обновляются +10
- При обновлении страницы или клике на кнопку для переключения фонового изображения меняется фоновое изображение – **20 баллов**
  - фоновое изображение генерируется с учётом поры года и времени суток указанного в поле поиска населённого пункта (по желанию можно добавлять и другие параметры поиска). Если возникла ошибка в ходе получения картинки, использовать любое стандартное фоновое изображение. Так как API для картинок не всегда возвращает правильный результат, данные о параметрах запроса фонового изображения для удобства в ходе проверки ментором или в процессе кросс чека выведите в консоль +10
  - плавная смена фонового изображения, изображение сначала загружается и только потом меняется, у изображения есть полупрозрачный оверлей или используется другой способ, обеспечивающий чёткость и контрастность надписей +10
- Переключение единиц измерения температуры – **10 баллов**
  - при смене шкалы отображения температур происходит пересчёт температур в соответствии с выбранной шкалой и меняется отображение активной кнопки, позволяющей определить, какая шкала сейчас активна. При перезагрузке страницы сохраняется выбранная пользователем шкала отображения температур +10
- Выполнены требования к коду – **30 баллов** (оценивает только ментор)
  - js код разбит на модули +10
  - используется webpack +10
  - используются editorconfig, eslint, eslint-config-airbnb-base, babel +10
- Реализованы юнит-тесты, использующие различные [методы jest](https://jestjs.io/docs/ru/expect) – 2 балла за каждую покрытую функию/метод, но не больше **20 баллов** (процент покрытия каждой функции/метода не учитывается) (оценивает только ментор)

### Hacker scope +50

- Перевод текста страницы (en/ru/be) – **30 баллов**
  - переводится весь текст страницы. Не является ошибкой отсутствие перевода карты +10
  - название населённого пункта и страны всегда отображается на выбранном языке +10
  - перевод на текущий выбранный язык названий дней недели и месяцев +5
  - при перезагрузке страницы сохраняется выбранный пользователем язык +5
- Бонусные баллы за качество приложения – **20 баллов**
  - оригинальный интересный качественный дизайн приложения, иконки погоды и кнопки анимированы, для анимации используются ключевые кадры или svg-анимация +10
  - продуман и реализован не предусмотренный заданием дополнительный функционал +10

### Штрафные баллы

- используются ключи доступа к API указанные в задании, а не свои личные – **10 баллов**
- меньше 5 коммитов, ошибки в названиях коммитов, ошибки в pull request - **10 баллов**
- присутствуют ошибки в консоли, связанные с исполняемым кодом (ошибки типа favicon.ico: Failed to load resource: the server responded with a status of 404 или ошибки, связанные с запросами к API, не учитываются) или предупреждения eslint-config-airbnb-base: **-15 баллов**

### Ключевые навыки

- работа с API
- получение данных при помощи асинхронных запросов
- дата и время
