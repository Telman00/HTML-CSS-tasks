//wINDOWS Object
let value;

value = document;
value = document.all;
value = document.all.length;
value = document.all[0];
value = document.all[6];
value = document.all[document.all.length - 1];

value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;
console.log(value);
const elements = document.all; // HTML Collection

// for(let i = 0; i < elements.length;i++) {
//       console.log(elements[i]);
// }
// elements.forEach(function(element) {
//     console.log(element);
// });

const collections = Array.from(document.all);
console.log(typeof collections);
collections.forEach(function(collection){
    console.log(collection);
})



//  console.log(elements);

//Document Object//

let value1;

//Scripts 

value1 = document.scripts;
value1 = document.scripts.length;
value1 = document.scripts[0];

//Link

value1 = document.links;
value1 = document.links[1];
value1 = document.links[document.links.length-1];
// // value1 = document.links[document.links.length-1].getAttribute("class");
// // value1 = document.links[document.links.length-1].getAttribute("href");
// value1 = document.links[document.links.length-1].className;
// value1 = document.links[document.links.length-1].classList;

//Forms

value1 = document.forms; 
value1 = document.forms.length;
value1 = document.forms;  
value1 = document.forms[0]; 
value1 = document.forms["form"];
// value1 = document.forms[0].id;
// value1 = document.forms[0].getAttribute("id");
// value1 = document.forms[0].name;
// value1 = document.forms[0].getAttribute("name");

// value1 = document.forms[0].method
console.log(value1);

// Element Id gore secmek

let element;

element = document.getElementById("element");
element = document.getElementById("task");

// Element Class gore secmek

element = document.getElementsByClassName("value1");
element = document.getElementsByClassName("card");

//Element Tag gore secmek

element = document.getElementsByTagName("div");

// Query Selector - CSS Selector

element = document.querySelector("#task");

element = document.querySelector(".value1"); 

element = document.querySelector("h1");
element = document.querySelector("div");
// querySelectorAll-butun elementleri sec
element = document.querySelectorAll(".value1");

element.forEach(function(el){
    console.log(el);
})
console.log(element);

//---------------------------------------//

const element1 = document.querySelector("#task");

//  Element xüsusiyyətləri
console.log(element1.id);
console.log(element1.className);
console.log(element.classList);
console.log(element1.classList[1]);
console.log(element1.textContent);
console.log(element1.innerHTML);
console.log(element1.href);

console.log(element1.style); 

//Style və Element xüsusiyyətlərini dəyişdirmək

// element.className = "" //className dəyişdirmək
// element.style.color = "red" // rəng dəyişmək
// element.style.marginLeft = "" // ölçü dəyişmək
// element.href = "www.google.com"; // link 
// element.target = "_blank";
console.log(element1.textContent);
element1.textContent = "Delete";
// element1.textContent = <span>Delete</span>;
element1.innerHTML = "<span style = 'color: green'>Delete</span>"

const elements1 = document.querySelectorAll(".value1");
console.log(elements1); //Node List

elements1.forEach(function(el){
    el.style.color = "red";
    el.style.background = "blue";
})

// console.log(element1);

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el){
    el.style.backround = "red";
    el.style.color = "blue";
})

//-------------------------------------//

const todoList = document.querySelector(".value1");
const todo = document.querySelector(".value1:nth-child(1)");
const card = document.querySelector("card");

value = todoList;
value = todo;
value = card;

// Child Nodes - Text


value = todoList.childNodes;
value = todoList.childNodes[0];

//Children - Element

value = todoList.children;
value = todoList.children[1];
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[2].textContent = "Deyisdi";



value = card;
// value = card.children;
//value = card.children[2].children[1.textContent = "Deyisdi yene"];

value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;

value = todoList.children.length;
value = todoList.childElementCount;

value = card;
// value = card.parentElement;
// value = card.parentElement.parentElement;

//Element Sibling
value - todo; 
value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

// value = todo.previousElementSibling;
// value = todo.previousElementSibling.previousElementSibling; //Null

console.log(value);











