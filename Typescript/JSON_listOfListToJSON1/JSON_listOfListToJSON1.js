var arr = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
var result = [];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var iter1 = arr_1[_i];
    var temp = {};
    for (var _a = 0, iter1_1 = iter1; _a < iter1_1.length; _a++) {
        var _b = iter1_1[_a], k = _b[0], v = _b[1];
        temp[k] = v;
    }
    result[result.length] = temp;
}
console.log(result);
