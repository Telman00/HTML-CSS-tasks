                                      // Javascript ilə DOM Manipulyasiyası //


//Window Object


let value;

value = document;
value = document.all;
value = document.all.length;
value = document.all[0];
value = document.all[6];
value = document.all[document.all.length-1];

value = document.all;
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;

value = document.URL;

value = document.characterSet;


//Part - 2//

value = document;

//Scripts

value = document.scripts;
value = document.scripts.length;
value = document.scripts[0];

//Links

value = document.links;
value = document.links.length;
value = document.links[0];
value = document.links[document.links.length-1];
value = document.links[document.links.length-1].getAttribute("class");
value = document.links[document.links.length-1].getAttribute("href");
value = document.links[document.links.length-1].className;
value = document.links[document.links.length-1].classList;

//Forms

value = document.forms;
value = document.forms.length;
value = document.forms[0];

value = document.forms[0].id;
value = document.forms[0].getAttribute("id");

value = document.forms[0].name;
value = document.forms[0].getAttribute("name");

value = document.forms[0].method;


console.log(value);

// Element Id görə seçmək

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Element Class görə seçmək

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("list-group-item")[0];

element = document.getElementsByClassName("card-header");

// Element Tag görə seçmək

element = document.getElementsByTagName("div");

// QuerySelector - CSS Selector //Tək bir element seçir


element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");
element = document.querySelector("li");
element = document.querySelector("div");

// QuerySelectorAll - Bütün elementləri seç

element = document.querySelectorAll(".list-group-item"); //Node List

element.forEach (function(el){
console.log(el);
});

console.log(element);


const element1 = document.querySelector("#clear-todos");

//Element xüsusiyyətləri

console.log(element1.id);
console.log(element1.className);
console.log(element1.classList);
console.log(element1.classList[0]);
console.log(element1.textContent);
console.log(element1.innerHTML);
console.log(element1.href);
console.log(element1.style);


//Style və Element xüsusiyyətlərini dəyişdirmək

// element1.className = "btn btn-primary";
// element1.style.color = "black";
// element1.style.marginLeft = "50px";
// element1.href = "https://www.google.com.tr";
// element1.target = "_blank";

// console.log(element1.textContent);
// element1.textContent = "Silmek lazimdi";
// element1.innerHTML = "<span style = 'color:red'>Silmek lazimdir</span>"


// console.log(element1);

// const elements = document.querySelectorAll(".list-group-item"); //Node List

// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.backgroundColor = "grey";
// });

// let element2 = document.querySelector("li:last-child");
// element2 = document.querySelector("li:nth-child(2)");
// element2 = document.querySelector("li:nth-child(3)");
// element2 = document.querySelector("li:nth-child(4)");
// element2 = document.querySelectorAll("li:nth-child(odd)");
// element2 = document.querySelectorAll("li:nth-child(even)");

// element2.forEach(function(el){
//     el.style.color ="yellow";
// el.style.backgroundColor = "red";
// })

// console.log(element2);

let value1;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector("list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value1 = todoList;
value1 = todo;
value1 = cardrow;


// Child Nodes - Text Daxil

value1 = todoList.childNodes;
value1 = todoList.childNodes[0];

// Children - Only Element

value1 = todoList.children;
value1 = todoList.children[0];
// value1 = todoList.children[2].textContent = "List";


value1 = cardrow;
value1 = cardrow.children;
// value1 = cardrow.children[2].children[1].textContent = "Listler";

value1 = todoList;

value1 = todoList.firstElementChild;
value1 = todoList.lastElementChild;

value1 = todoList.children.length;
value1 = todoList.childElementCount;

value1 = cardrow;
value1 = cardrow.parentElement;
value1 = cardrow.parentElement.parentElement;

// Element Sibling

// value1 = todo;
// value1 = todo.previousElementSibling;
// value1 = todo.nextElementSibling;
// value1 = todo.nextElementSibling.nextElementSibling;

console.log(value1);

// Yeni Element Yaratmaq

//  <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

//Text Content

//Text Node

newLink.appendChild(document.createTextNode("Fərqli Səhifəyə Get"));

cardbody.appendChild(newLink);

console.log(newLink);


//Dinamik Element silmek

// const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Remove Metodu

// todos[1].remove();

// Remove Child

// todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todos[3]);

console.log(todos);
console.log(todoList);



















































