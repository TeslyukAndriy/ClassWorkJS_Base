// 8. Создайте список покупок в переменной myList. Список должен быть многомерным массивом, содержащим несколько подмассивов.

// Первый элемент в каждом подмассиве должен содержать строку с именем элемента. Второй элемент должен быть числом, представляющим цену, т.е.

// [«Шоколадная плитка», 15]

// В списке должно быть не менее 5 подмассивов.

// Выведите в консоль список всех покупок без цен

// Используйте методы добавления удаления элементов из массива



var myList = [];

myList.push([«Шоколадная плитка», 15]);
myList.push([«йогурт», 9]);
myList.push([«мандарин», 13]);
myList.push([«банан», 8]);
myList.push([«виноград», 20]);

console.log(myList)

for (var i=0 < myList.length; i++){
    console.log(myList[i][0]);
}