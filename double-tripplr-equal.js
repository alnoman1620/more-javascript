//double (==) vs Tripple(===)

//Double(==)
//In double(==) it did not check the variable type
const a = 2;
const b = '2';
if(a==b){
    console.log(true)
}
else{
    console.log(false)
}
//output : true

//tripple(===)
//In tripple(===) it check the variable type and show the result
const x = 2;
const y = '2';
if(x===y){
    console.log(true)
}
else{
    console.log(false)
}
//output : false
