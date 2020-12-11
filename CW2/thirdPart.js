// Task 3 (4):
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90. 
// Значение вводит пользователь

var age = +prompt("Enter a number from 14 to 90 inclusive:")
if (14<=age && age<=90){
    alert('The number is between 14 and 90 inclusive');
}
else{
    alert('The number entered is not between 14 and 90 inclusive')
};