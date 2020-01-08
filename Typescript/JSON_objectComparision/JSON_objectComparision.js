function objectComparision(obj1, obj2) {
    for (var i in obj1) {
        if (typeof (obj1[i]) == "object" && typeof (obj2[i]) == "object") {
            objectComparision(obj1[i], obj2[i]);
        }
        else {
            if (!(obj1[i] === obj2[i]))
                return false;
        }
    }
    return true;
}
var object1 = {
    prop1: { a: '1', b: '2' },
    prop2: "first"
};
var object2 = {
    prop2: "first",
    prop1: { b: '2', a: '1' }
};
objectComparision(object1, object2);
