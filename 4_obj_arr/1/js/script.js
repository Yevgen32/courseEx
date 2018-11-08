// let array = [1, 2, 3, 4, 5, 6];

// let forEach = function(array, item){
//     for (let i = 0; i < array.length; i++){
//         item(array[i]);
//     }
// }
//
// forEach(array, item => console.log(item));

// var moreThanFive = array.filter(function(num) {
//     return num > 4;
// });
//
// console.log(moreThanFive);
//
// let filter = function(array, item){
//     let res = [];
//     for (let i = 0;  i < array.length; i++){
//         if(item(array[i])){
//             res.push(array[i]);
//         }
//     }
//     return res;
// }
//
// let greaterThan4 = filter(array, item => item > 4);
// console.log(greaterThan4);

// let map = function(array, item){
//     let res = [];
//     for(let i = 0; i < array.length; i++){
//         res.push(item(array[i]));
//     }
//     return res;
// }
//
// let sqare = map(array, item => item*item);
// console.log(sqare);

// let reduce = function(array, res){
//     for (let i = 0; i < array.length; i++){
//         res += array[i];
//     }
//     return res;
//
// }
// console.log(reduce(array, 0));
//
// let a = [1, 2, 3, 4, 5],
//     result;
// function foo(prevSum, curNum) {
//     return prevSum + curNum;
// }
// result = a.reduce(foo);
// console.log(result); //15

// function slice(array, begin, end) {
//     let res = [];
//     for(let i = 0; i < array.length; i++){
//         if (i >= begin && i < end){
//             res.push(array[i]);
//         }
//     }
//     return res;
// }
//
// console.log(slice(array, 3, 4));
// console.log(array.slice(0,3));

let array = [1, 2, 3, 4, 5, 6];


function splice(begin,quality, add) {
    if (quality==0){
        return array;
    }
    quality += begin;
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    for (let i = 0; i < array.length; i++){
        if (i >= 0 && i < begin){
            arr1.push(array[i]);

        }
       if (i >= begin && i < quality){
           arr2.push(array[i]);
       }
        if (i >= quality && i < array.length){
            arr3.push(array[i]);
        }
    }

    return arr2;
    }

function add(){
    return  Array.from(arguments);
}

console.log(splice(2,2),add('add'));
console.log(array.splice(2,2));



// function del(array, begin, quality) {
//     let buff = [];
//     quality += 1;
//     for (let i = 0; i < array.length; i++){
//         if (i >= begin && i < quality){
//             buff.push(array[i]);
//         }
//     }
//     array = buff;
//     return array;
// }
// function add(){
//     return  Array.from(arguments);
// }
// console.log(splice(del(array,1,3)),add(1,2),begin,quality);




