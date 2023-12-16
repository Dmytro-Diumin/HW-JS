// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   let totalPrice = quantity * pricePerDroid;
//   if (totalPrice <= customerCredits) {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   } else {
//     return "Insufficient funds!";
//   }
// };
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!" 

// ===================================================================================================================

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return `${message.slice(0, maxLength,)}${"..."}`;
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// =================================================================================================================================

// function checkForSpam(message) {
//   const banWorld1 = "spam";
//   const banWorld2 = "sale";
//   const result1 = message.toLowerCase().includes(banWorld1);
//   const result2 = message.toLowerCase().includes(banWorld2);
//   const result = result1 || result2;
//   if (message == result) {
//     return result;
//   } else {
//     return result;
//   }
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
// ====================================================================================================================
// function getShippingCost(country) {
  
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//       default:
//         message = "Sorry, there is no delivery to your country";
//   }
//   return message;
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// =====================================================================================================================================
// function getShippingMessage (country, price, deliveryFee) {
//  let totalPrice = price + deliveryFee;
//     return `Shipping to ${country} will cost ${totalPrice} credits`;
// };
// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));


// function getElementWidth(content, padding, border) {
//     const totalWidth = Number.parseFloat(content) + Number.parseFloat(padding,) * 2 + Number.parseFloat(border) * 2;
//     return totalWidth;
//  };
//  console.log(getElementWidth("50px", "8px", "4px")); // 74
//  console.log(getElementWidth("60px", "12px", "8.5px")); // 101
//  console.log(getElementWidth("200px", "0px", "0px")); // 200

// =======================================================================================================================================

// let userName = prompt('Your name', "Anonum");
// let isBunWanted = confirm("Do you want the bun?");

// alert('Visitor: ' + userName);
// alert("Want bun" + isBunWanted);




// let n = 2;

// n = n * 5;
// n *= 5;
// n += 2;
// n -= 4;
// n /= 2;


// n *= (3 + 5);
// n *= 3 + 5;
// console.log(n);




// let count = 2;
// count--

// console.log('count =', count);

// ++count;
// count++;

// console.log('count =', count);




// let a, b;
// a > b;
// a < b;
// a >= b;
// a <= b;
// a == b;
// a === b;

// a != b;
// a !== b;

// let result = 5 > 4;

// console.log( 2 > 1);

// console.log('Я' > 'А');

// console.log("2" > 1 );

// Number('2') повертає 2  число
// String(2) повертає "2" рядок


    //   Кейси
// console.log(null === undefined);    false
// console.log(null == undefined);     true

// console.log(null > 0);    false
// console.log(null == 0);   false
// console.log(null >= 0);    true

// нестроге порівняння
// console.log('2' == 2); true

// строге порівняння
// console.log('2' === 2); false


//                Функція
// function showMessage() {
//     console.log("Hello, I'm function!");
// };

// showMessage();





// function showMessage() {
//    let message = "Hello, I'm function!";
//    console.log(message); викликає меседж
// };

// showMessage();

// console.log(message); не викликає меседж за функцією



// повертає меседж Хело Кейті
// let userName = "Daniel";

// function showMessage() {
//     userName = "Kate";

//    let message = "Hello, " + userName;

//    console.log(message); 
// };

// showMessage();



//    повертає меседж Хело Кейті
// let userName = "Daniel";

// function showMessage() {
//     let userName = "Kate";

//    let message = "Hello, " + userName;

//    console.log(message);

// };

// showMessage();




// let userName = "Daniel";

// function showMessage() {
//     let userName = "Kate";

//    let message = "Hello, " + userName;

//    console.log(message);

// };

// function goodbyeMessage() {
//     let message = "See you soon," + userName;

//     console.log(message);
// };

// showMessage();
// goodbyeMessage();





// function showMessage(from, text) {
//     console.log(from + ":" + text);
// };

// showMessage('Kate', 'Hello');
// showMessage('Daniel', 'Oh. Hello, Kate!');



//  працює тільки 1 ретурн (ретурн або так або так)
// function sumNumbers(a, b){
//     return +a + +b;       
//     return Number(a) + Number(b);  
// };

// let result = sumNumbers("1", -2);
// console.log('result', result);


// Function Declaration
// function showMessage(from, text = 'text not found') {
//     console.log(from + ":" + text);
// };

// showMessage('Kate', 'Hello');
// showMessage('Daniel', 'Oh. Hello, Kate!');
// showMessage('Kate');



// Function Expression
// let showMessage = function(from, text = 'text not found') {
//     console.log(from + ":" + text);
// };

// showMessage('Kate', 'Hello');
// showMessage('Daniel', 'Oh. Hello, Kate!');
// showMessage('Kate');


                        // Модуль 2 заняття 1

                            //  розгалуження

// інструкція if
// const age = 20;

// if (true) {
// console.log("Hello");
// }


// const age = 20;

// if (age >= 18) {
// console.log("Hi");
// } else {
//     console.log("Sorry bro")
// }


// const age = 20;
// const money = 100;

// if (age >= 18) {
// console.log("Hi");
// } else if (money >= 50) {
//     console.log("Ok, hello");
// } else {
//     console.log("Bye");
// }

// function security(age, money){
// if (age >= 18) {
//     console.log('Hello');
// } else if (money >= 50) {
//     console.log("Hi") 
//     } else {
//         console.log("Bye");
//     }
// }

// security(19,200);
// security(15,200);
// security(10,10);


// function security(age, money){
//     if (age >= 18) {
//         console.log('Hello');
//         return 'Vip';
//     } else if (money >= 50) {
//         console.log("Hi")
//         return "Standart"; 
//         } else {
//             console.log("Bye");
//             return null;
//         }
//     }
    
//     const ticket = security(18,200);
//     console.log(ticket);




// // Tернарний оператор

// let exp = 500;

// let myStatus;
// if (exp > 200) {
//     myStatus = "Top";
// } else {
//     myStatus = "Norm"
// }

// // Tернарний оператор
// let exp = 500;

// let myStatus = exp > 200 ? "Top" : "Norm";

// console.log(myStatus);




//                                              Scope  скоуп

// const a = 10;
// const b = 20;
// const c = 30;

// function foo () {
//     const a = 20;
//     console.log(a);
// }
// foo();
// console.log(a);


// const a = 10;
// const b = 20;
// const c = 30;

// function foo () {
//     const t = 20;
//     if (true) {
// const x = 30;
// console.log(a, t, x);
//     }
// }
// foo();

// Шукає від сина до батька значення





// const hours = 14;
// const minutes = 20;
// let timestring;

// if (minutes === 0) {
//     timestring = `${hours}г.`;
// } else {
//     timestring = `${hours}г. ${minutes}хв`;
// }
// console.log(timestring);


// const hours = 14;
// const minutes = 25;
// let timestring = minutes === 0 ? `${hours}г.` : `${hours}г. ${minutes}хв`;

// console.log(timestring);


// const hours = 14;
// const minutes = 26;
// let timestring = `${hours}г.`;

// if (minutes !== 0) {
// timestring += `${minutes}хв`;
// }

// console.log(timestring);




// const hours = 14;
// const minutes = 29;
// let timestring = `${hours}г.`;

// if (minutes !== 0) {
//     timestring += `${minutes}хв`;
// }

// console.log(timestring);



                //    switch                  Світч

// const username = "Mango";

// switch (username) {
// case "Poly":
//     console.log("1");
//     break;

// case "Mango":
//     console.log("2");
//     break;

// case "Apple":
//     console.log("3");
//     break;
// }




                                    // Оператори

// console.log(Boolean(true));   =  true
// console.log(Boolean(false));   =  false
// console.log(Boolean(NaN));   =  false
// console.log(Boolean(null));   =  false
// console.log(Boolean(undefined));   =  false
// console.log(Boolean(0));   =  false

// console.log(Boolean(3.14));   =  true
// console.log(Boolean(-10));   =  true
// console.log(Boolean(""));   =  false
// console.log(Boolean("0"));   =  true
// console.log(Boolean("hello"));   =  true
// console.log(Boolean("false"));   =  true


// console.log(5 && 4);       повертає ліву частину завжди як що там значення фолс
// console.log(5 && "Mango");    в іньшому випадку повертає праву частину
// використовується в умові if () {}



// console.log(false || 5);   5
// console.log(false || null);  null
// використовується в умові if () {}


// const userName = prompt("Enter Your Name");

// const message = userName || "Anonym";     поверне перше якщо щось ввели і друге як що нічого ненаписали

// console.log(message);


// const result = prompt("message", "Test");




// повертає завжди праву частину якщо там зліва значення (undefined або null)
// в іньшому випадку ліву частину
// const result = undefined ?? "Hello";


// console.log(!5); false
// console.log(!false); true

// console.log(null || (2 && 3) || 4);  = 3

// true = 1 (true завжди повертає 1)
// false = 0 (false завжди повертає 0)
//  && - *  (&& завжди множить)
//  || - +  (|| завжди плюсує) оператор АБО




                    //    Модуль 2 заняття 2

// метод слайс обрізає рядочок
// const username = "Jacob Mercer";
// // const result = username.slice(0, 5); 
// // const result = username.slice(0, username.length -1);
// // const result = username.slice(0, -1);
// const result = username.slice(-4, -1);
//   console.log(result);



// =====================================================
// toLowerCase/toUpperCase 

// const name = "Dmitro";

// const result1 = username.toUpperCase();
// const result2 = username.toLowerCase();

// console.log(result1);
// console.log(result2);
// console.log(username);

// ===================================================
// метод інклюд
// const banWorld = 'spam';
// const text = "Hello world its spam";

// const result = text.toLowerCase().includes(banWorlds); в дужках метода ловер кейс нічого неможна писати
// const result = text.toLowerCase().includes(banWorlds, 5); шукає з 5 індексу "Hello world its spam"
// console.log(result);

// =======================================================

// const phone = prompt('Enter you phoneNumber');

// if (phone.startsWith("+380")) {
//     console.log("Hello");
// } else {
//     console.log("///");
// }


// const str = "Diums.js";
// console.log(str.endsWith(".js"));

// =========================================


// const str = "Some Words end hi";
// const index = str.indexOf(" ");
// const firstIndex = str.indexOf(" ");
// const lastIndex = str.indexOf(" ", firstIndex + 1);
// console.log(index);

// console.log(str.slice(firstIndex + 1, lastIndex));
// console.log(lastIndex);

// =====================================================


// метод Трім

// const str = " Hello User Dmitro     ";
// // прибирає пробіли . повертає новий рядок
// console.log(str.trim()); 

// let str = "Hello User Dmitro";
// str = str.replace(" ", ",");

// console.log(str);

// =========================================================

// задачка
// function checkUrl(link) {
//     if (!link.endsWith("/")) {
//         link += "/";
//     }
//     return link;
// } 

// const res1 = checkUrl(link);
// console.log(res1);


// ============================================
//                      Цикли

// for (let i = 0; i < 24; i ++) {
//     console.log(i);
// }

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }

// ===================================
// let salary = 1000;

// for (let i = 0; i <= 3; i ++) {
//     console.log(salary);
//     salary += 100;
// }

// =============================

// const n = 10;
//                 // робити кроки i -=2  i -=5 
// for (let i = n; i >= 0; i --) {
//     console.log(i);
// }

// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 0; i <= number; i++) {
//       total += i;
//     }
//     return total;
//   }


// let a = 10;

// // інкремент a++;
// a++;

// // декримент a--;
// a--; 

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// =========================================
            // Цикл while 
// let salery = 1000;

// while(salery <= 3000) {
//     console.log("More");
//     salery += 250;
// }
// console.log(salery);
// ==============================================

// function myGame() {
//     const random = Math.round(Math.random() * 1000);
//     let userNumber;
    
//     while (userNumber !== random) {
//         userNumber = Number(prompt("Enter number:"));
//         if (userNumber > random) {
//             console.log("<");
//         } else {
//             console.log(">");
//         }
//     }
//     console.log(random);
// }

// myGame();

// function xmtree(len) {
//     let str = "";
//     for (let i = 0; i < len; i ++) {
//         const left = " ".repeat(len - i) + "*".repeat(i);
//         const right = "*".repeat(i);
//         str += left + right + "\n";
//     }
//     console.log(str);
// }

// xmtree(6);



// const min = 0;// 0
// const max = 5;// 5

// const currentNumber = 5;
// let total = 0;
// for (let i = 0; i < currentNumber; i ++) {
//     console.log(`${total} + ${i} = ${total + i}`);
//     total += i;
// }
// console.log("Result", total)






// ============================================================================================================
// Масиви

// const arr = [10,20,30,40,50];
// console.log(arr);

// const arr = [10,20,30,40,50];
// console.table(arr);

// console.log(arr[0]);


// =====================================================

// Змінити назву за індексом

// const books = ["book1","book2","book3"];
// const books2 = ["book4","book5","book6"];
// // console.log(books[2]);
// books2[2] = "book10";
// books2[2] = "book20";
// console.log(books2);

// =======================================================

// Довжина масиву!

// const x1 = ["book1","book2","book3"];
// const x2 = ["book4","book5","book6","book7","book8"];

// // console.log(x1.length);
// console.log(x2.length);

// const lastIndex = x2.length - 1;
// const lastElem = x2[lastIndex];

// console.log(x2[lastIndex]);

// ==========================================================

// звернутись до елементу масиву arr[10];arr[1];arr[5];

// const arr = [];
// arr[10];

// const arr1 = [10,20,30];
// const arr2 = [10,20,30];
// const arr3 = arr1;

// console.log(arr1 === arr2); // false
// console.log(arr1 === arr3); // true

// arr3[0] = "Hello";
// console.log(arr3);

// arr1[2] = "World";
// console.log(arr1);

// ===========================

// const a = [1,2,3];
// const b = a;

// console.log("a", a);
// console.log("b", b);

// a[0] = 500;

// =====================================

// Методи масиву

// const courses = ["Java","React","Html","Css","C++"];

// console.log(courses.join("-"));

// ===========================================

// const courses = ["Java","React","Html","Css","C++"];

// const markup = ["<li></li>","<li></li>","<li></li>","<li></li>","<li></li>","<li></li>"];
// const html = markup.join("")
// console.log(html);

// ==================================================

// const courses = ["Java","React","Html","Css","C++"];

// const str = "Hello world, my name is Dima";
// const resalt = str.split("o");ріже по елементам

// console.log(resalt);

// ================================================


// const courses = ["Java","React","Html","Css","C++"];

// // const result = courses.slice(2,3); // ріже з 2 по 3
// // const result = courses.slice(0,4); // ріже з 0 до 4
// // const result = courses.slice(0,-2);  // (0 початок -2 рахує з кінця)
// // const result = courses.slice(-2); // показує 2 останні
// const result = courses.slice(2);  // починає з 2 індексу

// console.log(result);

// =============================================================

// const x1 = [1,2,3];
// const x2 = [4,5,6];
// const x3 = [7,8,9];

// const result = x1.concat(x3, x2);  // 1.2.3.7.8.9.4.5.6 повертає новий масив  
// const result1 = [].concat(x1,x2,x3);
// const copy = x1.concat();
// console.log(result);

// ===========================================================

// indexOf

// const courses = ["Java","React","Html","Css","C++"];

// const index = courses.indexOf("Html"); // повертає індекс 2
// // const index = courses.indexOf(9); // повертає -1

// console.log(index);

// // indexOf() починає з 0 індексу
// // lastIndexOf() біжить з кінця

// ======================================================

// const arr = [1,2,3];
// arr.push("el");
// arr.push("el1");
// arr.push("el2");
// arr.push("el3");
// console.log(arr);

// додає елемент в кінець

// arr.push("el","el1","el2","el3"); або так

// ========================================================

// const arr = [1,2,3];
// arr.push("el","el1","el2","el3");
// arr.pop();
// arr.pop();
// arr.pop();
// видаляє елемент з кінця
// console.log(arr); 


// const arr = [1,2,3,4,5,6,7,8];

// arr.push("el","el1","el2","el3");
// arr.pop();  // з масиву видалиться 1 елемент з кінця
// arr.pop();  // з тогож масиву -2 елемента з кінця

// console.log(arr);

// arr.shift(); // видяляє з початку масиву
// const removedElement = arr.shift();
// arr.unshift(); // додає з початку масиву

// =====================================================

// const friends = ["Molly","Polly","Dolly","Mark","Jon"];

// // for (let i = 0; i < friends.length; i++) {

// //     console.log(friends[i]); 
// // }

// for (let i = 0; i < friends.length; i += 2) {
//     if (i % 2 === 0) {    // через 1 елемент
//     console.log(friends[i]); 
//     }
// }

// ==========================================

// Инклюдс

// повертає або true або  false

// const arr = [1,2,3,4,5,6,7,8,9,11];

// // const result = arr.includes(6);// true
// const result = arr.includes(55);// false
// console.log(result);

// ================================================
// foo()

//  function foo(arr1, arr2) {
//     const arr3 = [];

//     for (let i = 0; i < arr2.length; i+=1) {
//        if (arr1.includes(arr2[i])) {
//         console.log(arr2[i]);
//        } 
        
//     }
//     return arr3;
//  }
// const result = foo([1,2,3,4,5,6,7,8],
//     [2,6,8,9,4,32,3,1]);

// console.log(result);

// ===================================================

// const arr = [1,2,3,5,66,7,9,99]
// for (let i = 0; i < arr.length; i+=1) {
//     arr[i] *= 2; 
// }

// // або той або той фор

// for (let num of arr) {
//     console.log(num);
// }

// console.log(arr);


// ==========================================

// const arr = [1,2,3,5,66,7,9,99]

// function getSlice(array, value) {
//     const index = array.indexOf(value);
//     if (!array.includes(value)) {
//         return [];
//     } else {
//         return array.slice(0, index + 1);
//     }
// }
// console.log();
// ==========================================================
// ======================
// урок 2 модуль 3
// ======================
// ==============================================================

// методи=========================

// join()
// includes()
// Push()
// Pop()
// concat()
// split()
// indexOf()
// shift()
// slice()

// Math.max
// Math.min
// Math.round
// Math.pow

// function foo(x, y) {
//     console.log(x.toFixed());
//     console.log(y.toFixed());
//     return x + y;
// }

// foo(10, 20);
// foo(10,20,30) більше параметрів можна 
// foo(10) меньше параметрів неможна буде помилка

// const arr = [];

// arr.push(1,2,3,4,5,6,7,8);

// console.log(arr);


// ===============================

// function foo() {
//     arguments; // це масив без методів (Псевдомасив)
//     console.log(arguments);

//     const args = Array.from(arguments); // перетворює аргументс на повноцінний масив з методами
// }

// foo(1,2,3);
// foo("Hello", "World");

// ===================================================

// function getTotal() {
//     const args = Array.from(arguments);
//     let total = 0;

//     for (const item of args) {
//         total += item;
//     }

//     return total;

// }

// const res1 = getTotal(1,2,3,4,5);
// const res2 = getTotal(1,2,3);
// const res3 = getTotal(1,2,3,4,5,6,7);
// // Робить функцію універсальною
// console.log(res1, res2, res3);

// ======================================================

// function calcAverage () {
//     const args = Array.from(arguments);
//     let total = 0;

//     for (const elem of args) {
//         total += elem;
//     }

//     return total / args.length;
// }

// const res1 = calcAverage(1,2,4,5)
// console.log(res1);

// ========================================================


// function myFun() {
//     const firstElem = arguments[0];
//     let total = 0;
//     for (let i = 1; i < arguments.length; i += 1) {
//         total += arguments[i];
//     }
//     return total / firstElem;
// }

// myFun(5,10,15,20);


// console.log();



// function myFun() {
//     let total = 0;
//     const args = Array.from(arguments);
//     const firstElem = args.shift();
    

//     // console.log(args);
//     // console.log(firstElem);
//     for (const item of args) {
//         total += item;
//     }
// return total / firstElem;
// }

// myFun(5,10,15,20)

// ==================================================

                //  Скоуп

// ======================================================

// const x = 10;

// if (true) {
//     const x = 20;

//     console.log(x);
// }

// =============================================
// Стек викликів - код виконується в порядку черги

// ================================================


// function logItems(item) {
// for (let i = 0; i < item.length; i+=1) {
//     console.log(i + 1, item[i]);
    
// }
// }

// // logItems("Mango","Poly","Ajax");
// logItems(["Aple","Lemon","Mango","Strawbery","Banan"]);


// ===================================================================

// function printInfo(names, phone) {
//     names = names.split(",");
//     phone = phone.split(",");
//     for (let i = 0; i < names.length; i+=1) {
//         console.log(names[i],phone[i]);
        
//     }
// }

// printInfo(
//     "Jon,Robert,Dima",
//     "121211,232323,434343"
// );

// ===========================================================

// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60) + "";
//     minutes = (minutes % 60) + "";
//     return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;

// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));

// ===============================================================

// function calculateSum (a, b) {
// return a + b;
// }

// const resalt = calculateSum(10,20);
// console.log(resalt);

// =================================================================

// function calculateAverage (a,b,c) {
//     let total = 0;
//     for (let item of arguments) {
//         total += item;
//     }

//     return total / arguments.length;
// }

// const resalt = calculateAverage(10,20,30);
// console.log(resalt);

// ================================================================slice

// задача 1


// function slugify(title) {
//     const slug = title.toLowerCase().split(" ");
//     return slug.join("-");
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// задача 2

// function makeArray(firstArray,secondArray,maxLength) {
//     const array = firstArray.concat(secondArray);
//    if (array.length > maxLength) {
//     return array.slice(0, maxLength);
//    }
//     return array;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []



// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0,maxLength);
// } else {
//   return newArray;
// }
  
//   }
  
// x = ['Mango', 'Poly', 'Houston']
// y = ['Ajax', 'Chelsea']
// makeArray(x, y, 4)



// задача 3 

// function filterArray(numbers, value) {
//     const array = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > value) {
//             array.push(numbers[i])
//         }
//     }
//     return array;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// console.log(filterArray([12, 24, 28, 8, 41, 45, 76], 35));






// ===============================================================================================

// модуль 4 урок 1

// ================================================================================================

// Обєкти - значення зберігаються по ключу

//  властивість ділиться на 2 є ключ і є значення 
// {} - це літерал обєкту

// const user = {
//     name: "Max",
//     age: 20,
//     isStudent: false,
//     isStudent: true,// на виході показує те що знизу як що 2 властивості
//     address: {
//         city: "Dnipro",
//         country: "Ukraina",
//         location: {
//         x: "32434214345",
//         y: "67656537598",
//         a: 10,
//         b: 30,
//         },
//     },
// };

// // const result = user.city;
// // звернутись до неіснуючої властивості буде ундефайнд
// // console.log(user.name);
// // console.log(user.age);
// // console.log(user.city);
// // console.log(user.isStudent);
// // console.log(user.address);

// // console.log(user["address"]);// динамічне звернення
// // console.log(user.address.location);//статичне  значення

// const key = "name";
// console.log(user[key]);


// =================================================================

// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     isFavorite: true,
// };

// playlist.name = "NewName";
// playlist["rating"] = 3;
// playlist.tracks[1] = "test";

// playlist.newProps = "Hello World";// створилася нова властивість

// console.log(playlist);

// ==================================================


// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     isFavorite: true,
// };

// console.log(playlist);

// delete playlist.isFavorite;// видалити властивість
// delete playlist.tracks[0];// видалити з масиву
// console.log(playlist);

// ======================================================


// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     isFavorite: true,
// };


// playlist.autor = { name: "Roman",};// або так

// playlist.autor.name = "Roman";// або так

// console.log(playlist);


// ===================================================

// function foo(value) {
//     console.log(value);
//     console.log(value.a);
//     console.log(value.b);
// }

// const obj = {
//     a: "765568",
//     b: "32323",
// };

// foo(obj);

// ==================================================

// масиви і функції    ===      обєкти

// =====================================
// Властивості - короткі

// const username = "Mango";
// const email = "mango@mail.com";
// const age = 12;
// const isStudent = true;

// const credentials = {
//     username,
//     email,
//     age,
// };

// console.log(credentials);


// ======================================

// const userKey = "name";
// const userValue = "Vasia";


// const obj = {
// ["test"]: userValue,// Приводить до рядка
// ["age"]: 18,// Приводить до рядка
// [120 * 2]: 100,// Приводить до рядка
// };

// console.log(obj);

// ============================================
// const key = prompt("Enter key");
// const value = prompt("Enter Value");

// const obj = {
//     [key]: value,
// };

// console.log(obj);

// ============================================


// обчислювана властивість

// ======================================


// перебор обєкту

// =================================

// const feedback = {
//     good: 5,
//     nuetral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;
// let averageFeedback = 0;

// for (const key in feedback) {
//     feedback[key];
// }
// console.log(feedback);


// ============================================

// модуль 4 урок 2

// ==============================================

// const friends = [
//     { name: "Mango", online: false},
//     { name: "Kivi", online: true},
//     { name: "Poly", online: false},
//     { name: "Ajax", online: false},
// ];

// function findFriendByName(allFriends, friendName) {
//     for (const friend of allFriends) {
//         if(friend.name === friendName) {
//             return friend;
//         }
//     }
// }

// console.log(findFriendByName(friends, "Poly"));

// ========================================


// const friends = [
//     { name: "Mango", online: false, price: 12},
//     { name: "Kivi", online: true, price: 22},
//     { name: "Poly", online: false, price: 34},
//     { name: "Ajax", online: false, price: 32},
// ];

// function getAllNames(allFriends) {
//     const result = [];
//     for(const friend of allFriends) {
//         // result.push(friend.name);
//         result.push(friend.price);// так чи так
//     }
//     return result;
// }

// console.log(getAllNames(friends));

// =========================================================


// const friends = [
//     { name: "Mango", online: false, price: 12},
//     { name: "Kivi", online: true, price: 22},
//     { name: "Poly", online: false, price: 34},
//     { name: "Ajax", online: false, price: 32},
// ];

// function getAllNames(allFriends) {
//     const result = [];
//     for(const friend of allFriends) {
//         const obj = {
//             name: friend.name,
//             price: friend.price,
//         }
//         result.push(obj);
//     }
//     return result;
// }

// console.log(getAllNames(friends));

// ====================================================

// const friends = [
//     { name: "Mango", online: false, price: 12},
//     { name: "Kivi", online: true, price: 22},
//     { name: "Poly", online: false, price: 34},
//     { name: "Ajax", online: true, price: 32},
// ];


// function getOnlineFriends(allFriends) {
//     const resalt = [];
//     for (const item of allFriends) {
//         if (item.online) {
//             resalt.push(item.price)
//         }
//     }
//     return resalt;
// }

// console.log(getOnlineFriends(friends));

// =======================================================

// const friends = [
//     { name: "Mango", online: false, price: 12},
//     { name: "Kivi", online: true, price: 22},
//     { name: "Poly", online: false, price: 34},
//     { name: "Ajax", online: true, price: 32},
// ];
// function updatePrice(arr, x) {
//     for (let i = 0; i < arr.length; i+=1) {
//         arr[i].price = +(arr[i].price * x).toFixed(2);
        
//     }
// }

// updatePrice(friends, 1.5); // збільшує вартість
// console.log(friends);

// ========================================================




// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// function calcTotalPrice( products, productName) {
//     for (const elem of products) {
//         if(elem.name === productName) {
//             return elem.price * elem.quantity;
//         }
//     }
// }

// console.log(calcTotalPrice(products, "Radar"));


// ======================================================

// Metod ============== і його властивості =============

// =====================================================

// const obj = {
//     name: "Vasia",
//     age: 32,
//     city: "Dnipro",

//     sleep() {console.log("Zzzzz");},
//     showInfo() {console.log("My NaMe Is VasiA");},
//     writeCode() {console.log();},
//     changeName(newName) {this.name = newName;},
    
// };

// obj.sleep();
// obj.showInfo();

// ======================================================
            //...numbers   [] як що є коробка це спрет
// Операція спрет вона для масиву чи обєкту ( не для числа)

// =======================================================

// const numbers = [1,2,3,4,5];
// const numbers1 = [6,7,8,9,10];
// const numbers2 = [11,12,13,14,15];
// const y = ["Hello", ...numbers, ...numbers1, "GoIt", ...numbers2];
// console.log(y);

// ==========================================================

// const temps = [18, 14, 16, 17, 21]
// const min = Math.min(...temps);// мінімальне число
// console.log(min);

// ===========================================================

// const a = [{a:10},{b:20},{c:30}];
// const b = [...a];

// b[0].a = 20; // мінямо обєкту (б) значення і воно міняється в (а)

// console.log(a === b); // false
// console.log(a[0] === b[0]); // true
// console.log("a:", a);
// console.log("b:", b);

// =======================================================


// const defaultObj = {
//     name: "Default",
//     age: 0,
//     isAdmin: false,
//     city: "Default",
//     country: "Ukraine",
// };

// const userInfo = {
//     name: "Vasia",
//     age: 32,
// };

// const result = {
//     ...defaultObj,
//     ...userInfo,
// };

// console.log(result);

// ================================================

// ...rest

// ======================================

// function foo(x,y,q, ...rest) {// або ...args як що нема коробки [] то це ...rest
//     console.log(x,y,q);
//     console.log(rest);
// }

// foo(10,20,30,40,50)

// ==================================================

// Робимо банк
// =================================================================

// * Типів транзакцій всього два.
// * Можна покласти чи зняти гроші з рахунку.
// *
// const Transaction = {
//  DEPOSIT: "deposit",
//  WITHDRAW: "withdraw",
// };

// /*
// * Кожна транзакція це об'єкт із властивостями: id, type та amount
// */

// const account = {
//  // Поточний баланс рахунку
//  balance: 0,

//  // Історія транзакцій
//  transactions: [],

//  /*
//   * Метод створює та повертає об'єкт транзакції.
//   * Приймає суму та тип транзакції.
//   */
//  createTransaction(amount, type) {},

//  /*
//   * Метод, що відповідає за додавання суми до балансу.
//   * Приймає суму транзакції.
//   * Викликає createTransaction для створення об'єкта транзакції
//   * після чого додає його до історії транзакцій
//   */
//  deposit(amount) {},

//  /*
//   * Метод, що відповідає за зняття суми з балансу.
//   * Приймає суму транзакції.
//   * Викликає createTransaction для створення об'єкта транзакції
//   * після чого додає його до історії транзакцій.
//   *
//   * Якщо amount більше ніж поточний баланс, виводь повідомлення
//   * про те, що зняття такої суми не можливе, недостатньо коштів.
//   */
//  withdraw(amount) {},

//  /*
//   * Метод повертає поточний баланс
//   */
//  getBalance() {},

//  /*
//   * Метод шукає та повертає об'єкт транзакції по id
//   */
//  getTransactionDetails(id) {},

//  /*
//   * Метод повертає кількість коштів
//   * певного типу транзакції з усієї історії транзакцій
//   */
//  getTransactionTotal(type) {},
// };

// ======================================================================================== 

// Урок з ментором 2 

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

//  const user = {
//     name: "John",
//     age: 20,
//     hobby: "tennis",
//     premium: true,
//   };

//  user.mood = "happy";
//  user.hobby = "skydiving";
//  user.premium = false;
 
//  const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}:${user[key]}`);
// }

// =======================================================================

/* Напишіть функцію, яка приймає об'єкт і рахує 
загальну суму зарплат працівників. */

// const someObj = {
//     worker1: 360,
//     worker2: 750,
//     worker3: 240,
//   };

// function totalSallery(obj) {
//     let totalSallery = 0;
// const value = Object.values(obj);
// for ( const index of value) {
// totalSallery += index;
// }
// return totalSallery;
// }

//   console.log(totalSallery(someObj));

// ===============================================================


/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

//  const stones = [
//     { name: "Изумруд", price: 1300, quantity: 4 },
//     { name: "Бриллиант", price: 2700, quantity: 6 },
//     { name: "Сапфир", price: 400, quantity: 7 },
//     { name: "Щебень", price: 150, quantity: 100 },
//   ];

//   function calcTotalPrice(someStones, stonesName) {
//     for (const stone of someStones) {
//         if (stone.name === stonesName) {
//             return stone.price * stone.quantity;
//         }
//     }
//     return "Камінь не знайдено"
//   }
//   console.log(calcTotalPrice(stones, "Изумруд"));

// ==============================================================

///**
// *? Напишіть функцію, яка приймає массив об'єктів
//  і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//     { name: "apple", price: 200 },
//     { name: "orange", price: 300 },
//     { name: "grapes", price: 750 },
//   ];

// function fruitsTotal(arr) {
//     const newArray = [];
//     let id = 1;
// for (const item of arr) {
//     const newItem = {
//         ...item, // name: "apple", price: 200
//          price: item.price * 0.8,
//           id,
//         };
//     newArray.push(newItem);
//     id += 1;
// }
// return newArray;
// }

// console.log(fruitsTotal(fruits));
// console.log(fruits);

// ===================================================================

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ["best", "the", "foo", "is", "js"];

// const arr2 = [...arr];

// arr2.splice(arr2.indexOf("foo"), 1); // видаляє 1 елемент 
// arr2.reverse();
// console.log(arr2.join(" "));
// console.log(arr);

// =================================================

// Другий варіант від ментора

// const arr = ["best", "the", "foo", "is", "js"];

// const string = arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
//   .reverse()
//   .join(" ");

// console.log(string);
// console.log(arr);

// =========================================================

// /* <script src="./js/script.js" type="module"></script> підключаємо скрипт тільки так  
// <script src="./js/script.js"></script>  а на дз так */
// chatJpt 
// // ==============================================================

// домашка задача 1

// function isEnoughCapacity(products, containerSize) {
//     let allProducts = 0;
//     for (const key in products) {
//       allProducts += products[key];
//     } 
//     return allProducts <= containerSize;
// };

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false
// 111

// задача 2


// function calcAverageCalories(days) {
//   let totalCalories = 0;
//   for (let argument of Object.values(days)) {
//     totalCalories += argument.calories;
//   }
// return totalCalories / days.length || days.length;
// };

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180
// console.log(
//     calcAverageCalories([
//       { day: "monday", calories: 2040 },
//       { day: "tuesday", calories: 2270 },
//       { day: "wednesday", calories: 2420 },
//       { day: "thursday", calories: 1900 },
//       { day: "friday", calories: 2370 },
//       { day: "saturday", calories: 2280 },
//       { day: "sunday", calories: 2610 }
//     ])
//   ); // 2270

// console.log(
//     calcAverageCalories([])
//   ); // 0
  


// =================================================================================

// задача 3

// const profile = {
//     username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {this.username = newName;},
//   updatePlayTime(hours) {this.playTime = this.playTime + hours;},
//   getInfo() {return `${this.username} has ${this.playTime} active hours!`},
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"


// =======================================================================================


// const bookShelf = {
//     books: ["The Last Kingdom", "The Mist"],
//     getBooks() {
//       return this.books;
//     }
//   };
  
//   console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]



//   const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       this.potions.push(newPotion);
//     },
//     getTotalPrice() {
//       price += 1;
//       return this.potions.price;
//     },
//   };
// console.log(price);





// function addOverNum(value, ...args) {
//     let sum = 0;
//     for (let i = 0; i < args; i++) { 
//       if (args > value) {
//       args += sum[i];
//       console.log(i);
//     }  
//     }
//     return sum;
//   }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));// повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8));// повертає 51



// function getExtremeScores(scores) {
//  const resalt = {
//  best: Math.max(...scores),
//  worst: Math.min(...scores),
// }
// return resalt;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // повертає об'єкт { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));// повертає об'єкт { best: 81, worst: 4 }



// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
    
//   }


// console.log(makeMessage("Royal Grand", makePizza));//   "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza));// "Delivering Ultracheese pizza."



// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Index ${i}, value ${numbers[i]}`);
// // }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });


// function filterArray(numbers, value) {
//     numbers.forEach(function callback(number) { 
//         number.slice(value);
//     });
//     return numbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));//[4, 5]
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function callback(orderedItems) {
//         totalPrice += orderedItems;
//       });
  
//     return totalPrice;
//   }

//   console.log(calculateTotalPrice([12, 85, 37, 4]));//138
// console.log(calculateTotalPrice([164, 48, 291]));//503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));//1116


// ========================================================================



























