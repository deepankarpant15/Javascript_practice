function createCounter(){
    let co =0;
    return function(){
        //co++;
       return ++co;
    }
}
let increment = createCounter()
// console.log(increment())
// console.log(increment())
// console.log(increment())

function rateLimit(fn,limi){
    return function(fn){
        
    }
}