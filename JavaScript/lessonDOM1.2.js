// Yeni Element Yaratmaq

const newLink = document.createElement("a");
const card = document.getElementsByClassName("card")[0];

newLink.id = "clear-todos";
newLink.className = "button";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

//Text Content

// newLink.textContent = "Fərqli səhifəyə get";

//Text Node - Elementin içinə yazı əlavə etmək

//const text = document.createTextNode("");
//card.appendChild(text);
// console.log(card);
//-----------------------------------------//

newLink.appendChild(document.createTextNode("Fərqli səhifəyə get"));

card.appendChild(newLink);
console.log(newLink);


// //Dinamik Element silmek -------//

// const todoList = document.querySelector("");
// const todos = document.querySelectorAll("");


// // Remove Metodu

// todos[1].remove();

//Remove Child

// todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todos[3]);

// console.log(todos);
// console.log(todoList);
//============================//

const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element = todoInput.classList;

todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");  //Əlavə etmək
todoInput.classList.remove("form-control"); // Silmək
element = todoInput;

element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Start");
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name");
element = todoInput;
// element = todoInput.hasAttribute("name");
console.log(element);

//================================//
// Ikinci hisse//
// 1. Event Listeners ve Event Objesi Kullanma

const filterInput = document.getElementById("filter");

const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);
function submitForm(e){
    console.log("Submit Event");

    e.preventDefault();
}

// filterInput.addEventListener("focus",function(e){
   
//    console.log(e); 
//    console.log(e.type);
//    console.log(e.target);
//    console.log(e.target.placeholder);
//    console.log(e.target.className);
//     // console.log("Start");
// })
// filterInput.onfocus = function(){
//     console.log("Start");
// }

//======================================//

// 2. Keyboard Eventleri - KeyUp,KeyPress,KeyDown

//Keyboard Eventleri
 //ketpress
document.addEventListener("keypress",run);

function run(e){
    // console.log(e.which); //ASCII cədvəli
    console.log(e.key);
    // console.log("Salam");
}

//keydown
document.addEventListener("keydown",run);

function run(e){
    
    console.log(e.key);
   
}

//keyup
document.addEventListener("keyup",run);

function run(e){
    
    console.log(e.key);
    
}

//Example

const header = document.querySelector(".card-header");
const todoInput1 = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    // console.log(e.target.value);
}

// 3. Mouse Eventleri //

const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

//Click Event

title.addEventListener("click",run);

//Double Click

title.addEventListener("dblclick",run);

//Mouse Down

title.addEventListener("mousedown",run);

//Mouse Up

title.addEventListener("mouseup",run);

//Mouse Over

title.addEventListener("mouseover",run);

//Mouse Out

title.addEventListener("mouseout",run);

cardBody.addEventListener("mouseover",run);
cardBody.addEventListener("mouseout",run);

// Mouse Enter and Mouse Leave 

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

function run(e) {
    console.log(e.type);
}

// 4. Input Eventleri //

// const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Yuklendi");
// }

//Focus

filterInput.addEventListener("focus",run);

//Blur

filterInput.addEventListener("blur",run);

//Paste
filterInput.addEventListener("paste",run);

// Copy
filterInput.addEventListener("copy",run);

//Cut
filterInput.addEventListener("cut",run);

//Select
filterInput.addEventListener("select",run);

function run(e){
    console.log(e.type);
}

//5. Event Capturing ve Bubbling Olayları

//Event Bubbling

 document.querySelector(".container").addEventListener("click",function(){
    console.log("Div Container");
 })
 document.querySelector(".card.row").addEventListener("click",function(){
    console.log("Card Row");
 })
 document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("Card Body");
 })

 //Event Capturing or Delegation 

 const cardbody = document.querySelectorAll(".card-body")[1];

 cardbody.addEventListener("click",run);

 function run(e){
    if(e.target.className==="fa fa-remove"){
    console.log("delete");
    }
     if(e.target.id==="filter"){
        console.log("filter work");
        }
        if(e.target.id === "clear-todos"){
            console.log("All DELETE");
        }


 }


