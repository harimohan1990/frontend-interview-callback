
function ParentFunction(callback){

    console.log("Performing something")

    setTimeout(function(){

        callback("Operation done")
    })
}

function callbackFunction(result){

 console.log("result:" + result)
}


ParentFunction(callbackFunction)
