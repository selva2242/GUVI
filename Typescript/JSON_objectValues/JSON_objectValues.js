function getObjectValues(obj) {
    var arr = [];
    for (var i in obj) {
        arr[arr.length] = i;
    }
    return arr;
}
var object = { name: 'RajiniKanth', age: 33, hasPets: false };
console.log(getObjectValues(object));
