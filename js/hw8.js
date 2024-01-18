// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => { //(event) пишеться так або так (e)
//     // event.stopPropagation();  // Припинити сплиття події
//     // event.stopImmediatePropagation(); // зупинити поширення події
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

// parent.addEventListener("click", (e) => { //(event) пишеться так або так (e)
//     console.log("e.target: ", e.target);
//     console.log("e.currentTarget: ", e.currentTarget);
//   });

//  Делегування
// ========================================================
// const container = document.querySelector(".container");

// parent.addEventListener("click", e => { //(event) пишеться так або так (e)
//     if (e.target === e.currentTarget) return;

//     console.log(e.target);
// });
// ============================================================

// const container = document.querySelector(".container");

// parent.addEventListener("click", e => { //(event) пишеться так або так (e)
//     // if (e.target === e.currentTarget) return;  // виводить елемент на який іде клік
//     // if (e.target.classList.contais('container')) return;
//     // if (e.target.nodeName !== 'BUTTON') return; // клік по кнопці
//     // if (!e.target.dataset('data-test')) return;
//     // if (!e.target.classList.contains('js-btn')) return; 
//     //щоб подальший код не виконувався пишется return 

//     if (e.target === e.currentTarget) return; // показує колір боксу

//     console.log(e.target.dataset.color);
// });
// =============================================
// console.log(_);
// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15

const instance = basicLightbox.create(`
{
	/*
	 * Prevents the lightbox from closing when clicking its background.
	 */
	closable: true,
	/*
	 * One or more space separated classes to be added to the basicLightbox element.
	 */
	className: '',
	/*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	onShow: (instance) => {},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	onClose: (instance) => {}
}
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`, {
	closable: false
})
// ===================================
// const user = { 
// 	name: "Jacob", 
// 	age: 32 
// };

// console.log(user.name); // Jacob
// console.log(user.age); // 32
// =============================== Із деструктуризацією робота з властивостями об'єкта має такий вигляд:===========================================
// const user = { 
// 	name: "Jacob", 
// 	age: 32 
// };

// const { name, age } = user;
// console.log(name); // Jacob
// console.log(age); // 32

// ==========================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? "pulbic" : "private";
// const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;


// ====================Деструктуризація об'єктів=======================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating } = book;

// // Використовуємо
// const accessType = isPublic ? "pulbic" : "private";
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
// console.log(book);

// ======================================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
// const {
//   title,
//   author,
//   coverImage = "<https://via.placeholder.com/640/480>"
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "<https://via.placeholder.com/640/480>"

// =======================================================================

// Перейменування змінної  використовуючи :

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38

// =============================================================

// Деструктуризація в циклах 
// Під час ітерації по масиву об'єктів циклом for...of 
// відбуваються багаторазові звернення до властивостей об'єкта.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// Для того щоб скоротити кількість повторень, 
// можна деструктуризувати властивості об'єкта в локальні змінні в тілі циклу.

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// Якщо об'єкт містить небагато властивостей, деструктуризацію 
// можна виконати безпосередньо в місці оголошення змінної book.

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// ==================================================

// function printUserInfo(user) {
//   console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
// }

// printUserInfo({ 
// 	name: "Alice", 
// 	age: 25, 
// 	hobby: "dancing" 
// }); // Name: Alice, Age: 25, Hobby: dancing

// З деструктуризацією об'єкта в тілі функції:

// function printUserInfo(user) {
// const { name, age, hobby } = user
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({ 
// 	name: "Alice", 
// 	age: 25, 
// 	hobby: "dancing" 
// }); // Name: Alice, Age: 25, Hobby: dancing

// Із деструктуризацією об'єкта в місці оголошення параметрів:

// function printUserInfo({ name, age, hobby }) {
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({ 
// 	name: "Alice", 
// 	age: 25, 
// 	hobby: "dancing" 
// }); // Name: Alice, Age: 25, Hobby: dancing

// ================================================================

// Патерн «Об'єкт параметрів»

// function doStuffWithBook(book) {
//   // Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.pages);
//   // І так далі
// }

// Ще одна перевага в тому, 
// що можна деструктуризувати об'єкт у параметрі book.
// Це можна зробити в тілі функції.

// function doStuffWithBook(book) {
//   const { title, pages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(pages);
// }

// Або в сигнатурі (підписі) функції — різниці немає.

// function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
//   console.log(title);
//   console.log(pages);
// }

// ===================================

// Глибока деструктуризація

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// ====================

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, stats } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }

// Тепер додамо глибоку деструктуризацію властивостей об'єкта stats.
// Для цього в деструктуризації після імені властивості ставимо двокрапку : та 
// починаємо деструктуризацію об'єкта для цієї властивості.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308

// Під час глибокої деструктуризації також можна 
// змінювати імена змінних і присвоювати значення за 
// замовчуванням, використовуючи вже знайомий тобі синтаксис.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
// =================================================

// Деструктуризація масивів

// Деструктуризоване присвоювання можна використовувати не тільки для об’єктів, 
// а й для масивів, але з деякими особливостями.

// Замість фігурних дужок {} використовуються квадратні [].
// Змінним, зазначеним у квадратних дужках [], 
// будуть послідовно присвоюватися значення елементів масиву.

// const color = [200, 255, 100];
// const [ red, green, blue ] = color;

// console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"

// Після ключового слова const або let ставимо квадратні дужки, 
// як і у випадку з оголошенням масиву. Всередині дужок, через кому, 
// вказуємо імена змінних, у які будуть поміщені значення відповідних 
// елементів масиву.

// Внаслідок такого запису будуть створені 3 змінні, 
// і в них будуть поміщені елементи в нумерованому 
// порядку: від 0 і до кінця масиву.

// =============================================

// Значення за замовчуванням

// Якщо змінних оголошено більше, ніж елементів масиву, 
// їм буде присвоєно undefined. Щоб запобігти цьому, 
// можна вказувати значення за замовчуванням.

// Синтаксис такий самий, як в об'єктах, після імені 
// змінної ставимо = і значення за замовчуванням.

// const color = [200, 100, 255];
// const [ red, green, blue, alfa = 0.3 ] = color;

// console.log(`rgba(${red}, ${green}, ${blue}, ${alfa})`); // “rgba(200, 255, 100, 0.3)"

// ==========================
// Часткова деструктуризація

// const color = [200, 255, 100];

// const [ red, ...otherColors ] = color;

// console.log(red); // 200
// console.log(otherColors); // [255, 100]

// При цьому оригінальний масив не змінюється, 
// у змінній otherColor буде новий масив із копіями зібраних значень.

// З об'єктами, до речі, це теж працює. Можна деструктуризувати 
// певні властивості в окремі змінні, а решту зібрати в новий об'єкт.

// const user = {
// 	name: "Jacob",
// 	age: 32,
// 	email: "j.cob@mail.com",
// 	isOnline: true
// };

// const { name, isOnline, ...otherProps } = user;

// console.log(name); // "Jacob"
// console.log(isOnline); // true
// console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

// При цьому оригінальний об'єкт не змінюється, 
// у змінній otherProps буде новий об'єкт із копіями зібраних властивостей.

// const fruit = {
// 	name: "peach",
// 	value: 32,
// 	quantity: 95,
// 	isOnSale: false
// };

// const { quantity, ...otherValues } = fruit;

// ==========================

// Пропуск значень

// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"

// ==========================

// Деструктуризація параметрів

// function printFruits(fruits) {
//   console.log(fruits[0], fruits[1], fruits[2]);
// }

// printFruits(["apple", "banana", "orange"]); // "apple banana orange"

// Із деструктуризацією в місці оголошення параметрів:

// function printFruits([firstFruit, secondFruit, thirdFruit]) {
//   console.log(firstFruit, secondFruit, thirdFruit);
// }

// printFruits(["apple", "banana", "orange"]); // "apple banana orange"

// ========================================

// Переваги деструктуризації

// Давай підсумуємо переваги деструктуризації:

// Зручне вилучення значень з об'єктів і масивів: Замість того,
// щоб щоразу звертатися до полів об'єкта або елементів масиву за їхніми індексами 
// або іменами, можна одразу витягти потрібні значення у змінні.
// Короткий і читабельний код: Деструктуризація робить код коротшим і зрозумілішим. 
// Замість довгих виразів доступу до полів об'єктів або елементів масиву, 
// можна відразу присвоїти значення змінним зі зрозумілими іменами.
// Параметри функцій: При передачі об'єктів у функції, можна деструктуризувати об'єкти, 
// щоб отримати доступ до потрібних даних. Це дозволяє явно вказати, 
// які поля об'єкта використовуються у функції.
// Робота з функціями, що повертають об'єкти: Якщо функція повертає об'єкт, 
// можна відразу деструктуризувати цей об'єкт, щоб витягти з нього значення.


function getSlice(array, value) {
 const index = array.indexOf(value);
 if (index != -1) {
 }
 return index;
}


console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));//повертає ["Mango", "Poly"]




