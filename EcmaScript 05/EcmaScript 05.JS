/*------------------------------------ Start JavaScript Learning -------------------------------------*/

// !01 String Type Variable:
// var MyName = 'Shahadat Hosen Noyon';
// console.log(MyName);


// !02 Number Type Variable:
// var MyNumber = '01585735520';
// console.log(MyNumber);


// !03 Boolean Type Variable:
// var BoolType = true;
// console.log(BoolType);

/*----------------------------------------------------------------------------------------------------*/

// !04 ToUpperCase Variable:
// let Letter = 'i live in bangladesh at chattogram and my village name is karnapuli,charlakhya';
// console.log(Letter.toUpperCase());


// !05 ToLowerCase Variable:
// let Letter = 'I LIVE IN BANGLADESH AT CHATTOGRAM AND MY VILLAGE NAME IS KARNAPULI,CHARLAKHYA';
// console.log(Letter.toLowerCase());


/*----------------------------------------------------------------------------------------------------*/

// !06 Split (list taka laster kico bad dawa) Type Variable:
// let Name = 'noyon, korim, hakim, esan, jamal';
// console.log(Name.split('jamal'))

// !07 IndexOf (list are modda koi namber position a aca ata check kora) Type Variable:
// let Name = 'noyon, korim, hakim, esan, jamal';
// console.log(Name.indexOf("korim"));


/*----------------------------------------------------------------------------------------------------*/

// !08 ParseFloat / ParseInt (string type ka number type a porinoto kora) Type Variable:
// let num1 = '50';
// let num2 = '40';

// num1 = parseInt(num1);
// num2 = parseFloat(num2);
// console.log(num1 + num2);

// !09 (Number type ka string type a porinoto kora) Type Variable
// let str1 = 50;
// let str2 = 50;

// str1 = '' + str1;
// str2 = '' + str2;
// console.log(str1 + str2);


/*----------------------------------------------------------------------------------------------------*/


// !10 Operators +++ Type Variable:
// let num1 = 60;
// let num2 = 40;
// console.log(num1 + num2);

// !10 Operators --- Type Variable:
// let num1 = 60;
// let num2 = 40;
// console.log(num1 - num2);

//!10 Operators *** Type Variable:
// let num1 = 6;
// let num2 = 4;
// console.log(num1 * num2);

// !10 Operators /// Type Variable:
// let num1 = 60;
// let num2 = 6;
// console.log(num1 / num2);

// !10 Operators %%% Type Variable:
// let num1 = 19;
// let num2 = 4;
// console.log(num1 % num2);



/*----------------------------------------------------------------------------------------------------*/


// !11 Math.abs Type Function:
// let num1 = -19;
// let sum1 = Math.abs(num1);
// console.log(sum1);

// !12 Math.Round Type Function:
// let TotalMember = 11;
// let Voter = 0.6;
// let sum = Math.round(Voter);
// console.log(sum);

// !13 Math.ceil Type Function:
// let TotalMember = 10;
// let Voter = 0.02;
// let sum = Math.ceil(Voter);
// console.log(sum);

// !14 Math.Floor Type Function:
// let TotalMember = 11;
// let Voter = 0.999;
// let sum = Math.floor(Voter);
// console.log(sum);

// !15 Math.Random Type Function:
// let Lotary = Math.random()*101;
// console.log(Lotary);



/*----------------------------------------------------------------------------------------------------*/

// !16 If Condition:
// let a = 99;
// let b = 88;
// if(a>b){
//     console.log('Computer are mata tik aca')
// }

// !17 Else Condition:
// let x = 98;
// let y = 99;
// if(x>y){
//     console.log('Computer is running');
// }
// else{
//     console.log('Computer is not running');
// }

// !18 If Else If Else Condition:
// let a = 18;
// let b = 19;
// if(a>b){
//     console.log("Noyon is not good Programmer");
// }
// else if(a!=b){
//     console.log("Noyon is a good Programmer");
// }
// else if(a=b){
//     console.log("Today your job is comfirm");
// }
// else{
//     console.log("Noyon yours luck is very bad");
// }



// !19 Switch Condition:
// let a = 1;
// switch (a) {
//     case 0:
//         console.log('Zero');
//         break;
//     case 1:
//         console.log(''One');
//         break;
//     case 2:
//         console.log('Two');
//         break;
//     case 3:
//         console.log('Three');
//         break;
//     default:
//         console.log('Not a Valid Number');
// }

// let letter = "a";

// switch (letter) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonent");
// }

/*----------------------------------------------------------------------------------------------------*/

// !20 Date Object:
// let myDate = new Date();
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getMinutes());

/*----------------------------------------------------------------------------------------------------*/

// !21 Array:
// let MyName = ['Shahadat','Hosen','Noyon'];
// console.log(MyName[2]);

// let A = ['Noyon','korim','Tohin'];
// A[0] = 'Rohim';
// console.log(A);

// let num = new Array()
// for(let i = 0; i < 7; i++){
//     num[i] = 7;
// }
// let sum = 0;
// for(let i = 0; i < 7; i++){
//     console.log(num[i]);
//     sum = sum + num[i];
// }
// console.log(sum);

// !22 Push Array:
// let Number = [875,948,234,543,456];
// Number.push(11111);
// console.log(Number);

// !23 Pop Array:
// let Name = ['noyon','josim','korim'];
// Name.pop();
// console.log(Name);

// !24 Shift Array:
// let Hi = ['mona','sona','jano','mano'];
// Hi.shift();
// console.log(Hi);

// !25 UnShift Array:
// let Hi = ['mona','sona','jano','mano'];
// Hi.unshift('jano paki');
// console.log(Hi);

// !26 Slice Array:
// let Hello = ['Kaiser','Munna','Noyon','Tarak','Jamal','Abdulla','Jogon'];
// console.log(Hello.slice(1,6));

// !27 Splice Array:
// let Nanno = ['Kaiser','Munna','Noyon','Tarak','Jamal','Abdulla','Jogon'];
// Nanno.splice(1,5, 'Shahadat Hosen Noyon');
// console.log(Nanno);

//  !Concat Array:
// let country1 = ['Bangladesh','India'];
// let country2 = ['Canada','Australia'];
// let country  = country1.concat(country2);
// console.log(country);


// !sort() Array:
// let name = ['Noyon','Kaiser', 'Rafi','Joynal','Rohim']
// let sortName = name.sort();
// console.log(sortName);

// let number = [1, 4, 7, 9, 2, 5, 3, 6, 8];
// number.sort(function (a, b) {
//     return a - b;
// });
// console.log(number);

// let bumber = [1, 4, 7, 9, 2, 5, 3, 6, 8];
// bumber.sort(function (a, b) {
//     return b - a;
// });
// console.log(bumber);

/*----------------------------------------------------------------------------------------------------*/

// !28 For Loops:
// let i = 0;
// for(let i = 0; i<=11; i++){
//     console.log(i);
// }

// let num = 0;
// for (let i = 1; i <= 10; i = i + 1) {
//     console.log(i);
// }

// let sum = 0;
// for (let x = 1; x <= 10; x++) {
//     sum = sum + x;
// }
// console.log(sum);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (i = 0; i < 5; i++) {
//     console.log(num[i]);
// }

// !29 For in Loops:
// let person = {
//     FirstName: "Shahadat Hosen",
//     lastName: "Noyon",
//     age: 21
// };

// for(let x in person){
//     console.log(person[x]);
// }


// !30 For of Loops:
// for (const singal of "Noyon") {
//     console.log(singal);
// }


// let cars = ['BMW',"VOLVO","TOYOTA"];
// for(let x of cars){
//     console.log(x);
// }


// !31 While Loops:
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let x = 0;
// let y = 0;
// while (x <= 9) {
//     x++
//     y = y + x;
// }
// console.log(y);

// let num = 0;
// let sum = 0;
// while (num <= 40) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log(num)
//         sum = sum + num;
//     }
//     num++
// }
// console.log(sum);


// !32 Do While Loops:
// let i = 5;
// do {
//     console.log(i < 7)
//     i++;
// } while (i < 5);


// let y = 5;
// do{
//     console.log(y < 2);
//     y++;
// }while(y < 5);

/*----------------------------------------------------------------------------------------------------*/

// !30 Function:
// function fun(){
//     let x = 5;
//     let y = 8;
//     console.log(x * y);
// }
// fun();
// fun();

// function fun(num){
//     let result = num * num;
//     console.log(result);
// }
// fun(2);
// fun(6);

// !31 Function:
// function fun (Num1, Num2){
//     let Mote = Num1 + Num2;
//     console.log(Mote)
// }
// fun(8,12);
// fun(8,8);
// fun(34,1);

// function myfunction(num1,num2){
//     let total = num1 * num2;
//     console.log(total);
// }
// myfunction(4,7);
// myfunction(3,9);

// !32 Function:
// function fun(Num1){
//     let total = Num1 * 8;
//     return total;
// }
// let x = fun(7);
// console.log(x);

// function myFun(x, y) {
//     let result = x * y;
//     return result;
// }
// let myfunction = myFun(4,5);
// console.log(myfunction);


// !IIFE (Immediately Invokeable Expressions Function) Function:

// function display(){
//     console.log('Shahadat Hosen Noyon')
// }
// display();

// (function display(Hablu){
//     console.log(Hablu);
// })("Hello World");

// (function myFun(string){
//     console.log(string);
// })("Anisur Rohman is a good Developer");

/*----------------------------------------------------------------------------------------------------*/

// !33 Object:
let MyInfo = {Name:'Noyon', Address:'Karnapuli', Number: '01585735520'};
console.log(MyInfo.Name);
console.log(MyInfo.Address);
console.log(MyInfo.Number);

// !34 Object:

// const myInformation = {
//     firstName: "Shahadat",
//     midelName: "Hosen",
//     lastsName: "Noyon",
//     age: 21,
//     fullInformation: function () {
//         return "My name is " + this.firstName + " " + this.midelName + " " + this.lastsName + " " + "and I am a " + this.age;
//     }
// }
// console.log(myInformation.fullInformation());

/*----------------------------------------------------------------------------------------------------*/

// !35 Ternary Operator:
// let num = 55;
// let MyCondition = (num < 10) ? "Ami coto vai" : "ami boro vai";
// console.log(MyCondition);

// let number = 2;
// let result = number > 0 ? "Positive" : "Nagetive";
// console.log(result);

// !36 Break statement:
// for(var i = 0; i <= 10; i ++){
// if(i == 7){
//   break;
// }
// console.log(i);
// }

// for (i = 0; i <= 11; i++){
//     if(i == 8){
//         break;
//     }
//     console.log(i);
// }

// !37 Continue statement:
// for(i=0; i<=12; i++){
//     if(i == 8){
//         console.log('mono bat kaiso');
//         continue;
//     }
//     console.log(i);
// }

// for(x = 0; x <= 11; x++){
//     if(x == 6){
//         console.log("Computer is runing")
//         continue;
//     }
//     console.log(x);
// }

// !38 Expression Function:
// let ExpressionFun = function (message1, message2){
//     console.log(message1, message2);
// }
// ExpressionFun('I love you', 'I hate You');

/*----------------------------------------------------------------------------------------------------*/

// !39 One Dimensional Array:
// function highestScores(){
//     let max = scores[0];
//     for(i = 1; i < scores.length; i++){
//         if(max < scores[i]){
//             max = scores[i];
//         }
//     }
//     return max;
// }
// let scores = [10,50,30,90,40,60];
// let Noyon = highestScores(scores);
// console.log(Noyon);

// !40 Two Dimensional Array:
// function highestScores(scores) {
//     let max1 = scores[0][0];
//     let max2 = scores[0][1];
//     for (i = 1; i < scores.length; i++) {
//         if (max2 < scores[i][1]) {
//             max2 = scores[i][1];
//             max1 = scores[i][0];
//         }
//     }
//     return max1;
// };
// let scores = [
//     ['Noyon', 26],
//     ['Rafi', 87],
//     ['Hablu', 99],
//     ['Kaiser', 48],
//     ['Abdullah', 94]
// ]
// let Name = highestScores(scores);
// console.log(Name);


/////// ES6 Modules ::::::

//export let NewMessage = "Kabjab Pati";