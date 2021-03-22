// js_code_mu_101-145

// Время

// 131 Работа с объектом Date в JavaScript

// let date = new Date();
// console.log(date.getFullYear()); // год
// console.log(date.getMonth());    // месяц
// console.log(date.getDate());     // день
// console.log(date.getHours());    // часы
// console.log(date.getMinutes());  // минуты
// console.log(date.getSeconds());  // секунды

// Задача 131.1 -  131.3
// Выведите на экран текущий день.
// let date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

// 132 Форматирование даты в JavaScript

// function addZero(num) {
//   if (num >= 0 && num <= 9) {
//     return "0" + num;
//   } else {
//     return num;
//   }
// }
// let date = new Date();
// console.log(
//   addZero(date.getFullYear()) +
//     "-" +
//     addZero(date.getMonth() + 1) +
//     "-" +
//     addZero(date.getDate())
// );

// Задача 132.1
// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Используйте
// для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости

// let date = new Date();
// function addZero(num) {
//   if (num >= 0 && num <= 9) {
//     return "0" + num;
//   } else {
//     return num;
//   }
// }
// console.log(
//   addZero(date.getHours()) +
//     ":" +
//     addZero(date.getMinutes()) +
//     ":" +
//     addZero(date.getSeconds()) +
//     " " +
//     addZero(date.getDate()) +
//     "." +
//     addZero(date.getMonth()) +
//     "." +
//     date.getFullYear()
// );

// Задача 132.2
// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.
// let str = "2025-12-31";
// let result = str.split("-").reverse().join("/");
// console.log(result);

// 133 Получения дня недели на JavaScript

// Задача 133.1
// Выведите на экран номер текущего дня недели.
// let date = new Date();
// console.log(date.getDay());

// Задача 133.2
// Определите, является ли текущий день недели выходным или рабочим днем.
// let date = new Date();
// let day = date.getDay();
// const currentDay = () => {
//   if (day === 0 || day === 6) {
//     console.log(day + " Выходной");
//   } else {
//     console.log(day + " Рабочий");
//   }
// };
// currentDay(date.getDay());

// Задача 133.3
// Определите сколько дней осталось до ближайшего воскресенья.
// let date = new Date();
// let day = date.getDay();
// let weekend = 5 - day;
// if (weekend === 0 || weekend === -1) {
//   console.log("выходные");
// }
// console.log("Осталось " + weekend + " Дней");

// 134 Вывод частей даты словом в JavaScript

// let date = new Date();
// let day = date.getDay();
// let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// console.log(days[day]);

// Задача 134.1
// Пусть дан следующий массив:
// Выведите с помощью этого массива название текущего месяца.
// let months = [
//   "янв",
//   "фев",
//   "мар",
//   "апр",
//   "май",
//   "июн",
//   "июл",
//   "авг",
//   "сен",
//   "окт",
//   "ноя",
//   "дек",
// ];
// let date = new Date();
// let day = date.getMonth();
// console.log(months[day]);

// 135 Установка времени в объекте Date в JavaScript

// let date = new Date(2025, 10, 5); // установим 5 ноября 2025 года
// let day = date.getDay();
// let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// console.log(days[day]);

// Задача 135.1
// Узнайте, какой день недели был в ваш день рождения.
// let date = new Date(1998, 11, 26);
// let day = date.getDay();
// let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// console.log(days[day]);

// 136 Работа с getTime

// let date = new Date();
// console.log(date.getTime());

// Задача 136.1
// Выведите на экран timestamp, соответствующий дате 1 января 2025 года.
// let date = new Date(2025, 0, 1);
// console.log(date.getTime());

// Задача 136.2
// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
// let now = new Date(2000, 1, 10);
// let date = new Date(1988, 2, 1);
// let diff = now.getTime() - date.getTime();
// console.log(diff / (1000 * 60 * 60 * 24));

// 137 Разница между объектами с датой в JavaScript

// let now  = new Date();
// let date = new Date(2015, 4, 25, 12, 59, 59);
// let diff = now - date; // вычитаем два объекта с датами друг от друга
// console.log(diff);     // увидим разницу в миллисекундах

// Задача 137.1 - 137.4
// Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.
// let now = new Date(2010, 1, 15);
// let date = new Date(2000, 8, 1);
// let diff = now - date; // вычитаем два объекта с датами друг от друга
// console.log(diff); // увидим разницу в миллисекундах
// console.log(diff / (1000 * 60 * 60 * 24)); // увидим разницу в днях
// console.log(diff / (1000 * 60 * 60 * 24 * 30)); // увидим разницу в месяцах
// console.log(diff / (1000 * 60 * 60 * 24 * 30 * 12)); // увидим разницу в годах

// 140 Проверка корректности даты в JavaScript

// Задача 140.1
// Сделайте функцию checkDate, которая будет выполнять описанную проверку.
// Пусть функция возвращает true, если дата корректна и false, если нет.
// Пример работы этой функции для 31 января и 32 января:
// console.log(checkDate(2025, 0, 31)); // выведет true
// console.log(checkDate(2025, 0, 32)); // выведет false
// let year = 2025;
// let month = 0;
// let day = 1;
// let date = new Date(year, month, day);
// let checkDate = () => {
//   if (
//     date.getFullYear() === year &&
//     date.getMonth() === month &&
//     date.getDate() === day
//   ) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };
// checkDate(date);

// 143 Строковое сравнение дат на JavaScript

// Задача 143.1
// Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
// let date1 = "2020-11-31";
// let date2 = "2020-12-01";
// console.log(date1 > date2); // выведет true

// Задача 143.2
// Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
// let date1 = "09-21";
// let date2 = "09-23";
// console.log(date1 > date2);

// 144 Сравнение объектов с датами в JavaScript
