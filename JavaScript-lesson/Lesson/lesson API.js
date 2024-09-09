// // async function fetchData() {
// //     const response = fetch('https://jsonplaceholder.typicode.com/posts/');
// //     const data = await response.json();
    
// //     data.forEach(element => {
// //         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${element.id}`)
// //             .then(function text(response){
// //                 return response.json()
// //                 })
// //             .then(commentData => {
// //                 console.log(commentData);
// //             })
// //             .catch(error => console.error('Error fetching comments:', error));
// //     });

// //     // data.forEach(async element=>{
// //     //  const response_comments  = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${element.id}`);
// //     //   const comments = await response_comments.json();
// //     //   console.log(comments);
// //     // })
// // }


// // // response  => response.json()
// // // function (response){
// // // return response.json()
// // // }




// // fetchData();


// **Kodun Təhlili və Düzəlişlər:**

// Verilən kodu daha yaxşı başa düşmək üçün gəlin birlikdə analiz edək.

// **Kodun Əsas Funksiyaları:**

// * **Veri Çəkmək:** `https://jsonplaceholder.typicode.com/posts/` endpointindən məqalələri (postları) çəkir.
// * **Hər Məqalə Üçün Yorumları Çəkmək:** Çəkilən hər məqalə üçün uyğun gələn yorumları `https://jsonplaceholder.typicode.com/comments?postId=${element.id}` endpointindən çəkir.
// * **Nəticələri Göstərmək:** Çəkilən yorumları konsolda göstərir.

// **Koddakı Problem:**

// Kodda əsas problem, `forEach` döngüsü içində asenkron əməliyyatların idarə edilməsindədir. `then` və `catch` zəncirləri istifadə edilərək hər məqalə üçün bir çox HTTP istəyi göndərilir ki, bu da performansı aşağı salır və kodun oxunmasını çətinləşdirir.

// **Düzəlişlər:**

// * **async/await İstifadəsi:** Kodun daha sinxron kimi görünməsini təmin edən və asenkron əməliyyatları idarə etməyi asanlaşdıran `async/await` sintaksisindən istifadə olunur.
// * **for...of Döngüsü:** Məqalələr üzərində daha yaxşı iterasiya etmək üçün `for...of` döngüsü istifadə olunur.
// * **Hata Yönetimi:** Hər məqalə və yorum üçün ayrıca `try...catch` bloklari ilə daha yaxşı hata idarə edilməsi təmin edilir.

// **Düzəldilmiş Kod:**

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const posts = await response.json();
  
      for (const post of posts) {
        try {
          const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
          const commentData = await commentResponse.json();
          console.log(commentData);
        } catch (error) {
          console.error('Hata:', error, ' - Məqalə ID:', post.id);
        }
      }
    } catch (error) {  // Məqalələr alınarkən hata varsa yakalar
      console.error('Məqalələri alarkən hata:', error);
    }
  }
  
  fetchData();
  

// **Kodun Açıqlaması:**

// 1. `async function fetchData()`: Bu satır, asinxron bir funksiya təyin edir.
// 2. `try...catch` Bloku: Bu blok, kodun işləməsi zamanı baş verə biləcək xətaları tutmaq üçün istifadə olunur.
// 3. `fetch` və `await`: Məqalələr və yorumlar üçün HTTP istəkləri göndərir və cavabların gəlməsini gözləyir.
// 4. `for...of` Döngüsü: Hər məqalə üzərində iterasiya edir.
// 5. İç içə `try...catch` Bloku: Hər məqalə və yorum üçün ayrıca xəta idarə edilməsi təmin edir.
// 6. `console.log` və `console.error`: Nəticələri və xəta mesajlarını konsola yazdırır.

// **Nəyə Nail Olduq:**

// * Kod daha oxunaqlı və dərk edilməsi asan hala gəldi.
// * Asenkron əməliyyatlar daha yaxşı idarə edilir.
// * Hər bir məqalə və yorum üçün ayrı xəta idarə edilməsi təmin edildi.
// * Kodun performansı artırıldı.

// **Əlavə Məlumat:**

// * `async/await` sintaksisi JavaScript-də asinxron proqramlaşdırmanı daha sadə hala gətirir.
// * `fetch` API-si, brauzerlərdə HTTP istəkləri göndərmək üçün istifadə olunur.
// * `try...catch` bloklari, kodun işləməsi zamanı baş verə biləcək xətaları idarə etmək üçün istifadə olunur.

// Bu kod, verilən məsələ üçün daha səmərəli və etibarlı bir həll təklif edir.

// **Qeyd:** Bu kod, `jsonplaceholder.typicode.com` adlı bir mock API-sini istifadə edir. Əsl layihələrdə öz backend sisteminizlə inteqrasiya etməlisiniz.

  
    