// JavaScript For Loop //

//  for(let i =0; i<10; i++){

//    console.log(i,"Telman");
//  }
//------------------------------------//
//  const cars1 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let result = "";
// for(let i = 0; i< cars1.length; i++){
// result+=cars1[i] + " ";
   
// }
// console.log(result);

//=====================//
// const nums = [2,4,5,6,44,66];
// let result = 0;
// for(let i = 0; i< nums.length; i++){
// result+=nums[i];
   
// }
// console.log(result);


// let result = 0;
// for(let i = 0; i< 10; i++){

//    for (let j = 0; j < 10; j++) {
      
//       result += `<h2> ${i} * ${j} = ${i * j} </h2>`;
      
//    }
//   }

// table.innerHTML = result;

// console.log(result);


// for(let i = 0; i< 20; i++){

//   if(i === 2){
//      continue;
//   }
// }
// console.log(i);





//For In
const user={
  name: "Telman",
  city: "Quba",
}
for (const key in user) {
 
console.log(user[key]);

}




//for of
const cars1 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for (const item of cars1) {
    console.log(item);
    
}

//JavaScript While Loop
const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let result = "";

let i = 0;
while (cars2[i]) {
    result += `<h2>${cars2[i]} </h2>`
    i++;
}
table.innerHTML = result;

// JavaScript Sets

const cars3 = new Set();

cars3.add("Porshe"),
cars3.add("Kia")

console.log(cars3);

const cars4 = new Set(["Porshe","Tesla","Kia"]);





console.log(...cars4.values());



// Task
//Array bənzərsiz etmək (copy-value olmasın) 
// bir neçə üsulla. Set for filter



//---JavaScript Switch Statement---//


let city = "Gence"


 switch (city) {
  case "Sumqayit":

  console.log("Bura Sumqayitdir");
    
    break;
    case "Quba":

    console.log("Bura Qubadir");
      
      break;
 
  default:
    console.log("Gence yoxdu");
    break;
 }

//===============//
 const d = new Date();
let day;

switch (d.getDay()) {
   case 0:
     day = "Sunday";
     break;
   case 1:
     day = "Monday";
     break;
   case 2:
     day = "Tuesday";
     break;
   case 3:
     day = "Wednesday";
     break;
   case 4:
     day = "Thursday";
     break;
   case 5:
     day = "Friday";
     break;
   case 6:
     day = "Saturday";
     break;
}

console.log(day); 

const d2 = new Date();
d2.setMonth(2)


switch (d2.getMonth())

{
   case 10:
   case 11:
   case 1:
        console.log("Qish ay: month[d2.getMonth()]");
      break;
      default:
         console.log("Hefte sonu");
         break;
}


let text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 1:
    text = "Today is Monday";
    break;
  default:
    text = "Looking forward to the Weekend";}
    console.log(text);
    

    //-------------------------------------//

    let texty;
    switch (new Date().getMonth()) {
      case 5:
        texty = "Today is June";
        break;
      case 6:
        texty = "Today is July";
        break;
      default:
        texty = "Looking forward to the Month";
    }
    
    console.log(texty);


    //----------------------------------------//
            //Map//

            //Task// video: 17-00

       const fruits = new Map([

        ["apples", 600],
        ["bananas", 300],
        ["oranges", 500]
        
      
      ])  
      for (const item of fruits.keys()) {
        console.log(item);
       
      }
      
      const numbers = [1, 2, 3, 4, 5];

// Array destructuring
const [first, second, third] = numbers;

console.log(first); // Çıktı: 1
console.log(second); // Çıktı: 2
console.log(third); // Çıktı: 3

// Object destructuring

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

const {firstName,age}=person;

console.log(firstName);

    console.log(age);

    //String Destructuring

    // Create a String
let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;


//Skipping Array Values//

// Create an Array
const fruits1 = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1,,,fruit2] = fruits1;

console.log(fruits1);



//Task 2// 40:00






