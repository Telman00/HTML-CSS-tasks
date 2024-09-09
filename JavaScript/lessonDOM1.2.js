                                        // Javascript - DOM Event //
                      
const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("Submit Event");
    e.preventDefault();
};


//  filterInput.onfocus = function(){
//     console.log("Necesen");
//  }

// filterInput.addEventListener("focus",function(e){
   

//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
    
//     // console.log("Necesen");
// });

// //Klaviatura Event
// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");


// todoInput.addEventListener("keyup",changeText);

// function changeText(e){
//     header.textContent = e.target.value;
// // console.log(e.target.value);
// };




//keypress

// document.addEventListener("keypress",run);

// function run(e){
// console.log(e.which); //ASCII Table
//     console.log("Salam");
//     console.log(e.key);
    
// }



//keydown

// document.addEventListener("keydown",run);

// function run(e){
// console.log(e.which); //ASCII Table
//     console.log("Salam");
//     console.log(e.key);
    
// }


//keyup

// document.addEventListener("keyup",run);

// function run(e){
// console.log(e.which); //ASCII Table
//     console.log("Salam");
//     console.log(e.key);
    
// }

// Mouse Event

 const cardBody = document.querySelectorAll(".card-body")[1];

 const title = document.querySelector("#tasks-title");

 //Click Event

//   title.addEventListener("click",run);
   
//   function run(e){
//     console.log(e.type);
//   };

  // Double Click

//   title.addEventListener("dblclick",run);

//     function run(e) {
//         console.log(e.type);
//   };

// Mouse Down

title.addEventListener("mousedown",run);

    function run(e) {
        console.log(e.type);
  };
 // Mouse Up

 title.addEventListener("mouseup",run);

     function run(e) {
         console.log(e.type);
   };

   // Mouse Over

   title.addEventListener("mouseover",run);

       function run(e) {
           console.log(e.type);
     };

    // Mouse OUT
    title.addEventListener("mouseout",run);

        function run(e) {
            console.log(e.type);
      };

      cardBody.addEventListener("mouseover",run);
      cardBody.addEventListener("mouseout",run);

      
          function run(e) {
              console.log(e.type);
        };

        //Mouse Enter and Mouse Leave

        cardBody.addEventListener("mouseenter",run);
        cardBody.addEventListener("mouseleave",run);

        function run(e) {
            console.log(e.type);
      };

     
     
     
      const filter = document.getElementById("filter");

      document.addEventListener("DOMContentLoaded",load);
      function load(e){
        console.log("Sayfa yuklendi");
      }

      //Input Events

      //Focus

      filter.addEventListener("focus",run);
     
     //Blur
      filter.addEventListener("blur",run);
      
      //Paste
      
      filter.addEventListener("paste",run);


      //Copy
      filter.addEventListener("copy",run);
      
      //Cut
      filter.addEventListener("cut",run);
      

      //Select
      filter.addEventListener("select",run);

      function run(e){
        console.log(e.type);
      };

      //Event Capturing and Bubbling

// Event Bubbling

document.querySelector(".container").addEventListener("click",function(){
    console.log("Div Container");
});
document.querySelector(".card.row").addEventListener("click",function(){
    console.log("Card Row");
});
document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("Card Body");
});

//Event Capturing or Delegation

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e){

    if (e.target.className ==="fa fa-remove") {
        console.log("Silme islemi");
    }
if (e.target.id ==="filter"){
    console.log("Filtreleme Islemi");
}
    if(e.target.id ==="clear-todos"){
        console.log("Tum tasklari silme islemi");
    }
// console.log(e.target);
};


















