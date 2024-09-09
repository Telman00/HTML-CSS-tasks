


// const button = document.querySelector("#changeButton");



// button.addEventListener("click", function(){
    
//     document.body.classList.toggle("color");
// });



// let count = document.getElementById('count');
// let index = count.value;

// const art = document.getElementById('Artma');
// art.addEventListener("click", function () {

//     if (index < 100) {
//         index++;
//         counter.innerText = index;
//     }
// });

// const az = document.getElementById('Azalt');
// az.addEventListener("click", function () {
//     if (index > 0) {
//         index--;
//         counter.innerText = index;
//     }
// });

// const menuTitle = document.getElementById('menuTitle');
// const menuItems = document.getElementById('menuItems');

// menuTitle.addEventListener('click',function(){
//     menuItems.classList.toggle('visible');
// });
    
// const text = document.getElementById('text');  
// const shadow = document.getElementById('shadow');

//     shadow.addEventListener('click',function(){
//         text.classList.toggle('visible');
//     });



//  const search = document.querySelector("#search");
// const itemList = document.querySelector("#itemList");
// const items = document.querySelectorAll("li");
//     search.addEventListener("input", function () {
//         const searchText = search.value.toLowerCase();
//         for (let i = 0; i < items.length; i++) {
//           const itemText = items[i].textContent.toLowerCase();
//           if (itemText.includes(searchText)) {
//             items[i].classList.remove("hidden");
//           } else {
//             items[i].classList.add("hidden");
//           }
//         }
//       });
      
      const arr = [
        { id: 1, name: 'John', age: 29 },
        { id: 2, name: 'Jane', age: 32 },
        { id: 3, name: 'Tom', age: 27 }
    ];
    
    const info = document.getElementById('data');
    
    function displayData() {
        let result = '';
        arr.forEach(element => {
            result +=  `
                  <tr>
                    <td>${element.id}</th>
                    <td>${element.age}</th>
                    <td>${element.name}</th>
                </tr>`;
        });
        info.innerHTML = result;
    }
    
    

    function addData(id,name,age,displayData){
        arr.push({id, name, age});
        displayData();
        
    }
    
    addData(4,'Jorc',55,displayData);
    addData(5,'John',50,displayData);
    
    

    


