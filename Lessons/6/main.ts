/* Type Anontation  with array */ 

// let all; //any

// all ="u";
// all = 10;
// all =true;

let all:string | number | boolean; //any

all ="u";
all = 10;
all =true;


// let myFriends = ["Osama","Ahmed","Elsyed",10]


// for (let i = 0; i< myFriends.length; i++) {
//   console.log(myFriends[i].repeat(3)) //error
// }

// let myFriends:string[] = ["Osama","Ahmed","Elsyed",10] //error
let myFriends:string[] = ["Osama","Ahmed","Elsyed"]


for (let i = 0; i< myFriends.length; i++) {
  console.log(myFriends[i].repeat(3))
  
}





