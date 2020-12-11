// Task 2:
// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.
// let message;
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

// Виконання Task 2:
// (login == 'Сотрудник') ? message = 'Привет':
// (login == 'Директор') ? message = 'Здравствуйте':
// (login == '') ? message = 'Нет логина':message = '';


// Виконання Task 2:
let login = prompt("Ким ви являєтесь(Директор,Сотрудник)")
let messege = (login == 'Сотрудник') ? 'Привет':
(login == 'Директор') ? 'Здравствуйте':
(login == '') ? 'Нет логина':'';

console.log(messege);

//Виконання Task 2 з оголошиними зміними:
// var login = +prompt("Ким ви являєтесь(Директор,Сотрудник)");

// var message = "Привет";
// var message1 = 'Здравствуйте';
// var message2 = 'Нет логина';
// var a = "Невірна відповідь";
// reply = (login == 1) ? message : 
// (login == 2) ? message1:
// (login == '') ? message2:a;

// console.log(reply);