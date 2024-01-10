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
// Задача 1
// ==================

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ===========================================================================================
// Задача 2
// ============================================

// class Storage {
//     #items;

//     constructor(items) {
//         this.#items = items;
//     }

//     getItems() {
//     return this.#items;
//     }
//     addItem(newItem) {
//       this.#items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//      const itemIndex = this.#items.indexOf(itemToRemove);
//      if(itemIndex !== -1) {
//       this.#items.splice(itemIndex, 1);
//      }
     
//     }

// };

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// ===========================
// Задача 3 
// ===============================

// class StringBuilder {
//     #value;
//     constructor(value) {
//         this.#value = value;
//     }

//     getValue() {
//         return this.#value;
//     }

//     padStart(str) {
//         this.#value = `${str}${this.#value}`;
//     }

//     padEnd(str) {
//         this.#value = `${this.#value}${str}`;
//     }

//     padBoth(str) {
//         this.#value = `${str}${this.#value}${str}`;
//     }
// };

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// const heading = document.createElement("h1");
// headding.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>

// const image = document.createElement("img");
// image.src = "<https://picsum.photos/id/11/320/240>";
// image.alt = "Nature";
// console.log(image); // <img src="<https://picsum.photos/id/11/320/240>" alt="Nature" />


const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");


const singleBtn = document.querySelector("#single");

const handleClick = () => {
  console.log("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================
const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);


const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference? 
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;













































