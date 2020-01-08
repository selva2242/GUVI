function listToObject(obj) {
    var obj1 = {};
    obj1[obj[0]] = obj[obj.length - 1];
    return obj1;
}
console.log(listToObject(['GUVI', 'I', 'am', 'a geek']));
