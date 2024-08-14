// ------------------------------Browser object model----------------------------------- \\

// ?01 Browser object model:
// let mydiv = document.querySelector(".mydiv");

// !href
// let para1 = mydiv.children[0];
// para1.textContent = location.href;

// !protocol
// let para2 = mydiv.children[1];
// para2.textContent = location.protocol

// !hostname
// let para3 = mydiv.children[2];
// para3.textContent = location.hostname;

// !port
// let para4 = mydiv.children[3];
// para4.textContent = location.port;

// !pathname
// let para5 = mydiv.children[4];
// para5.textContent= location.pathname;

// !assign
// let visitsite = document.querySelector("#btn");
// visitsite.addEventListener("click",function(){
//     location.assign("https://www.noyonofficial.com");
// });

// ?02 popup boxes - alert, confirm, prompt :

// alert("Enter your name");

// function confirmMessage(){
//     let name = confirm("Delet thid content");
//     if(name){
//         console.log("Deleted");
//     }
//     else{
//         console.log("not deleted");
//     }
// };
// confirmMessage();

// function writeSomething() {
//     let h1 = document.createElement("h1");
//     let Text;

//     let name = prompt("Enter your full name:");

//     if (name == null || name == "") {
//         Text = "No name found"
//     }
//     else {
//         Text = name;
//     }
//     let textNode = document.createTextNode(Text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);
// }
// writeSomething();

// function myFunction(){
//     let p = document.createElement("p");
//     let text;

//     let name = prompt("Enter your first name:");

//     if(name === null || name === ""){
//         text = "No name is found"
//     }
//     else{
//         text = name;
//     }

//     let textNode = document.createTextNode(text);
//     p.appendChild(textNode);
//     document.body.appendChild(p);
// }
// myFunction();

// ?03 Timing events - setTimeout, setInterval:
// let button = document.querySelector("button");
// let para   = document.querySelector("p");

// button.addEventListener("click", saveHere);

// function saveHere(){
//     para.textContent = "Your are save this PDF file";

//     setTimeout(() => {
//         para.textContent = "";
//     }, 3000);
// }

// button.addEventListener("click",function(){
//     para.textContent = "You are save this content";

//     setTimeout(() => {
//         para.textContent = "";
//     }, 2000);
// });

// let button = document.querySelector("button");
// let p = document.querySelector("p");

// button.addEventListener("click", function(){
//     let count = 0;
//     p.textContent = count;

//     setInterval(() => {
//         count++;
//         p.textContent = count;
//     }, 1000);
// });

// ------------------------- Create a Digital Clock in Javascript ---------------------- \\

// let Button = document.querySelector("button");
// let para = document.querySelector("p");

// Button.addEventListener("click", digitalClock)

// function digitalClock(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     minutes = setTime(minutes);
//     seconds = setTime(seconds);

//     let time = hours + ":" + minutes + ":" + seconds;

//     para.textContent = (time);

//     setInterval(digitalClock, 1000);
// };

// function setTime(value){
//     if(value < 10){
//         value = "0" + value;
//     }
//     return value;
// };

//----------------------------Error Handle in javascript --------------------------

// ?01 try, catch, finally error handle:
// try {
//     alert("Hablu is a Programmer");
//     alert(x);
// }catch(error){
//     alert("something was rong");
//     console.log("something is rong");
//     console.log(error);
// }finally{
//     alert("Noyon is a New Programmer");
// };

// ?02 throw error handle:
// document.querySelector("button").addEventListener("click",function(){
//     let number = document.querySelector("input").value;
//      console.log(number);
//     try{
//         if(number < 4){
//             throw "Number is to low"
//         }else if(number > 8){
//             throw "Number is to high"
//         }
//         else{
//             console.log(number);
//         }
//     }catch(err){
//         console.log(err);
//     }
// });
