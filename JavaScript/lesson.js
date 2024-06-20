// map()

const numbers1 = [4, 40, 3, 13, 23];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
   return value * 2;
}
 console.log(numbers2);


 // filter()

 const numbers=[4,8,24,35,6,7,8];
 const number2=numbers.filter(myFunction);

 function myFunction(value,index,array) {
   return value>20;
 }
 console.log(number2);
// ------------------------------------------------------//
 const users = [
   { id: 1, name: "Aytac", surname: "Karimov", age: 24 },
   { id: 2, name: "Telman", surname: "Karimov 2", age: 26 },
   { id: 3, name: "Telman", surname: "Karimov 2", age: 17 },
   { id: 4, name: "Elsever", surname: "Karimov 3", age:  4 },
   { id: 5, name: "Elsever", surname: "Karimov 3", age:  15 },
 ];


 const under20 = users.filter(function(item){

   return item.name ==="Telman" ;
})

console.log(under20);

// reduce()

// const numbs = [45, 4, 9, 16, 25];

// const result=numbs.reduce(function(total, item, index){
   
   
// return total - item


//     })
    
//    console.log(result); 

   //from()
    
   const arr=Array.from("Telman")
let char = arr[0]
   console.log(char);
// yeni versiya............
   const arr1=[..."Azerbaycan"]
   console.log(arr1);

   // Date

   const d1 = new Date(2021,23,10,50,40,200);
   console.log(d1);

   // Math.random()

   
   // const car = document.getElementById('car');
   // const cars=["Porshe","BMW","Mercedes","AUDIO"];

   // car.innerHTML=cars [Math.floor(Math.random()*cars.length)];


   const car = document.getElementById('car');
   const cars=["Porshe","BMW","Mercedes","AUDIO"];

cars.sort(function () {

   return 0.5-Math.random()
   
});

  //  car.innerHTML=cars;

   function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    };
    console.log(getRndInteger(10,20));
      
    // Booleans

    console.log(Boolean('Telman'));

    // False olanlar
    console.log(Boolean(''));
    console.log(Boolean(0));
    console.log(Boolean(null));
    console.log(Boolean(undefined));
    console.log(Boolean(false));
    console.log(Boolean(NaN));
//----------------------------------------//

// True olanlar
console.log(Boolean([]));
console.log(Boolean({}));
//-----------------------------//

console.log(true<true<true);   //true=1, true<true = 0; 0<1;
console.log(true>true>true);   //false=0  true>true =0; 0>1;


console.log('Objects', {}+{});
console.log("Array:", []+[]);
console.log('Object and Array',  {}+[]);
   
//Logical Operators

//       &&	and	(x < 10 && y > 1) is true	
//       ||	or	(x == 5 || y == 5) is false	
//       !	not	!(x == y) is true


// JavaScript switch-----


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
// Task
const d2 = new Date();
d2.setMonth(2)


switch (d2.getMonth())

{
   case 11:
   case 0:
   case 1:
        console.log("Qish ayi");
      break;
      default:
         console.log("Hefte sonu");
         break;
}

//===---------------
switch (new Date().getDay()) {
   case 6:
     text = "Today is Saturday";
     break;
   case 0:
     text = "Today is Sunday";
     break;
   default:
     text = "Looking forward to the Weekend";
 }
 //-------------------------------//

 let myMap = new Map();

 