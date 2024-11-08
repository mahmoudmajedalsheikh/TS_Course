/* Type Anontation  with  Multidimantion array */ 


let arrayOne:number[] = [1,2,3,4];
let arrayTwo:string[] = ["A","B","C"];
let arrayThree:(string | number)[] = [1,2,3,4,"A","B","C"];

let arrayFour:(string|number|string[]|boolean[])[] = [1,2,3,4,"A","B","C",["D","E"],[true,false]];