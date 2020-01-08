function convertObjectToList(obj) {
    var result = [];
    for (var i in obj) {
        var li = [];
        li[li.length] = i;
        li[li.length] = obj[i];
        result[result.length] = li;
    }
    return result;
}
var object2 = { name: 'ISRO', age: 35, role: 'Scientist' };
console.log(convertObjectToList(object2));
