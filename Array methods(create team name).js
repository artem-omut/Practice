// - Создание название команды по первым буквам имен участников.
// [' Matt', 'Ann', 'Dmitry', 'Max'] => 'ADMM'
// Обратить внимание, что первое имя написано с пробелом!
// Ответ должен быть в ввиде строки, отсортирован по алфавиту и выводится с больших букв.

// Решение

let arr = [' Matt', 'Ann', 'Dmitry', 'Max'];

let result = arr.map(function (item, index, array) {
	return item.trim()[0];
});

//преобразовываем массив и возвращаем новое значение вместо элемента 
//(убрали пробел с помощью метода trim и взяли первые буквы)

let team = result.sort();
// метод сортирует содержимое result по алфавиту

let srt = team.join('');

// объединить массив в строку через без каких-либо знаков

console.log(srt);
