let value;

const numbers = [43,56,23,33,35,5];

// const numbers2 = new Array(1,2,3,4,5,6,7,8);

const langs = ["Python","Java","C++","JavaScript"];

const a = ["Hello",21,null,undefined,3.14];

//Indeks

value=numbers.length;
value = numbers[1];
value = numbers[numbers.length -1];


// Hər-hansı indeksdəki dəyəri dəyişdirmək

numbers[2]=100;
value = numbers;

//Index Of

value = numbers.indexOf(100);

value = numbers.push(22); // sonuna əlavə etmək;
value = numbers.pop() //sonundan silmək üçünı 
value = numbers.unshift(50); // əvvələ əlavə etmək;
value = numbers.shift() //əvvəlin silmək üçün 
value = numbers; 

//Splice

numbers.splice ();
value = numbers; 


//Reverse
numbers.reverse();
value = numbers; 

//Sort

 numbers.sort();
 numbers.sort(function(x,y){
    return(x-y) //Kiçikdən böyüyə sıralama
  })
 numbers.sort(function(x,y){
    return(y-x) //Böyükdən kiçiyə sıralama
 })
 
 console.log(value);


const programmer = {

    name : "Telman",
    age : 26,
    email: "telman.abidov@gmail.com",
    langs : ["Python","Java","C++","JavaScript"],
    adress: {
        city:"Baku",
        street: "Iceriseher"
    },
work : function(){
    console.log("Proqramci isleyir...");
}


}


value = programmer;

value = programmer.name; // en cox istifade edilen
value = programmer['email']

value = programmer.adress.city; 
programmer.work()

const programmers =    [
    {name : "Ferid", age: 25},
    {name: "Orxan", age: 24}

]
value = programmers[0]
value = programmers[0].name
console.log(value);

// Date

const now = new Date();

const date1 = new Date("12-20-1997 09:00:00");
const date2 = new Date("December 20 1997");
const date3 = new Date ("12/20/1997")


value = date1;
//Get
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

//Set
value = date1
 date1.setMonth(6);
 date1.setDate(15);
 date1.setFullYear(2000);

date1.setHours(7);
date1.setMinutes(15);
date1.setSeconds(20);
date1.setMilliseconds(1);

console.log(value);

// JavaScript Comparison Operators - JavaScript Müqayisə operatorları //

// ** 
//***
// !=
// !==
// >
// <
// >=
// <=
// =======================//

// **
console.log(2==2);
console.log("js"=="java");
console.log(2 == "2");
console.log(2==="2");

// >
console.log(4>2);
console.log(2>4);
// !
console.log(2!=4);
console.log(2!=2);
// <
console.log(2<4);
console.log(4<2);

// >=
console.log(4>=2);
console.log(2>=4);
// <=
console.log(2<=4);
console.log(4<=2);

//logical conjunctions - məntiqi birləşmələr


// Not 
console.log(!(2!=2));

// And

console.log((2 == 2) && ("Telman" == "Telman"));

// or

console.log((4 == 2 ) || ("Telman" == "Telman"));

// if - else, else if - daha çox nümunə

const error = true;

if(error == true){
    console.log("Delete");
}

else {
console.log("Dinamik");
}

// Ternary Operation - ?

// Switch Case//

const process = 2;

switch (process) {
    case 1:
        console.log("Menu 1");
        break;
   case 2:
    console.log("Menu 2");
        //break olmadiqda 
        case 3:
    console.log("Menu 3");
  break;
        case 4:
    console.log("Menu 4");
    break;

    default:
        console.log("Menu islemir");

}

// Functions, IIFE,Anonymous functions

function salam (name = "Melumat yoxdur",age = "Melumat yoxdur"){

    // if (typeof name ==="undefined") name = "Melumat yoxdur";
    // if (typeof age ==="undefined") age = "Melumat yoxdur";
    console.log(`Name: ${name} Age: ${age}`);
}

salam("Telman",26); //Function Call

salam("Samir",30);

salam();

salam("Ferid");

//Return

function square(x) {
    return x*x;
}
function cube(x) {
    return x*x*x;
}

// let a1 = square(12);

// a1 = cube(a1);

let a1 = cube(square(12));

console.log(a1);

// Funksiya sonudur - return

function salam(){
    return "Salam";
}


console.log(salam());






 