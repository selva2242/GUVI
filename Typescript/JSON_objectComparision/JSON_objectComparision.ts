function objectComparision(obj1:any, obj2:any){
    for (let i in obj1){
        if(typeof(obj1[i])=="object" && typeof(obj2[i])=="object"){
            objectComparision(obj1[i], obj2[i])
        }
        else{
            if(!(obj1[i]===obj2[i]))
            return false
        }
    }
    return true

}
let object1 = {
    prop1 :{a:'1', b:'2'},
    prop2 : "first",
}
let object2 = {
    prop2 : "first",
    prop1 :{b:'2', a:'1'},
}
objectComparision(object1, object2)
