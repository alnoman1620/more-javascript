// ------undefined-------
//1. variable value not assigned
let first;
console.log(first)

//2. did not return the anything in the function
function second(x,y){
    const sum = x+y;
}
const result = second(3,4);
console.log(result)

//3. just wrote return but did not return anything
function third(x,y){
    const sum = x+y;
    return;
}
const result2 = third(3,4);
console.log(result2)

//4. If there are no parameter pass in a function
function fourth(x,y){
    const double = x * 2;
    console.log(y)
    return double;
}
fourth(3);


//5. property that dose not exist in the object
const fifth = {name:'sourav',age:24}
console.log(fifth.phone)

//6. If try to find an element in an array which is not exist in that array.
const sixth = [0,6,4,7]
console.log(sixth[5])

//7. Acssecing deleted element in an array
const seventh = [0,6,4,5]
delete seventh[2];
console.log(seventh[2])

//8. explicitly set value to un definde
const eight = undefined;

