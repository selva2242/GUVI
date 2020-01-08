let arr = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
let result = []
for(const iter1 of arr){
        let temp  = {}
    for(const [k,v] of iter1){
        temp[k] = v
    }
    result[result.length] = temp
}
console.log(result)