function getObjectValues(obj:object){
    let arr = []
    for(let i in obj){
        arr[arr.length] = i
    }
    return arr
}
let object = {name: 'RajiniKanth', age: 33, hasPets : false};
console.log(getObjectValues(object))