function add(a,b){
    return a + b
}
function makeCallback(x , y, callback){
    if(x >= y) {
        const c = callback(x, y)
        console.log(c)
    }else{
        console.log("a must be >= b")
    }
}

makeCallback(100,20,add)
