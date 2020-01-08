function convertObjectToList(obj:any){
    let result = []
    for(let i in obj){
        let li = []
        li[li.length] = i
        li[li.length] = obj[i]
        result[result.length] = li
    }
    return result
}
let object2 = {name: 'ISRO', age: 35, role: 'Scientist'};
console.log(convertObjectToList(object2))