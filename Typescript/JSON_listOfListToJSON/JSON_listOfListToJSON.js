function listofListJSON(list) {
    var result = {};
    list.forEach(function (item) {
        result[item[0]] = item[1];
    });
    return result;
}
var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
console.log(listofListJSON(array));
