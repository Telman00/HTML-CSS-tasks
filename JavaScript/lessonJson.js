// JSON //

// JSON.parse() - JSON.stringify() JavaScript obyektine cevirir.

// const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
// const obj = JSON.parse(txt);
// document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;



// JSON.stringify() - JavaScript obyektini JSON.stringify() cevirir.

// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj);




      //    AJAX
      
//       fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(json =>{
//         json.forEach(item =>{
//             console.log(item.title);
//         }); 
//       }) 
      
      // Status kodlar

      // 1 info 100
      // 2 success 200 201
      // 3 redirect 301
      // 4 client err 404
      // 5 server 500

      // const products = document.getElementById("products");
// let result = ""; 

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(item => {
//       result += `<div class="product">{
//                   <p>"userId": ${item.userId},</p>
//                   <p>"id": ${item.id},</p>
//                  <p> "title": "${item.title}",</p> 
//                   <p>"body": "${item.body}"</p> 
//       }</div>`;
//     });
//     products.innerHTML = result; 
//   })
 
// const data = {
//     userId:1,
//     title:"Baki",
//     body:"Telman"
// }
      
  
//       fetch('https://jsonplaceholder.typicode.com/posts/97',{
//         method: 'PUT',
//         headers: {
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(data)
//       })
//       .then(res => res.json() )

//      .then(posts=>console.log(posts))


async function getPosts() {
    

const blogs = document.querySelector('.blogs');



    const res = await fetch('./posts.json  ')
    const posts = await res.json()
  posts.forEach(post =>{


blogs.innerHTML +=`
<div data-id = "${post.id}" style = "margin-bottom: 2rem">

<h2>${post.title}</h2>
<p>${post.body}</p>
<button class = "btn">DELETE</button>

</div>

`



  });

   

}


getPosts();


async function deletePost() {  
       
    const res = await fetch('./posts.json');
        const posts = await res.json();

        
    }

//post ve get ferqi




