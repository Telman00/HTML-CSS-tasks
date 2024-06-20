// Function Expression

const salam = function(name){
    console.log("Salam:" + name);
};

salam("Telman");

//Immediately Invoked Function Expression (IIFE)

(function(name){
    console.log("Salam:" + name);
})("Telman");

const database = {
    host:"localhost",
    add: function(){
        console.log("Elave olundu");
    },
     get:function(){
        console.log("Yuklendi");
     },
     update: function(id){
        console.log(`Id: ${id} Kocdu `);
     },
     delete: function(id){
        console.log(`Id: ${id} Silindi `);

}
}

console.log(database.host);

database.add();
database.delete(10);

// Loops //
// While
let i = 0;
while (i<10){
    console.log(i);
     i += 1; // i++

}


let i1 = 10;
while(i1>0){
    console.log(i1);
    i1-=1; //i--
    i1 -= 2;
}











