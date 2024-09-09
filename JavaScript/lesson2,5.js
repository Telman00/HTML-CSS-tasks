setTimeout(() => console.log("Salam"),2000);
setInterval(() => console.log("Salam"),2000);

// setItem - əlavə etmək,
// getItem - əldə etmək,
// removeItem - silmək,
// clear - təmizləmək.
localStorage.setItem('name',"Telman")



localStorage.removeItem('name')
localStorage.clear()
console.log(

    localStorage.getItem('name')

);

//SessionStorage

sessionStorage.setItem('name',"Elvin");

//---------------------------------------------------//

//Session Storage 

// // Button

// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear = document.querySelector("#clear");

// //Input

// const addkey = document.querySelector("#addkey");
// const addvalue = document.querySelector("#addvalue");
// const deletekey = document.querySelector("#deletekey");

// add.addEventListener("click",addItem);
// del.addEventListener("click",deleteItem);
// clear.addEventListener("clear",clearItems);

//===============================================//

const accord = document.querySelectorAll('.accordion-items');

 accord.forEach(function(item){
    item.addEventListener('click',function(){
       

    if (!item.classList.contains('active')) {

        removeActives();
        
        this.classList.add('active')
        
    }

    else {
        this.classList.remove('active')
    }

    })
 })

 function removeActives(){

    accord.forEach((item) =>{
        item.classList.remove('active')
    })
 }