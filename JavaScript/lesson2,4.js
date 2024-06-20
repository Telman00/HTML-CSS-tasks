// Break and Continue

let i = 0;

while(i<10){
    console.log(i);
    if (i==5) {
        break;
    }
    i++;
}

while (i <10){
    if (i==3 || i==5){
        i++; 
        continue; // endless loop
    }
    console.log(i);
    i++
}

// Do While

do {

console.log(i);
i++
} while(i < 10)

//For
const langs = ["Python","Java","JavaScript"];

// let index = 0;

// while (index < langs.length){
//     console.log(langs[index]);
//     index++;
// }

for (let index = 0;index < langs.length; index++){
    console.log(langs[index]);
}

 //forEach
langs.forEach(function(langs,index){
    console.log(index + 1,langs);

});

//Map

const users = [
    {name: "Telman", age: 26},
    {name: "Kenan", age: 28},
    {name: "Ferid", age: 25},
]

const names = users.map(function(user){
return user.name;
})
const ages = users.map(function(user){
    return user.age;
})
console.log(names);
console.log(ages);

//For in

const user = {
    name: "Telman",
    age:26
};
for(let key in user){
    console.log(key,user[key]);
}

 //Windows Object

 console.log(this); //window

 //Alert
//  alert("Salam");
//  const cavab = confirm ("Eminsiniz?");
// console.log(cavab);

// if (confirm ("Eminsiniz?")){
//     console.log("Delete");}
//     else {
//         console.log("Silin");
//     }

// const cavab1 = prompt ("2+2 =?");
// console.log(cavab1);
// console.log(typeof cavab1);

let value;

value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;


value = window.outerHeight;

value = window.outerWidth;

value = window.innerHeight;
value = window.innerWidth;
value = window.outerWidth;
value = window.outerHeight;
// value = window.scrollX;
// value = window.scrollY;
console.log(value);

// Scope
//Global SCOPE
function a(){
    //function scope
}

if(1){
    //Block Scope
}



var value1 = 10;
let value2 = 20;
const value3 = 30;


function Func(){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;

    console.log(value1,value2,value3);
}

Func();


if (true){
    var value1 =40;
    let value2 =50;
    const value3 =60;
    console.log(value1,value2,value3);
}

console.log(value1,value2,value3);



// console.log(value1,value2,value3);

// let a = "123456";

// if(true){
   
//     let a = "234567";

