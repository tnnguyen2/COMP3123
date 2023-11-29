function makePromise(x,y) {
    return new Promise((resolve, reject) => {
        if (x >= y) {
            resolve({msg: "Fulfilled"})
        } else {
            reject({msg: "Error"})
        }
    })
}

makePromise(10,2).then(data => {
    console.log("Resolved: " + data.msg)
}, (err)=> {
    console.log("Rejected: " + err.msg)
})

makePromise(20,100).then(data => {
    console.log("Resolved: " + JSON.stringify(data))
}).catch((err)=> {
    console.log("Rejected: " + JSON.stringify(err))
})

makePromise(10,2).then(data =>{
    console.log("Resolved 1: " + JSON.stringify(data))
    return {...data, status : 200}
}).then(data =>{
    console.log("Resolved 2: " + JSON.stringify(data))
}).catch(error =>{
    console.log("Rejected: " + JSON.stringify(error))
}).finally(()=>{
    console.log("Finally")
})

