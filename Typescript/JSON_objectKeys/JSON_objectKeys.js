function getObjectKeys(obj) {
    var arr = [];
    for (var i in obj) {
        arr[arr.length] = i;
    }
    return arr;
}
var object1 = { name: 'RajiniKanth', age: 33, hasPets: false };
console.log(getObjectKeys(object1));
