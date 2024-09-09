// const myArray = [5, 3, 9, 1, 7];

// let largest = 0;
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] > largest) {
//         largest = myArray[i];
//     }
// }

// console.log(largest);
// //------------------------------------------//

// const myArray1 = [5, 3, 9, 1, 7];

// let smallest = myArray[0];
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] < smallest) {
//         smallest = myArray[i];
//     }
// }

// console.log(smallest);
// //------------------------------------------//
// const myArray2 = [5, 3, 9, 1, 7];

// let sum =0;

// for(let i = 0; i < myArray2.length; i++) {
//     sum += myArray2[i];
// }

// console.log(sum);

// //------------------------------------------//

// const myArray3 = [5, 3, 9, 1, 7];

// const reversed = [];

// for(let i = myArray3.length - 1; i >= 0; i--) {
//     reversed.push(myArray3[i]);
// }

// console.log(reversed);

// //------------------------------------------//

// function factorial(n) {
//     let factorial = 1;
//     for (let i = 1; i <= n; i++) {
//         factorial *= i;
    
// }
// return factorial;
// }

// console.log(factorial(5));

// //------------------------------------------//

// const myArray4 = [5, 3, 9, 1, 7];

// let evenNumbers = [];
// let oddNumbers = []; 

// myArray4.forEach(function(num) {
//     if (num % 2 === 0) {
//         evenNumbers.push(num);
//     } else {
//         oddNumbers.push(num);
//     }
// });

// console.log("Even Numbers: ", evenNumbers);

// console.log("Odd Numbers: ", oddNumbers);

// //------------------------------------------//

// const myArray5 = [5, 3, 9, 1, 7];

// myArray5.forEach(function(num) {
//     let isPrime = true; 

//     if (num === 1) {
//         console.log("1 is neither prime nor composite number.");
//     } else if (num > 1) {
        
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) { 
//                 isPrime = false;
//                 break; 
//             }
//         }
//         if (isPrime) {
//             console.log(`${num} is a prime number.`);
//         } else {
//             console.log(`${num} is not a prime number.`);
//         }
//     } else {
//         console.log(`The number ${num} is not a prime number.`);
//     }
// });

// //---------------------------------------------------------------------------//

// function fibonacci(n) {
//     if (n <= 0) return 0;
//     if (n === 1) return 1;

//     let a = 0;
//     let b = 1;
//     let result;

//     for (let i = 2; i <= n; i++) {
//         result = a + b;
//         a = b;
//         b = result;
//     }

//     return result;
// }

// const n = 10;
// console.log(fibonacci(n)); 

// //------------------------------------------//
//  const word = "racecar";

//  function isPalindrome(word) {
//     let reversed = word.split('').reverse().join('');
//     return word === reversed;
//  }
//   console.log(isPalindrome(word)); // true
//   console.log(isPalindrome("hello")); // false

//   //------------------------------------------//

//   const myArray6 = [1, 2, 2, 3, 4, 4, 5];
//   function findUniqueElements(arr) {
//   let uniqueElemnts = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
//   return uniqueElemnts;
// }

//   const uniqueElemnts = findUniqueElements(myArray6);
//   console.log(uniqueElemnts); // [1, 2, 3, 4, 5]
    
  
//-------------------------------------------------------------------------------------//

class Teacher {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getTeacher() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }

    setTeacher(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    ifName() {
        return this.name.length > 5; 
    }

    ifAge() {
        return this.age > 30; 
    }

    ifGrade() {
        return this.grade > 8;
    }
}


let teacher1 = new Teacher('Bağırov Ələkbər', 35, 7);

console.log(teacher1.ifName());   
console.log(teacher1.ifAge());    
console.log(teacher1.ifGrade());  

teacher1.setTeacher('Quliyev Hikmət', 40, 9);

console.log(teacher1.ifName());   
console.log(teacher1.ifAge());    
console.log(teacher1.ifGrade());  

teacher1.getTeacher();  


// foreach icerisine atmaq

















