// function welcome(name){
//     console.log(name)
// name()
// }
// function greeting(){
//     console.log('greeting')
// }

// welcome(greeting);

function welcomeMassage(name, greetingsHandler){
    greetingsHandler(name)
}
function goodMorning(name){
console.log('goodmorning', name)
}
welcomeMassage('sakib',goodMorning)