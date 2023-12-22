// ООП
//ключове слово this

// function foo() {
//     //const this = window;
//     console.log("foo ->", this);
// }

// foo();

// =========================================================

// function foo() {
//     console.log(this);
// }

// const cat1 = {
//     name: "Marsic",
//     showThis: foo,
// };

// const cat2 = {
//     name: "Varsic",
//     showThis: foo,
// };

// const cat3 = {
//     name: "Barsic",
//     showThis: foo,
// };

// cat3.showThis();

// =====================================================


// function drive () {
//     console.log(this);
//     // console.log(this.age);
// }

// const obj1 = {
// name: "Vasia",
// age: 20,
// drive: drive,
// };

// const obj2 = {
//     name: "Petia",
//     age: 22,
//     drive: drive,
//     };

// obj1.drive();
// obj2.drive();

// =========================================


// function foo(callback) {
//     callback();
// }

// function myCallback() {
//     console.log(this);
// }

// foo(myCallback); // undefined & window

// ===============================================

// function foo(callback) {
//     const obj = {
//         name: "Volodka",
//         test: callback,
//     };

//     obj.test();
// }

// function myCallback() {
//     console.log(this);
// }

// foo(myCallback);

// ===============================================

                        // metod
            //   call  apply  bind  
            
// const user = {
//     name:"Boris",
//     drive() {
//         // console.log(this);
//         console.log(this.name);
//     },
// };

// const user1 = {
//     name:"Katia",
   
// };

// user.drive.call(user1); // передає на 1 раз ключове слово і повертає 
// user.drive();
// user.drive.call(user1);

// ====================================================

// function foo(x,y) {
//     console.log(this, x + y);
// }

// const user = {
//     name: "Max",
// };

// foo.call(user, 10,20)

// ==============================================

// function foo() {
//     console.log(this);
// }

// const user1 = {
//     name: "Vasia",
// };

// const user2 = {
//     name: "Karl",
// };

// const copy = foo.bind(user1);
// // bind назавжди буде належати юзеру1 слово зис
// copy.call(user2);

// ==================================================
// Що таке замикання

// const a = 10;

// function foo() {
// console.log(a);
// }

// foo(a);

// ====================================================

// function foo() {
//     const x = 10;
//     const y = 20;
//     debugger;
//     const arr = () => {
//         console.log(x + y);
//     };

//     arr();
// }

// foo();//30

// =====================================================


// function foo() {
//     const x = 10;
//     const y = 20;
//     const q = 30;
    
//     const arr = () => {
//         debugger;
//         const x = 50;
//         console.log(x + y);
//     };

//     arr();
// }

// foo();//70

// ==================================================

// function getCalc(name) {
//     function calc (x,y) {
//         console.log(name, x + y);
//     }

//     return calc;
// }

// const calc1 = getCalc("Volodka");

// calc1(20,50);
// calc1(20,5);
// calc1(2,50);

// =============================================

// function getCalc(name) {
//     function calc (x,y) {
//         console.log(name, x + y);
//     }

//     return calc;
// }

// const calc1 = getCalc("Volodka");
// const calc2 = getCalc("Roman");
// const calc3 = getCalc("Mila");

// calc1(20,50);
// calc1(20,500);

// calc2(20,30);
// calc2(200,30);
// calc2(20,300);

// calc3(35,40);
// calc3(305,40);
// calc3(35,400);

// ================================================

// const user1 = {
//     name: "Antoha",
// };
// const user2 = {
//     name: "Antonina",
// };
// const user3 = {
//     name: "Vova",
// };

// function foo() {
//     console.log(this);

//     const arrow = () => {
//         console.log(this);
//     }

// return arrow;
// }

// const arrow1 = foo.call(user2);
// const arrow2 = foo.call(user3);

// arrow2();

// ==============================================

//                  [[prototip]]

// const x = 10;
// const y = true;
// const q = 20;

// console.log(x.toString());
// console.log(y.toString());

// ================================

// const objA = {
//     x: 10,
//     y: 20,
// };

// const objB = {
//     t1: 40,
//     t2: 50,
//     __proto__: objA,
// };

// console.log(objB);
// console.log(objB.x);

// for in іде по прототипах до значення null

// const objX = {
//     x1: 10,
//     x2: 20,
// };

// const objY = Object.create(objX);

// console.log(objY);
// console.log(objY.x1);

// =====================================================

// тема 6 урок 2

// =============================
// робити так

// const user1 = {
//     name: "Boris",
//     showName() {
//         console.log(this.name);
//     },
// getName1() {
//     return this.name;
// },
// };

// ======================================
// а так не робити

// const userName1 = "Boris";
// const userName2 = "Max";
// const userName3 = "Vova";

// function getName1(){
//     return userName3;
// }

// function getName2(){
//     return userName2;
// }

// function getName3(){
//     return userName3;
// }

// function showName1(){
//     console.log(userName1);
// }

// function showName2(){
//     console.log(userName2);
// }

// function showName3(){
//     console.log(userName3);
// }

// ==========================================

//класс це інструкція  по якій робиться  екземпляр

// ==================================

// class User {
//     name = "Default";
//     age = 20;

// }

// const user1 = new User();
// const user2 = new User();
// const user3 = new User();
// const user4 = new User();
// const user5 = new User();

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// ===================================================

// class User {
//     name = "Default";
//     age = 20;

//     constructor() {
//         console.log("Hello");
//     }
// }

// const user1 = new User();

// console.log(user1);

// =============================================

// class Car {
//     constructor(color, model, price) {
//         this.color = color;
//         this.model = model;
//         this.price = price;
//         this.maxSpeed = 250;
//     }
// }

// const car1 = new Car("red","model S", 30000);
// const car2 = new Car("blue", "model S", 35000);
// const car3 = new Car("green", "Plaid", 55000);

// console.log(car1);
// console.log(car2);
// console.log(car3);

// ======================================================

// class Car {
//     constructor(color, model, price) {
//         this.color = color;
//         this.model = model;
//         this.price = price;
//         this.maxSpeed = 250;
//     }

//     showInfo() {
//         const info = `----------
//         Model: ${this.model}
//         Price: ${this.price}
//         Color: ${this.color}
//         Max Speed: ${this.maxSpeed}
//         ----------`;

//         console.log(info);
//     }

//     changeSpeed(newSpeed) {
//         if(newSpeed <= 250) this.maxSpeed = newSpeed;
//     }
// }

// const car1 = new Car("red","model S", 30000);
// const car2 = new Car("blue", "model S", 35000);
// const car3 = new Car("green", "Plaid", 55000);

// car1.changeSpeed(150);

// console.log(car1);
// console.log(car2);
// console.log(car3);

// //car1.showInfo();
// //car2.showInfo();
// //car3.showInfo();

// ===================================================

// class Car {
// #maxSpeed;// приватна властивість

// constructor(color, model, price) {
//             this.color = color;
//             this.model = model;
//             this.price = price;
//             this.#maxSpeed = 250;
//         }
    
//         showInfo() {
//             const info = `----------
//             Model: ${this.model}
//             Price: ${this.price}
//             Color: ${this.color}
//             Max Speed: ${this.#maxSpeed}
//             ----------`;
    
//             console.log(info);
//         }
    
//         // sedSpeed(newSpeed) {
//         //     if(newSpeed <= 250) this.#maxSpeed = newSpeed;
//         // }

//         // getSpeed() {
//         //     return this.#maxSpeed;
//         // }
// сетер для приватної властивості
//         set maxSpeed(newSpeed){
//             console.log("Set new Speed");
//             this.#maxSpeed = newSpeed;
//         }
// гетер  для приватної властивості
//         get maxSpeed() {
//             return `Max Speed: ${this.#maxSpeed}`;
//         }

//get #info ()
// get info () {
//                 const info = `----------
//                 Model: ${this.model}
//                 Price: ${this.price}
//                 Color: ${this.color}
//                 Max Speed: ${this.#maxSpeed}
//                 ----------`;
        
//                 console.log(info);
//             }


//     }
    
//     const car1 = new Car("red","model S", 30000);
//     const car2 = new Car("blue", "model S", 35000);
//     const car3 = new Car("green", "Plaid", 55000);
    
//     car1.maxSpeed = 200;
//     console.log(car1.maxSpeed);

//     console.log(car2);
//     console.log(car3);


// =====================================================

// Статичні  методи і властивості

// ===================================================

// class User {
//     static country = "Ukraine";

//     constructor(userName, userAge){
//         this.name = userName;
//         this.age = userAge;
//     }

//     showInfo(){
//         console.log("----------");
//         console.log("Name:", this.name);
//         console.log("Age", this.age);
//         console.log("Country", User.country);
//         console.log("----------");
//     }
// }

// const user1 = new User("Max", 25)
// const user2 = new User("Yaroslav", 22)

// console.log(user1);
// console.log(user2);

// ======================================
// Наслідування класів
// 1 - 2 максимум рівня наслідування
// ============================

// Деструктуризація

// class User { // Деструктиризація
//     constructor({name, age, phoneNumber, gender}){
//         // this.name = obj.name;
//         // this.age = obj.age;
//         // this.gender = obj.gender;
//         // this.isStudent = obj.isStudent;
//         // this.phoneNumber = obj.phoneNumber;
//     }
// }

// const data = {
// name: "Max",
// age: 12,
// phoneNumber: "850",
// gender: "Male"
// };

// const user = new User(data);

// console.log(data);



// class User { // Обєкт Параметр
//     constructor(obj){
//         this.name = obj.name;
//         this.age = obj.age;
//         this.gender = obj.gender;
//         this.isStudent = obj.isStudent;
//         this.phoneNumber = obj.phoneNumber;
//     }
// }

// const data = {
// name: "Max",
// age: 12,
// phoneNumber: "850",
// gender: "Male",
// isStudent: "Student",
// };

// const user = new User(data);

// console.log(user);

// ===============================================































































