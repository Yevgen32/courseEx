// ДЗ
// Разобраться со всплытием
// написать рекурсивную функцию, которая выводит все значения массива на экран (ниже описание)
// Напишите модуль, который экспортирует функцию с именем `consoleRec`.
// Функция должна **рекурсивно** выводить элементы массива на экран.
// Запрещено использовать циклы и методы для работы с массивами.
// Функция должна принимать два аргумента: массив
// и… что-то еще.
// Что именно - остается на ваше усмотрение.
// Пример вызова:
//
// consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], ???);
// должна вывести на экран:
// я
// умею
// писать
// рекурсивные
// функции

let i = 0;
export default function consoleRec (arr) {
	console.log(arr[i]);
	i++;
	if (arr.length > i){
		consoleRec(arr);
	}
}



// function consoleRec() {
// 	for (let i = 0; i<arr.length; i++){
// 		console.log(arr[i]);
// 	}
// }
// consoleRec(arr);