// Task 1:
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

// var a = +prompt("Ведіть число");

// if(a===0){
//     alert("<h1>Ваше значення = 0</h1>");
// }
// else {
//     alert("<h1>не = 0</h1>");
// };
// if(a>0){
//     alert("<h1>Ваше значення > 1</h1>");
// }
// else {
//     alert("<h1>не > 0</h1>");
// };
// if(a<0){
//     alert("<h1>Ваше значення < 0</h1>");
// }
// else {
//     alert("<h1>не < 0</h1>");
// };

var a = +prompt("Ведіть число");
if(a===0){
    alert("0");
}
else if(a<0){
    alert("-1");
}
else if(a>0){
    alert("1");
}
else{
    alert("Значення пусте або не число")
};