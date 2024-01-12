// console.log(document); // Дом дерево
                    // html
                    // head  -  body
                    // =============
// DOM
// const dom = {
//     html:{
//     head:{
//         body:{
//             ul:{
//                 li:{
//                     textContent:"About",
//                     },
//                 },
//             },
//         },
//     },
// };

// BOM
// console.log(window);

// window.location.replace();

// =====================================================

// const dom = {
//     html:{
//     head:{
//         body:{
//             ul:{
//                 li:{
//                     textContent:"Hi",
//                     },
//                 },
//             },
//         },
//     },
// };


// const liElem = dom.html.body.ul.li;
// const liElem = document.querySelector('ul>li'); // Шукає
// =================================

// const ulElem = document.querySelector('ul');
// console.log(ulElem);

// const liElem = ulElem.querySelectorAll('li'); // повертає завжди масив
// console.log(liElem);
// =========================================

// Жива колекція
// const liElem = document.getElementById('test'); // викликається лише на документі



// ==============================================

// про навігацію по ДОМ дереву

// const liElem = document.querySelector('li#test');
// console.log(liElem.children[2]);//[0] - [1] - [3] звернутись до дитини лішки
// ===================================================
// liElem.children[1];
// for (let i = 0; i < liElem.children.length; i++) {
//     console.log(liElem.children[i]);
// }
// ===============================================
//звернутися до дитини
// console.log(liElem.firstChild);
// console.log(liElem.firstElementChild);//next - first - last і т.д
// ===================================================
// console.log(liElem.parentNode.parentNode.parentNode);
// ===============================================
// console.log(liElem.previousSibling);
// console.log(liElem.previousElementSibling);
// =======================================================
// console.log(liElem.nextSibling);
// console.log(liElem.nextElementSibling);
// =========================================================

// Атрибути

// getAttribute('[disabled]');//ім'я атрибута  '[disabled]'- це приклад
// setAttribute('[disabled]');//ім'я атрибута
// removeAttribute('[disabled]');//ім'я атрибута
// hasAttribute('[disabled]');//ім'я атрибута

// const imageList = document.querySelector('.hero__image');
// console.log(imageList);
// imageList.forEach(imageElem => {
//     const index = imageElem.getAttribute('index');
//     const url = ``;
//     imageElem.setAttribute('src', url);
// });

//пошук за атрибутом //const imageElem = document.querySelector('[disabled]');
//атрибут   disabled   // робить кнопку неактивною

// ==========================================================================

// урок 2

// ===================================================================

// події

const btnElem = document.querySelector('.js-btn1');

btnElem.addEventListener('mouseenter', onBtnEnter);
btnElem.addEventListener('mouseleave', onBtnLeave);

function onBtnEnter() {
    btnElem.classList.add('article-text');
}

function onBtnLeave() {
    btnElem.classList.remove('article-text');
};

const btnElem1 = document.querySelector('.js-btn2');

btnElem1.addEventListener('mouseenter', onBtnEnter1);
btnElem1.addEventListener('mouseleave', onBtnLeave1);

function onBtnEnter1() {
    btnElem1.classList.add('article-text1');
}

function onBtnLeave1() {
    btnElem1.classList.remove('article-text1');
};


// console.log(btnElem1);

























































