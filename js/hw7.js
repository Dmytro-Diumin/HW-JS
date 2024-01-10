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

const dom = {
    html:{
    head:{
        body:{
            ul:{
                li:{
                    textContent:"Hi",
                    },
                },
            },
        },
    },
};


// const liElem = dom.html.body.ul.li;
const liElem = document.querySelector('.li');
console.log(liElem);












