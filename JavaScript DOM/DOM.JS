//////////////////////////// JavaScript DOM Tutorial \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//...............................................................................\\

// //01 GetElementById/GetElementsByTagName/GetElementsByclassName :-------------------------------------

// document.getElementById("heading1").innerHTML = "Hello World.";
// document.getElementsByClassName("heading1")[0].innerHTML = "Hello Noyon.";
// document.getElementsByTagName("h1")[2].innerHTML = "Programmer Noyon.";

// //02 querySelector :--------------------------------------
// document.querySelector("#heading1").innerHTML = "My Name is Noyon";
// document.querySelector(".heading1").innerHTML = "My name is Hablu";
// document.querySelector("h1").innerHTML = "My name is Abdullah";
// document.querySelectorAll("h1")[0].innerHTML = "Baba tomar dorbara sob pagoler kala"

//01 onclick event :
// let button = document.querySelector("#btn");

// function btn1(){
//    button.innerHTML = "I am a Button 1"
// };

// function btn2(){
//     button.innerHTML = "I am a Button 2"
//  };

//  function btn3(){
//     button.innerHTML = "I am a Button 3"
//  };

// let Button = document.querySelector(".Button");
// function button1(){
//     Button.innerHTML = "I am a Button 1"
// };
// function button2(){
//     Button.innerHTML = "I am a Button 2"
// };
// function button3(){
//     Button.innerHTML = "I am a Button 3"
// };
// function button4(){
//     Button.innerHTML = "I am a Button 4"
// };
// function button5(){
//     Button.innerHTML = "I am a Button 5"
// };

// //onclick event 02:
// let button = document.querySelector("#img");

// function pic1(){
//    button.src = "111.jpg";
// };

// function pic2(){
//     button.src = "222.jpg";
//  };

// //03 Css Style in Javascript:
// let link = document.querySelector("a");
// link.style.color = "red";
// link.style.fontSize = "2rem";
// link.style.textDecoration = "none";
// link.style.color = "Black";
// link.style.fontWeight = "Bold";

// //04 Html add,remove in Javascript:
// let heading3 = document.createElement("h1");
// let text = document.createTextNode("This is Heading 2");
// heading3.appendChild(text);

// let heading4 = document.createElement("h1");
// let text1 = document.createTextNode("This is Heading 3");
// heading4.appendChild(text1);

// let div = document.getElementById("div");
// div.appendChild(heading3);
// div.appendChild(heading4)

// let heading2 = document.getElementsByTagName("h1")[1];
// div.removeChild(heading2);

// let heading0 = document.createElement("h1");
// let text0 = document.createTextNode("This is Heading 0");
// heading0.appendChild(text0);

// let heading1 = document.getElementsByTagName("h1")[0];
// div.insertBefore(heading0,heading1);

//----------------------------------------------------------------------------------------//

// document.getElementById("div").classList;

// document.getElementById("div").classList.add("MongoDB");

// document.getElementById("div").classList.remove("myclass");

// //05 List select in Javascript:
// let students = document.querySelector(".mylist");
// let student1  = students.querySelector(".my-list1");

// //Downwards Children:
// let students = document.querySelector(".mylist");
// let student2 = students.children[0];

// //upWards - ParentElement:
// let student3 = document.querySelector("li");
// let students = student3.parentElement;

// //sideWards - nextElementSibling, PrecousElementSibling:
// let student4 = document.querySelector("li");
// let student5 = student4.nextElementSibling;

// let student7 = document.querySelectorAll("li")[2];
// let student8 = student7.previousElementSibling;

// //sideWays - parentElement, children, index:
// let studenta = document.querySelector("li");
// let studentb = studenta.parentElement;
// let studentc = studentb.children[2];

// //06 image slider:
// let img = ["111.jpg","222.jpg","333.png","444.png"];
// let imgTag = document.querySelector("img");

// let count = 0;
// function next(){
//     count++;
//     if(count>=img.length){
//         count = 0;
//         imgTag.src = img[count];
//     }
//     else{
//         imgTag.src = img[count];
//     }
// }
// function previous(){
//     count--;
//     if(count<0){
//         count = img.length - 1;
//         imgTag.src = img[count];
//     }
//     else{
//         imgTag.src = img[count];
//     }
// }

// //07 Changing CSS style dynamically:
// let style = document.querySelector("h1");
// function addStyle(){
//     style.classList.add("js-style");
// };
// function removeStyle(){
//     style.classList.remove("js-style");
// };

// //08 Event Listener:
// let click = document.querySelector("button");
// click.addEventListener("click", myfun);

// function myfun(){
//     alert("Hello Proggrammer");
// }

// // ---------------------------------------------------

// let events = document.querySelector("h1");
// events.addEventListener("mouseover", function(){
//     events.classList.add("js-style");
// });

// events.addEventListener("mouseout", function(){
//     events.classList.remove("js-style");
// });

// //09 Event Listeners with multiple elements:
// for (let i = 0; i < 3; i++) {
//     document.querySelectorAll(".button")[i].addEventListener("click", function () {
//         let text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + " clicked."
//     });
// };

// let length = document.querySelector(".button").length;
// for(let i = 0; i < length; i++){
//     document.querySelectorAll(".button")[i].addEventListener("click",function(){
//         let text = this.innerHTML;
//         let heading = document.querySelector("h1");
//         heading.innerHTML = text + " clicked."
//     });
// };

// //10 audio play in javascript:
// for (let i = 0; i < 3; i++) {
//     document.querySelectorAll(".btn")[i].addEventListener("click", function () {
//         let text = this.innerHTML;

//         switch (text) {

// /* audio play korar sommoy switch - case are bitor var use korta hoba let use korla play hoba na*/

//             case "a":
//                 var audio = new Audio("sound/a.mp3");
//                 audio.play();
//                 break;

//             case "b":
//                 var audio = new Audio("sound/b.mp3");
//                 audio.play();
//                 break;

//             case "c":
//                 var audio = new Audio("sound/c.mp3");
//                 audio.play();
//                 break;
//         }
//     })
// };

// //11 add and remove animation in JavaScript:
// for (let i = 0; i < 3; i++) {
//     document.querySelectorAll(".btn")[i].addEventListener("click", function () {
//         let text = this.innerHTML;
//         audioplay(text);
//         animation(text);
//     });

// };
// function audioplay(text) {

//     switch (text) {
//         case "a":
//             var audio = new Audio("sound/a.mp3");
//             audio.play();
//             break;

//         case "b":
//             var audio = new Audio("sound/b.mp3");
//             audio.play();
//             break;

//         case "c":
//             var audio = new Audio("sound/c.mp3");
//             audio.play();
//             break;
//     }
// };

// function animation(text){
//     let addAnimation = document.querySelector("."+text);
//     addAnimation.classList.add("animation");

//     setTimeout(() => {
//         addAnimation.classList.remove("animation")
//     }, 1000);
// }

// //12 Keypress listener in JavaScript:
// let count = 0;
// document.querySelector("textarea").addEventListener("keypress", function (event) {
//     count++
//     let key = event.key;

//     document.querySelector("h1").innerHTML = "You have pressed: " + count;
// });

// //13 onchange event in javascript:
// let inputName = document.querySelector("input[name=name]");inputName.addEventListener("change",changeHandaler);

// function changeHandaler(event){
// console.log(event);
// console.log(event.type);
// console.log(event.target);
// console.log(event.target.value);
// console.log(event.target.className);
// }

// const program = document.querySelectorAll("input[name=program]");
// // console.log(program);

// Array.from(program).map((program) => {
//     program.addEventListener("change",programHandaler)
// });

// function programHandaler(e){
//     if(e.target.checked){
//         // console.log("checked");
//         console.log(e.target.value);
//     }
// };

// const department = document.querySelector("#department");
// // console.log(department);

// department.addEventListener("change",departmentHandalar);
// function departmentHandalar(e){
//     // console.log("selected");
//     console.log(e.target.value);
// };

// //14 onsubmit event in javascript:
// const form = document.querySelector("form");
// const name = form.querySelector("div #name");
// const email = form.querySelector("div #E-mail");
// const password = form.querySelector("div #password");

// form.addEventListener("submit", formHandalar);
// function formHandalar(e) {
//     e.preventDefault();
//     // console.log("submit");

//     const userInfo = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//     };
//     console.log(userInfo);
//     name.value = "";
//     email.value = "";
//     password.value = "";
// };

// //15 media events in javascript:
// const video = document.querySelector("video");
// video.addEventListener("canplay", function(){
//     console.log("canplay");
// });

// video.addEventListener("play", function(){
//     console.log("play");
// });

// video.addEventListener("playing", function(){
//     console.log("playing");
// });

// video.addEventListener("pause", function(){
//     console.log("pause");
// });

// video.addEventListener("volumechange", function(){
//     console.log("volumechange");
// });

// video.addEventListener("ended", function(){
//     console.log("Thanks for watching");
// });

// //16 load, unload, scroll, resize, toggle -> (details) Event in javascript:
// window.addEventListener("load",function(){
//     console.log("load");
// });

// window.addEventListener("unload",function(){
//     console.log("unload");
// });

// window.addEventListener("scroll",function(){
//     console.log("scroll");
// });

// window.addEventListener("resize",function(e){
//     // console.log("resize");
//     let widht = window.outerWidth;
//     let height = window.outerHeight;
//     console.log(`widht: ${widht},height: ${height}`);
// });

// let details = document.querySelector("details");
// details.addEventListener("toggle",function(e){
//     // console.log("toggle");
//     console.log(e.target.open);
// });

// //17 onclick, ondblclick, onmousedown, onmouseup, onmouseenter, onmouseleave, onmousemove, onmouseover - event in javascript:
// let div = document.querySelector("div");
// div.addEventListener("click",function(e){
// console.log("clicked");
// console.log(e.target);
// console.log(e.target.innerHTML);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.innerText);
// console.log(e.target.textContent);
// });

// div.addEventListener("dblclick",function(){
//     console.log("dblclicked");
// });

// div.addEventListener("mousedown",function(){
//     console.log("mousedown");
// });

// div.addEventListener("mouseup",function(){
//     console.log("mouseup");
// });

// div.addEventListener("mouseenter",function(){
//     console.log("mouseenter");
// });

// div.addEventListener("mouseleave",function(){
//     console.log("mouseleave");
// });

// div.addEventListener("mousemove",function(e){
// console.log("mousemove");
// console.log("mouseClientX = " + e.clientX, "mouseClientY =" + e.clientY);
// console.log("ClientX =" + e.offsetX, "ClientY =" + e.offsetY);
// });

// div.addEventListener("mouseover",function(){
//     console.log("mouseover");
// });

// let button = document.querySelectorAll(".button");
// // console.log(button);

// Array.from(button).map((button) => {
//     button.addEventListener("click", function(e){
// console.log(button);
// console.log(e.target);
// console.log(e.target.innerHTML);
// console.log(e.target.innerText);
// console.log(e.target.textContent);
// console.log(e.target.className);
//     })
// })

// //18 keydown, keyup, keypress, KeybordEvent in javascript:-- some propertice : key, keycode, code, shiftkey, ctrkey, repeat:

// => KeyPress = is not support in my Crome Browser.

// let textArea = document.querySelector("textarea");

// textArea.addEventListener("keydown", function(e){
// console.log("keydown");
// console.log(e.key);
// console.log(e.keyCode);
// console.log(e.code);
// if(e.shiftKey){
//     console.log("shift:"+ e.key);
// }
// if(e.repeat){
//     alert("Do not repeat")
// }
// });

// textArea.addEventListener("keyup", function(){
//     console.log("keyup");
// });

// //19 onblur, onfocus, onfocusin, onfocusout event:
// let input = document.querySelector("input");
// input.addEventListener("blur",function(e){
//     // console.log("blur");
//     // console.log(e.target.value);
//     input.value = e.target.value.toUpperCase();
// });

// input.addEventListener("focus",function(){
//     // console.log("focus");
// });

// input.addEventListener("focusin",function(){
//     console.log("focusin");
// });

// input.addEventListener("focusout",function(){
//     console.log("focusout");
// });

// //20 oncopy, oncut, onpaste ClipboardEvent:
// let input = document.querySelector("input");
// let ptag  = document.querySelector("p");

// input.addEventListener("copy",function(){
//     // console.log("copy this text");
//     ptag.innerText = "your are copy this text"
// })

// input.addEventListener("cut",function(){
//     // console.log("cut this text");
//     ptag.innerText = "your are cut this text"
// })

// input.addEventListener("paste",function(){
//     // console.log("paste this text");
//     ptag.innerText = "your are paste this text"
// })

// //21 ondragstart, ondrag, ondragend, ondragenter, ondragleave, ondrover, ondrop, DragEventDragEvent:

// const div = document.querySelector("div");
// const para = document.querySelector("p");

// para.addEventListener("drag",function(e){
//     e.dataTransfer.setData("Text", e.target.id);
// });

// div.addEventListener("dragover", function(e){
//     e.preventDefault();
// });

// div.addEventListener("drop", function(e){
//     let id = e.dataTransfer.getData("Text");
//     console.log("drag1");
//     div.appendChild(document.getElementById("drag1"));
//     e.preventDefault();
// });

// //22 media events in javascript:
// const video = document.querySelector("video");
// video.addEventListener("canplay", function(){
//     console.log("canplay");
// });

// video.addEventListener("play", function(){
//     console.log("play");
// });

// video.addEventListener("playing", function(){
//     console.log("playing");
// });

// video.addEventListener("pause", function(){
//     console.log("pause");
// });

// video.addEventListener("volumechange", function(){
//     console.log("volumechange");
// });

// video.addEventListener("ended", function(){
//     console.log("Thanks for watching");
// });

// //23 load, unload, scroll, resize, toggle -> (details) Event in javascript:
// window.addEventListener("load",function(){
//     console.log("load");
// });

// window.addEventListener("unload",function(){
//     console.log("unload");
// });

// window.addEventListener("scroll",function(){
//     console.log("scroll");
// });

// window.addEventListener("resize",function(e){
//     // console.log("resize");
//     let widht = window.outerWidth;
//     let height = window.outerHeight;
//     console.log(`widht: ${widht},height: ${height}`);
// });

// let details = document.querySelector("details");
// details.addEventListener("toggle",function(e){
//     // console.log("toggle");
//     console.log(e.target.open);
// });

// //24 onclick, ondblclick, onmousedown, onmouseup, onmouseenter, onmouseleave, onmousemove, onmouseover - event in javascript:
// let div = document.querySelector("div");
// div.addEventListener("click",function(e){
// console.log("clicked");
// console.log(e.target);
// console.log(e.target.innerHTML);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.innerText);
// console.log(e.target.textContent);
// });

// div.addEventListener("dblclick",function(){
//     console.log("dblclicked");
// });

// div.addEventListener("mousedown",function(){
//     console.log("mousedown");
// });

// div.addEventListener("mouseup",function(){
//     console.log("mouseup");
// });

// div.addEventListener("mouseenter",function(){
//     console.log("mouseenter");
// });

// div.addEventListener("mouseleave",function(){
//     console.log("mouseleave");
// });

// div.addEventListener("mousemove",function(e){
// console.log("mousemove");
// console.log("mouseClientX = " + e.clientX, "mouseClientY =" + e.clientY);
// console.log("ClientX =" + e.offsetX, "ClientY =" + e.offsetY);
// });

// div.addEventListener("mouseover",function(){
//     console.log("mouseover");
// });

// let button = document.querySelectorAll(".button");
// // console.log(button);

// Array.from(button).map((button) => {
//     button.addEventListener("click", function(e){
// console.log(button);
// console.log(e.target);
// console.log(e.target.innerHTML);
// console.log(e.target.innerText);
// console.log(e.target.textContent);
// console.log(e.target.className);
//     })
// })

// //25 keydown, keyup, keypress, KeybordEvent in javascript:-- some propertice : key, keycode, code, shiftkey, ctrkey, repeat:

// => KeyPress = is not support in my Crome Browser.

// let textArea = document.querySelector("textarea");

// textArea.addEventListener("keydown", function(e){
// console.log("keydown");
// console.log(e.key);
// console.log(e.keyCode);
// console.log(e.code);
// if(e.shiftKey){
//     console.log("shift:"+ e.key);
// }
// if(e.repeat){
//     alert("Do not repeat")
// }
// });

// textArea.addEventListener("keyup", function(){
//     console.log("keyup");
// });

// //26 onblur, onfocus, onfocusin, onfocusout event:
// let input = document.querySelector("input");
// input.addEventListener("blur",function(e){
//     // console.log("blur");
//     // console.log(e.target.value);
//     input.value = e.target.value.toUpperCase();
// });

// input.addEventListener("focus",function(){
//     // console.log("focus");
// });

// input.addEventListener("focusin",function(){
//     console.log("focusin");
// });

// input.addEventListener("focusout",function(){
//     console.log("focusout");
// });

// //27 oncopy, oncut, onpaste ClipboardEvent:
// let input = document.querySelector("input");
// let ptag  = document.querySelector("p");

// input.addEventListener("copy",function(){
//     // console.log("copy this text");
//     ptag.innerText = "your are copy this text"
// })

// input.addEventListener("cut",function(){
//     // console.log("cut this text");
//     ptag.innerText = "your are cut this text"
// })

// input.addEventListener("paste",function(){
//     // console.log("paste this text");
//     ptag.innerText = "your are paste this text"
// })

// //28 ondragstart, ondrag, ondragend, ondragenter, ondragleave, ondrover, ondrop, DragEventDragEvent:

// const div = document.querySelector("div");
// const para = document.querySelector("p");

// para.addEventListener("drag",function(e){
//     e.dataTransfer.setData("Text", e.target.id);
// });

// div.addEventListener("dragover", function(e){
//     e.preventDefault();
// });

// div.addEventListener("drop", function(e){
//     let id = e.dataTransfer.getData("Text");
//     console.log("drag1");
//     div.appendChild(document.getElementById("drag1"));
//     e.preventDefault();
// });
