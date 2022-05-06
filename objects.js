// Свойства объектов.

let userInfo = {     // объект
  name: "Artem",  // под ключом "name" хранится значение "Artem"
  age: 25,       // под ключом "age" хранится значение 25
};

console.log(userInfo); // {name: 'Artem', age: 25}
console.log(userInfo.name); // Artem

// Для удаления свойства мы можем использовать оператор delete:

delete userInfo.age;

// Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:

let userInfo = {    
  name: "Artem",  
  age: 25,
  "likes javascript": true, // имя свойства из нескольких слов должно быть в кавычках
};

//Обратите внимание, что строка в квадратных скобках заключена в кавычки (подойдёт любой тип кавычек).
console.log(userInfo["likes javascript"]); // true

// Цикл «for…in»

//for (key in object) {
  // тело цикла выполняется для каждого свойства объекта
}

// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  Dima: 100,
  Misha: 160,
  Kate: 130
}

//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

//Решение

let salaries = {
  Dima: 100,
  Misha: 160,
  Kate: 130
}
let sum = 0;
for (let key in salaries) {
  sum += salaries[key]; // Взяли значения з/п для каждого из пользователей и просуммировали их
}

console.log(sum); // 390
