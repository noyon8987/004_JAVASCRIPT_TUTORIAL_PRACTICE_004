// ?01 Default function Parameters:

// function say(message = 'Hello Noyon How are you?'){
//     console.log(message)
// };
// say();

// function fun(name = "My name is Hablu"){
//     console.log(name);
// }
// fun("My name is Shahadat Hosen Noyon");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?02 Rest Function Parameters:

// function fn(a,b,...Noyon){
//     console.log(a,b, Noyon)
// };
// fn('Hablu','Noyon','Korim','kabab','sohan');


// function myFun(a, b, ...collectName){
//     console.log(a, b, collectName);
// }
// myFun("Noyon", "Rohim", "Hosen", "Korim", "Habib", "Helal", "Jisan");


// function Fun(a, b, ...collectName){
//     console.log(a, b, collectName);
// }
// Fun(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?03 Spread Operator:

// const array1 = [0, 1, 2, 3, 4];
// const array2 = [5, 6, 7, 8, 9, ...array1];       
//        // or / [...array1, 5, 6, 7, 8,9];
// console.log(array2);

// let arr1 = [60, 70, 80, 90, 100];
// let arr2 = [10, 20, 30, 40, 50, ...arr1];
// console.log(arr2);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?04 Object Literal Syntax Extensions:

// function say(message,name){
//     return{
//         message,
//         name
//     }
// };
// console.log(say('Hi','Shahadat Hosen Noyon'));


// function myfunction(Say, Call){
//     return {
//         Say, Call
//     }
// }
// let information = myfunction("Hi", "Noyon Ali");
// console.log(information);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?05 For of Loop & For in Loop:

// const array = [1,2,3,4,5]
// for(new1 of array){
//     console.log(new1)
// };

//&&&

// const obj = {
//     Name : 'Noyon',
//     Age : 20,
//     Profile : 'Student'
// };
// for(Hamko in obj){
//     console.log(obj);
// };


// let info = {
//     Name : "Shahadat Hosen Noyon",
//     Profile : "Student",
//     Class : "Honurs First Year"
// };

// for(Noyon in info){
//     console.log(info);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?06 Template Literaks:

// const str = `'Hablu','Eshan','Noyon'`;
// console.log(str);


// const name = `Shahadat Hosen Noyon`;
// const age  =  20;
// console.log(`My name is ${name} and I am ${age} year's old`);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?07 Array Destructuring:

// const array = [1,2,3,4,5,6];
// let [a,b,c,...z] = array;
// console.log(a,b,c,z);

// const number = [3,4,5,6,7,8];
// const [num1,num2,num3,num4,num5,num6] = number;
// console.log(num5);

// let num = [13,45,56,78,81,67];
// let [n1,n2,n3,n4,n5,n6] = num;
// console.log(n1,n2);

// !arrow swap:
// let b = 5, c = 16;
// [b,c] = [c,b];
// console.log(b);
// console.log(c);

// let x = 10, y = 20;
// [x,y] = [y,x];
// console.log(x);
// console.log(y);

// ?08 Object Destructuring:

// const obj = {
//     Name : 'Noyon',
//     age  :  20,
//     Id   :  10
// }
// let {Name,age,Id} = obj;
// console.log(age);
// console.log(Name);
// console.log(Id);


// const x = {name:"Noyon", age:21};
// const myName = ({name,age}) => {console.log(`${name}, ${age}`);};
// myName(x)


// const myName = {name:"Hablu", roll:101};
// function myFun({name, roll}){
//     console.log(`${name}, ${roll}`);
// };
// myFun(myName);


// let information = {Name : "Noyon", Id : 101};
// function myfunction({Name, Id}){
//     console.log(`${Name}, ${Id}`);
// }
// myfunction(information);


// const obj = {
//         name : 'Noyon',
//         age  :  20,
//         Id   :  10
//     }
//     let {name,age,Id} = obj;
//     console.log(name,age,Id);
    
    // const x = {name:"Noyon",age:21};
    // const myName = ({name,age}) => {console.log(`${name}, ${age}`);};
    // myName(x)
    
    // const myName1 = {name:"Hablu", roll:101};
    // function myFun({name, roll}){
    //     console.log(`${name}, ${roll}`);
    // };
    // myFun(myName1);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?09 [Export & Import] Modules:

// import { NewMessage } from "./EcmaScript 05.JS";
// console.log(NewMessage);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?10 Class Constructor:

// class Book{
//     constructor(BookName, BookPrice){
//         this.BookName  = BookName;
//         this.BookPrice = BookPrice;
//     }
// }
// const BookDetails = new Book ('Hablu Programmer', '500 tk');
// console.log(BookDetails);


// class Book{
//     constructor(bookName, Price){
//         this.bookName = bookName;
//         this.Price = Price;
//     }
// }
// let Books = new Book("Rich Dad Poor Dad", 1099);
// console.log(Books);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?11 Class Expression:

// let Person = class{
//     constructor(Name,age,profile){
//         this.Name = Name;
//         this.age = age;
//         this.profile = profile;
//     }
// };
// let PersonDetails = new Person ('Noyon', 20, 'Student');
// console.log(PersonDetails);


// let person = class{
//     constructor(Name, Id, Roll){
//         this.Name = Name;
//         this.Id = Id;
//         this.Roll = Roll;
//     }
// }
// let personDetails = new person("Shahadat Hosen Noyon", "Student", 105);
// console.log(personDetails);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?12 Class Static Mathods:

// class Book {
//     static fun (){
//         console.log('Hello Noyon');
//     };
// }
// Book.fun();


// class Name {
//     static myfunction () {
//         console.log("My name is Shahadat Hosen Noyon");
//     }
// }
// Name.myfunction();


// class number {
//     static phoneNumber (){
//         console.log("Phone Number : 01585735520");
//     }
// }
// number.phoneNumber();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?13 Inheritance & Super Extends:

// class parents {
//     Assets1(){
//         console.log('Haira doniya taka cara karo mollo ni');
//     }
//     Assets2(){
//         console.log('Taker Jonno ami din rat kosto kori');
//     }
// };
// class Ami extends parents{
//     MyAssets(){
//         super.Assets1();
//         super.Assets2();
//     }
// };
// let MyAssets = new Ami();
// MyAssets.MyAssets();



// class gotFather {
//     Assets1 (){
//         console.log("You are so nice but.....");
//     }
//     Assets2 (){
//         console.log("You are ver inteligent");
//     }
// }

// class Assets extends gotFather{
//     myAssets(){
//         super.Assets1();
//         super.Assets2();
//     }
// }
// let Asset = new Assets();
// Asset.myAssets();


// class friendName {
//     friend1(){
//         console.log("Helal is my Best Friend");
//     }
//     friend2(){
//         console.log("Jisan is my School Friend");
//     }
//     friend3(){
//         console.log("Nayem is my Close Friend");
//     }
//     friend4(){
//         console.log("Anika is my Best Girl Friend");
//     }
// }

// class Friend extends friendName {
//     myFriends(){
//         super.friend1();
//         super.friend2();
//         super.friend3();
//         super.friend4();
//     }
// }

// let Friends = new Friend();
// Friends.myFriends();



// class bikeShop {
//     suzuki(){
//         console.log("Suzuki is one of the best Bike");
//     }
//     Yamaha(){
//         console.log("Yamaha is my Favorite Bike");
//     }
// }

// class bike extends bikeShop{
//     myBike(){
//         super.suzuki();
//         super.Yamaha();
//     }
// }
// let Bike = new bike();
// Bike.myBike();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?14 Just Inheritance Extends:

// class somporti {
//     Dader(){
//         console.log('Tor bap sob niya nica nati');
//     }
//     Baber(){
//         console.log('Amar sob kico to tora vai bonra pabi');
//     }
// };

// class Noyon extends somporti {};
// let Noyonvai = new Noyon();
// Noyonvai.Dader();
// Noyonvai.Baber();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ?15 Arrow Functions:

// let fun = (x,y) => x + y;
// console.log(fun(700,300));

// let myfunction = (x, y, z) => x + y + z;
// let total = myfunction(100, 200, 300);
// console.log(total);

// const number = () => "I am a arrow function";
// console.log(number());

// const arrow = (num1,num2) => num1 + num2;
// console.log(arrow(20,30));

// !Normal function() vs Arrow function():

// let students = [
//     {
//         name: "Shahadat Hosen Noyon",
//         age: 21,
//         id: 101
//     },
//     {
//         name: "Habibul Basar",
//         age: 25,
//         id: 105
//     },
//     {
//         name: "Imran Hasmi",
//         age: 35,
//         id: 201
//     }
// ];

// function age() {
//     return students.filter(function (x) {
//         return x.id < 105;
//     }).map(function(y){
//         return y.name;
//     });
// }
// console.log(age());

// !VS //

// let students = [
//         {
//             name: "Shahadat Hosen Noyon",
//             age: 21,
//             id: 101
//         },
//         {
//             name: "Habibul Basar",
//             age: 25,
//             id: 105
//         },
//         {
//             name: "Imran Hasmi",
//             age: 35,
//             id: 201
//         }
//     ];

// let name = () => students.filter((x) => x.age > 30).map((y) => y.age);
// console.log(name());

// ?16 Symbol Data Type:

// let sym1 = ('noyon');
// let sym2 = ('Noyon');
// console.log(sym1===sym2);

// !Symbol Shows that Unique Data: (Symbol use Korla Sotoo ka mitta banai)

// let sym3 = Symbol("Robarto Karlos");
// let sym4 = Symbol("Robarto Karlos");
// console.log(sym3===sym4);

// ?17 Iterators Array:

// let array = [1,2,3,4,5,6,7,8,9];
// for (Kabjab of array){
//     console.log(Kabjab);
// }

// ?18 Strict Mode:

// 'use strict'
// let Name = 'Hablu Mama';
// console.log(Name);

// ?19 ForEach:

// const num = [1, 2, 3, 4, 5];
// num.forEach(kam);
// function kam(Jam) {
//     console.log(Jam);
// };

// let number = [10,20,30,40,50,60,70,80,90,100];
// number.forEach(Hablu);
// function Hablu(x){
//     console.log(x);
// }


// let sum = ["Noyon", "Rifat", "Munna", "Noyom"];
// sum.forEach(x);
// function x (Name){console.log(Name);}



// let a = [1,3,5,7,9];
// a.forEach((x)=>console.log(x));

// let number = [10,20,30,40,50,60,70,80,90,100];
// number.forEach((x) => console.log(x));

// let Name = ["Noyon", "Rifat", "Munna", "Noyom"];
// Name.forEach((x)=>console.log(x))

// ?20 Map Function:

// let noyon = [1,2,3,4,5,6];
// let Abdulla = noyon.map(toipabi);
// function toipabi(No){
//     return No*3
// }
// console.log(Abdulla);

// let num = [1,2,3,4,5,6,7];
// let sum = num.map(dum);
// function dum (aum) {
//     return aum;
// }
// console.log(sum);

// let Name = [`Shahadat Hosen Noyon, Taspiya, Alifa`];
// let Names = Name.map(dumiTaxt);
// function dumiTaxt (Text){
//     return Text;
// }
// console.log(Names);

// ?21 Fiter Function:

// let noyon = [1,2,3,4,5,6];
// let Hosen = noyon.filter(Noyon);
// function Noyon (x){
//     return x < 4
// }
// console.log(Hosen);

// let number = [1,2,3,4,5,6,7,8,9];
// let sum = number.filter(num);
// function num (x) {
//     return x;
// }
// console.log(sum);

// let num = [10,15,20,30,40,50];
// let sum = num.filter(Number);
// function Number (x) {
//     return x >= 10;
// }
// console.log(sum);

// ?22 Asynchronous Vs Synchronous:

// let x = () => {
//     console.log(x);
// }

// let dataLoading = () => {
//     console.log(y);
// }

// let y = () => {
//     setTimeout(dataLoading, 2000)
// }

// let z = () => {
//     console.log(z);
// }

// x();
// y();
// z();

// ?23 CallBack and Higher Order Function:

// let x = (someting) => {
//     console.log(someting);
// }

// let HigherOrderFumn = (Name, Class, CallBack) => {
//     const Details = `My name is ${Name} and I read in class$ {Class}`
//     CallBack(Details)
// }
// HigherOrderFumn('Noyon','13',x);

// ?24 Try, Catch, Throw, Finally Keywords:

/*try{
    console.log('Hellow');
    //console.log(Hi);
    let age = 16;
    if (age < 18){
        throw 'How are Baby'
    }
    else if (age > 18){
        throw 'How are you young man'
    }
}
catch(NoyonError){
    console.log(NoyonError)
}
finally{
    console.log('How are you boy');
}*/

// ?25 Promise:

// let p = new Promise ((reslove,reject) => {
//     let a = 1 + 2;
//     if ( a == 3 ){
//         reslove ('success')
//     }else{
//         reject('Failed')
//     }
// })
// p.then((message)=>{
//     console.log('i am a ' + message);
// }).catch((message)=>{
//     console.log('i am a ' + message);
// })

// const promise = new Promise ((reslove,reject) => {
//     const number = 1 - 1;
//     if ( number === 0 ){
//         reslove ("Noyon is a good Programmer")
//     }
//     else{
//         reject ("Noyon is Bad Programmer")
//     }
// });
// promise.then ((message) => {
//     console.log(message);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.all([p,promise]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

//-------------------------------------------------------------------------------------------------//

// ?26 Same number check korar variable:
// a = 4;
// b = '4';
// console.log(a==b);

// ?26 Same string check korar variable:
// a = 4;
// b = '4';
// console.log(a===b);

// !26 Not Equals to variable:
// a = 4;
// b = 7;
// console.log(a!=b);

// !26 Logical end variable:
// a = 4;
// b = 5;
// console.log(a!=b && b!=a);

// !26 Logical or variable:
// a = 4;
// b = 5;
// console.log(a!=b || b==a);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// ?27 foreach loop:

// let number = [10,20,30,40,50];
// number.forEach(function(x){
//     console.log(x);
// });

//------------------------------------------------------------------------------------------------------------------//

// let number1 = [10,20,30,40,50];
// console.log(number1);
// number1.forEach(function(x,index,array){
//     array[index] = x + 5;
// });
// console.log(number1);

// ?28 foreach, map and filter array function:
// let number = [2,3,4,5,6,7];
// let squareNumber = [];
// number.forEach(function(x){
//     squareNumber.push(x*x)
// });
// console.log(squareNumber);

// !map
// let num = [10,20,30,40,50];
// let newNamber = num.map(function(x){
//     return x*x;
// });
// console.log(newNamber);

// !filter
// let number = [10,20,4,60,54,6,8,2,12];
// let filterNumber = number.filter(function(x){
//     return x >= 10;
// });
// console.log(filterNumber);

//  ?29 array methods | find() | findIndex():
// let number = [41,8,4,6,3,67,7];
// const findNumber = number.find(x => x%2 === 0);
// console.log(findNumber);


// let number = [11,55,66,45,32,56,74];
// let findNumber = number.find(x => x / 2 === 28);
// console.log(findNumber);

// let num = [1,8,6,4,7,6,4,2,5,8];
// let sum = num.find(x => x * 2 === 14);
// console.log(sum);



// let number = [5,65,85,48,6,54];
// const myNumber = (x) => {
//     if(x % 2 === 0){
//         return x;
//     }
// };
// let findNumber = number.find(myNumber);
// let findIndexNumber = number.findIndex(myNumber);
// console.log(findNumber);
// console.log(findIndexNumber);

// let studentsId = [
//     { id: 101, gpa: 4.44 },
//     { id: 103, gpa: 3.44 },
//     { id: 102, gpa: 2.44 },
//     { id: 105, gpa: 5.44 },
// ];

// const bestGpa = studentsId.find(x => x.gpa > 5);
// console.log(bestGpa);

// ?30 String methods | startsWith, endsWith, includes:
// let message = "My name is Shahadat Hosen Noyon";
// console.log(message.startsWith("My"));
// console.log(message.endsWith("Noyon"));
// console.log(message.includes("Shahadat Hosen"));

// ?31 async await function in javascript1:
// console.log("Welcome to New Programmer Noyon");
// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("task One is completed");
//     })
// };

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("task Two is completed")
//         }, 2000);
//     })
// };

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         resolve("task Three is completed");
//     })
// };

// async function callAllTask() {
//     const t1 = await taskOne();
//     console.log(t1);
//     const t2 = await taskTwo();
//     console.log(t2);
//     const t3 = await taskThree();
//     console.log(t3);
// }
// callAllTask()
// console.log("Bye Bye Task");

// console.log("welcome to async and await Javascript");

// const taskOne = () => {
//     return new Promise((reslove, reject) => {
//         reslove("Task one is Completed")
//     })
// }
// const taskTwo = () => {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove("Task two is completed")
//         }, 2000);
//     })
// }


// const taskThree = () => {
//     return new Promise((reslove, reject) => {
//         reject("Taskk Three is not completed")
//     })
// }
// async function callAllTask (){
//     try{
//         const t1 = await taskOne();
//     console.log(t1);

//     const t2 = await taskTwo();
//     console.log(t2);

//     const t3 = await taskThree();
//     console.log(t3);
//     }catch(error){
//         console.log(error);
//     }
// }
// callAllTask()
// console.log("bye Bye Javascript");