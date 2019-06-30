let obj = {here: {is: "an"}, object: 2};

//test cases:
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(5, 5));
console.log(deepEqual(5, "5"));
console.log(deepEqual(5, null));
console.log(deepEqual(null, null));
console.log(deepEqual([1,2,3], [1,2,3]))
console.log(deepEqual([1,2,3], [3,2,1]))

function deepEqual(x, y){
    //first compare the items directly
    if(x === y){
        return true;
    } else {
        if((typeof(x) == typeof(y))){
            //return false immediately if the two objects are of different length
            if(Object.keys(x).length != Object.keys(y).length){
                return false
            } else {
                //for each element of x, check if y contains that element and then recursively check the contents
                for(elem in x){
                    if(y.hasOwnProperty(elem)){
                        if(deepEqual(x[elem], y[elem])){
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
            }
        } else {
            return false;
        }
    }
}