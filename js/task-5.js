// Тема 5 урок 1

// function helloMessage() {
//     console.log("Hello");
//     }

// function foo2(callback) {
//     callback();

//     console.log(callback === helloMessage);
// };

// foo2(helloMessage);

// =========================================================


// function fetchUser() {
//     const dataBaseUser = {
//         name: "ivan",
//         age: 26,
//     };
    
//     }

// ====================================================================

// Стрілочна функція

// function fan(callback) {
//     const resalt = callback();
//     console.log(resalt);
// }

// fan(function)

// ======================================================

// function add(a, b, c) {
//     return a + b + c;
// }

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));


// ==================================================================
// ФорИчь

// const numbers = [5,10,15,20,25];
// let total = 0;

// // numbers.forEach((number, index, array) => {
// //     console.log(number);
// //     console.log(index);
// //     console.log("_____");
// // });

// numbers.forEach(number => total += number);
// console.log(total);

// ===================================================
// Мап()


//   const getUsersWithAge = (users, minAge, maxAge) => {
//     const ages = users.filter(({age}) => age > minAge && age < maxAge);
//     console.log(ages);
//     return ages;
//   };






//   const LOW_SCORE = 50;
//   const HIGH_SCORE = 80;
//   const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
//   ];
  
//   const best = students.filter(student => student.score >= HIGH_SCORE);
//   console.log(best); // Масив об'єктів з іменами Mango і Kiwi
  
//   const worst = students.filter(student => student.score < LOW_SCORE);
//   console.log(worst); // Масив з одним об'єктом Ajax
  
//   // У колбек-функції зручно деструктуризувати властивості об'єкта
//   const average = students.filter(
//     ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
//   );
//   console.log(average);

// ===========================================================================

// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
//   ];
  
//   console.log(colorPickerOptions.find((option) => option.label === "blue")); // { label: "blue", color: "#2196F3" }
//   console.log(colorPickerOptions.find((option) => option.label === "pink") );// { label: "pink", color: "#E91E63" }
//   console.log(colorPickerOptions.find((option) => option.label === "white")); // undefined

// ==============================================================================
//   const getUserWithEmail = (users, email) => {
//     const  user = users.find((user) => user.email == email);
//      return user;
//    };
// =================================================================================
// const isAnyUserActive = (users) => {
//     const userIsActive = users.some(user => user.isActive);
//     return userIsActive;
//   };
// ==============================================================================

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший від нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший від нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// =========================================================================

// const total = [2, 7, 3].reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 0);
  
//   console.log(total); // 12

// ==============================================================

//   const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
  
//   const totalPlayTime = playtimes.reduce((playtimes,players) => {
//     return playtimes + players;
//   },0);
  
//   const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(`totalPlayTime:${totalPlayTime} averagePlayTime:${averagePlayTime}`);

// ====================================================================================

// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
//   ];
  
//   // Назва акумулятора може бути довільною, це просто параметр функції
//   const totalScore = students.reduce((total, student) => {
//     return total + student.score;
//   }, 0);
  
//   const averageScore = totalScore / students.length;

//   console.log(totalScore, averageScore);
// // ===================================================================================

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
  
//   const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//     return acc + (player.playtime / player.gamesPlayed)
//   }, 0);

// console.log(totalAveragePlaytimePerGame);

// ============================================================
    // const users = [
    //     {
    //       name: "Moore Hensley",
    //       email: "moorehensley@indexia.com",
    //       eyeColor: "blue",
    //       friends: ["Sharron Pace"],
    //       isActive: false,
    //       balance: 2811,
    //       gender: "male"
    //     },
    //     {
    //       name: "Sharlene Bush",
    //       email: "sharlenebush@tubesys.com",
    //       eyeColor: "blue",
    //       friends: ["Briana Decker", "Sharron Pace"],
    //       isActive: true,
    //       balance: 3821,
    //       gender: "female"
    //     },
    //     {
    //       name: "Ross Vazquez",
    //       email: "rossvazquez@xinware.com",
    //       eyeColor: "green",
    //       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    //       isActive: false,
    //       balance: 3793,
    //       gender: "male"
    //     },
    //     {
    //       name: "Elma Head",
    //       email: "elmahead@omatom.com",
    //       eyeColor: "green",
    //       friends: ["Goldie Gentry", "Aisha Tran"],
    //       isActive: true,
    //       balance: 2278,
    //       gender: "female"
    //     },
    //     {
    //       name: "Carey Barr",
    //       email: "careybarr@nurali.com",
    //       eyeColor: "blue",
    //       friends: ["Jordan Sampson", "Eddie Strong"],
    //       isActive: true,
    //       balance: 3951,
    //       gender: "male"
    //     },
    //     {
    //       name: "Blackburn Dotson",
    //       email: "blackburndotson@furnigeer.com",
    //       eyeColor: "brown",
    //       friends: ["Jacklyn Lucas", "Linda Chapman"],
    //       isActive: false,
    //       balance: 1498,
    //       gender: "male"
    //     },
    //     {
    //       name: "Sheree Anthony",
    //       email: "shereeanthony@kog.com",
    //       eyeColor: "brown",
    //       friends: ["Goldie Gentry", "Briana Decker"],
    //       isActive: true,
    //       balance: 2764,
    //       gender: "female"
    //     }
    //   ];

    //   const calculateTotalBalance = (users) => users.reduce((acc, user) => {
    //     return acc + user.balance;
    //   }, 0);
      

// ======================================================================
    // тема 5 урок 2 
    
    // =======================================================

// Колбек функція

//     function myDay(callback){
//       console.log("Застелити ліжко");
//       console.log("Почистити зуби");
//       console.log("Сніданок");
//       console.log("Школа");

// callback();

//       console.log("Зі школи");
//       console.log("Вечеря");
//       console.log("Зуби");
//     }


// function goToMusicSchool(){
//   console.log("Піти до Музичної Школи");
// }

// function goToStore(){
//   console.log("Піти у магазин");
// }


// function goToDanceSchool(){
//   console.log("Піти у Школу Танців");
// }


// myDay(goToMusicSchool);

// myDay(goToDanceSchool);

// myDay(goToStore);

// =========================================================


// інлайн і неінлайн

// function foo(x) {
//   console.log(x);
// }

// const myValue = 10;

// foo(myValue)

// ============================================

// function foo(callback) {
//   callback();
// }

// foo(function () {}, 10, 20);

// =======================================================
// ========
// Map() функція вищого порядку
// ===============
// перебирає масив і повертає новий масив

// const arr = [1,2,3,-5,6,-1,7,-6]

// function callback(item, index, array) {
//   return Math.abs(item);
// }

// // const newArr = arr.map(callback)
// // const newArr = arr.map(() => {})
// const newArr = arr.map((num) => num * -1)

// console.log(newArr);

// =======================================================

// filter() повертає тру або фолс і повертає у новий масив

// const numbers = [5,10,15,20,25]

// const filteredNumbers = numbers
// .filter((item, index, array) => {
//   return true;
// });

// console.log(filteredNumbers);

// const numbers = [5,10,15,20,25]

// const filteredNumbers = numbers
// .filter((item) => item % 2 === 0);

// console.log(filteredNumbers);

// =============================================================

// const arr = [1,[2,[3],4],5,[6,7],8]

// // const resalt = arr.flat(1);// прибрати 1 рівень і вирівняти масив з масивів
// //не змінює елементи
// const resalt = arr.flat(Infinity);
// console.log(resalt);


// const arr = [1,[2,[3],4],5,[6,7],8];

// const newArr = arr.flatMap((item) => {});
// // прибирає 1 рвень вкладеності
// console.log(newArr);

// const cars = [
//   {
//     model: "Honda",
//     owners: ["Dima","Vova"],
//   },
//   {
//     model: "Tesla",
//     owners: ["Andre","Roma","Ket"],
//   },
//   {
//     model: "Volvo",
//     owners: ["Alex"],
//   },
//   {
//     model: "Nissan",
//     owners: ["Lina","Natali"],
//   },
// ];

// const owners = cars.flatMap((car) => car.owners);
// console.log(owners);

// =================================================================

// find() // Шукає і повертає 1 елемент
//повертає перший обэкт( 1 елемент) який підійшов під умову
// const numbers = [5,10,15,20,25];

// const number = numbers.find((item, index, array) => item >= 7);

// console.log(number);

// ==================================================================

// every // повертає фолс якщо буде хочаб 1 фолс
// const arr = [1,2,3,4,5,6,7,8];
// const arrEven = arr.every((item) => item % 2 === 0);
// console.log(arrEven);

// методи

// some // повертає тру як що задовольняє хоча б 1 елемент масиву
// const arr = [1,2,3,4,5,6,7,8];
// const arrEven = arr.some((item) => item % 2 === 0);
// console.log(arrEven);

// ======================================================================

// reduce()
//
// const arr = [2,5,8,1];

// const result = arr.reduce((acc, item, idx, arr)=>{
//   // console.log("Hello");
//   return acc + item;
// }, 0);

// console.log(result);


// const arr = [2,5,8,1];

// const result = arr.reduce((acc, item, idx, arr)=>{
//   if(item % 2 === 0){
//     acc.push(item);
//   }
//   return acc;
// }, []);

// console.log(result);

// =========================================================
// sort()  // 
// toSorted()//відсортована копія
// сортує числа і рядки 

// const arr = [1,2,3,5,7,9,10];

// const result = arr.toSorted((right, left) => {
//     console.log(left, right);
//   return left - right;

// });

// console.log(result);


// ===============================

// localeCompare()

// const str1 = "B";
// const str2 = "A";

// console.log(str1.localeCompare(str2));


















