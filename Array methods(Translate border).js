"use strict";

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// 1. camelize("background-color") == 'backgroundColor';
// 2. camelize("list-style-image") == 'listStyleImage';
// 3. camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// Решение:

function camelize(str){
let arr = str.split('-');
  //Разбивает 'my-short-string' на массив ['my', 'short', 'string'] и убирает знак '-' ;
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
    // превращает ['my', 'short', 'string'] в ['my', 'Short', 'String']
  }
   return arr.join('');
  //Возвращает слова без пробелов ;
}

alert( camelize("background-color") ); // backgroundColor
alert( camelize("list-style-image") ); // listStyleImage
alert( camelize("-webkit-transition") ); // WebkitTransitionы

