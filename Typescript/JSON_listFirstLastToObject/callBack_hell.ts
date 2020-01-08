function displayTime(time:Number, cb:any){
    setTimeout(function(){
        console.log(time)
        cb()
    })
}

displayTime(1, function(){
    displayTime(2, function(){
        displayTime(3, function(){
            console.log("Done")
        })
    })
})