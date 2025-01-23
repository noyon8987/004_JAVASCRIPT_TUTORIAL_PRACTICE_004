// function myFunction (a, b) {
//     return a + b;
// }

// let result = myFunction(5, 9);
// console.log(result);

// const x = (a, b) => a + b;
// const y = x(2, 4);
// console.log(y);

// function myFunction(x, y) {
//   if (x === undefined) {
//     x = 0;
//   } else if (y === undefined) {
//     y = 0;
//   }
//   return x * y;
// }

// let x = myFunction(9);
// console.log(x);

// function myFunction (x, y = 5) {
//     return x * y;
// }

// let x = myFunction(5);
// console.log(x);

// const user = {
//   firstName: "Kairul",
//   lastName: "Basar",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(user.fullName());

// const user = {
//   fullName: function () {
//     return this.firstname + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstname: "Jhon",
//   lastName: "Doe",
// };

// const person2 = {
//   firstname: "Alem",
//   lastName: "Walker",
// };

// console.log(user.fullName.call(person1));
// console.log(user.fullName.call(person2));

// const user = {
//   fullInformation: function (city, country) {
//     return (
//       "My name is " +
//       this.firstName +
//       " " +
//       this.lastName +
//       ", " +
//       "and I Live in " +
//       city +
//       " of " +
//       country
//     );
//   },
// };

// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
// };

// console.log(user.fullInformation.call(person, "Florida", "United State."));

// const user = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
// };

// console.log(user.fullName.apply(person));

// const user = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   firstName: "Hablu",
//   lastName: "Programmer",
// };

// const person2 = {
//   firstName: "Noyon",
//   lastName: "Dev",
// };

// const fullName = user.fullName.bind(person2);
// const fullName = user.fullName.bind(person1);

// console.log(fullName());
