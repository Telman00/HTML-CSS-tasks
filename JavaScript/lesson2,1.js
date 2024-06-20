const a = 20;
const b = 30;

console.log(a + b);

// //Const

const name = "Telman"

console.log(name);
 

const a1 = [1,2,3,4,5];
console.log(a1);

a1.push(7);

console.log(a1);

//==========================//
// String çevirmək---//
let value;

value = String(100);
value = String(3.14);
value = String(function(){console.log();})
value = String([1,2,3,4,5]);



value =(2.14).toString();


console.log(value);
console.log(typeof value);

// Number çevirmək//


value = Number("123")
value = Number (null);
value = Number (undefined);
value = Number ("Hello World");
value = Number(function(){console.log()});
value = Number([1,2,3,4,5])

value = Number("23.5")
value = parseFloat("15.3")
value = parseInt("2.4")


const a2 = Number("40") + 20;
console.log(a2);



console.log(value);
console.log(typeof value);

let value1;

let value2 = 10;
let value3 = 15;


//Arithmetic operators


value1 = value2 + value3;
value1 = value3 - value2;
value1 = value2 * value3;
value1 = value3 / value2;
value1 = value2 % value3;

//match object

value1 = Math.PI;
value1 = Math.E;

value1 = Math.round(3.6);
value1 = Math.round(3.2);


value1 = Math.ceil(4.2);
value1 =Math.ceil(4.9);


value1 = Math.floor(5.3);
value1 = Math.floor(5.9);


value1 = Math.sqrt(20);

value1 = Math.abs(-20);


value1 = Math.pow(3,2);
value1 = Math.pow(9,2);

value1 = Math.max(1,2,3,4,-5,5,6);
value1 = Math.min(1,2,3,4,-5,5,6);


value1 = Math.random();
value1 = Math.floor(Math.random() * 10);

console.log(value1);

//  Methods of Strings//

let value4 ;

const firstName = "Telman";
const lastName = "Abidov";

const langs = "Java,Python,C++"


value4 = firstName + " " + lastName;


value4 += " " + "Rasim";

value4 = firstName.length;

value4 = firstName.concat(" "+ lastName + " "+"Danger")

value4 = firstName.toLowerCase();
value4 = firstName.toUpperCase();

value4 = firstName[0];

value4 = firstName[firstName.length - 1];

//Index of  
value4 = firstName.indexOf("a")
value4 = firstName.indexOf("l")
value4 = firstName.indexOf("t") //-1


// Char At

value4 = firstName.charAt(1);
value4 = firstName.charAt(firstName.length - 1)

//Split

value4 = langs.split(",");

//Replace

value4 = langs.replace("Java","Data")

//Includes


value4 = langs.includes("Java")

console.log(value4);


//Template Literal//

const name1 = "Aliyev Kenan";
const department = "New Hire";
const salary = 4000;
 
// const a5 = "Isim: " + name + "\n" + "Departman:" + department + "\n" + "Maas: " + salary;


//const a5 = `Isim:${name}\nDepartman:${department}\nMaas:${salary}`

const html = "<ul>" +
             "<li>" + name1 + "</li>" +
             "<li>" + department + "</li>" +
             "<li>" + salary + "</li>" +
             "</ul>";


// function a(){
//     return "Hello"
// }

// const html = `
// <ul>
// <li>${name1}</li>
// <li>${department}</li>
// <li>${salary}</li>
// <li>${a()}</li>
// </ul>


// `;

document.body.innerHTML = html;

