function getObjectKeys(obj:object){
    let arr = []
    for(let i in obj){
        arr[arr.length] = i
    }
    return arr
}
let object1 = {name: 'RajiniKanth', age: 33, hasPets : false};
console.log(getObjectKeys(object1))