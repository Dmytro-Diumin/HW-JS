// const getUserNames = (users) => {
//     const userName = users.map(user => user.name);
//     return userName;
// };

// console.log(
//     getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764
//     },
//   ])
//   ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

  
//================================================================================================



// const getUsersWithFriend = (users, friendName) => {
//     const myFriends = users.filter(({friends}) => friends.includes(friendName));
//     return myFriends;
// };

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []


//=====================================================================================
// const arr = [1,2,3,5,7,9,10];

// const result = arr.sort((a, b) => b - a );
//     // console.log(left, right);

// console.table(result);



// const sortByDescendingFriendCount = (users) => { 
//   const userSorted = users.toSorted((a, b) => b.friends.length - a.friends.length);
// return userSorted;
// }
// console.log(
//     sortByDescendingFriendCount([
//       {
//         name: "Moore Hensley",
//         friends: ["Sharron Pace"],
//         gender: "male"
//       },
//       {
//         name: "Sharlene Bush",
//         friends: ["Briana Decker", "Sharron Pace"],
//         gender: "female"
//       },
//       {
//         name: "Ross Vazquez",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         gender: "male"
//       },
//       {
//         name: "Elma Head",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         gender: "female"
//       },
//       {
//         name: "Carey Barr",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         gender: "male"
//       },
//       {
//         name: "Blackburn Dotson",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         gender: "male"
//       },
//       {
//         name: "Sheree Anthony",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         gender: "female"
//       }
//     ])
//   );
  // [
  //   {
  //     name: "Ross Vazquez",
  //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Sharlene Bush",
  //     friends: ["Briana Decker", "Sharron Pace"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Carey Barr",
  //     friends: ["Jordan Sampson", "Eddie Strong"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Blackburn Dotson",
  //     friends: ["Jacklyn Lucas", "Linda Chapman"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Moore Hensley",
  //     friends: ["Sharron Pace"],
  //     gender: "male"
  //   }
  // ]

//===========================================================================

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];


// const uniqueSortedCourses = students
// .flatMap(student => student.courses)
// .filter((course, index, array) => array.indexOf(course) === index)
// .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses);



const getTotalBalanceByGender = (users, gender) => {
  const totalBalance = users
  .filter(user => user.gender == gender)
  .reduce((acc, user) => acc += user.balance, 0);

  return totalBalance;
};

const allUsers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863