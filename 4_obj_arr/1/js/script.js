let array = [1, 2, 3, 4, 5, 6];

let forEach = function(array, item){
    for (let i = 0; i < array.length; i++){
        item(array[i]);
    }
}

forEach(array, item => console.log(item));


var moreThanFive = array.filter(function(num) {
    return num > 4;
});

console.log(moreThanFive);


let filter = function(array, item){
    let res = [];
    for (let i = 0; i < array.length; i++){
        if(item(array[i])){
            res.push(array[i]);
        }
    }
    return res;
}

let greaterThan4 = filter(array, item => item > 4);
