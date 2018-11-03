let myCalculator = require('./script');

let res1 = myCalculator.sum(1,2,3);
let res2 = myCalculator.dif(10,20);
let res3 = myCalculator.div(2,2);
let res4 = myCalculator.mul(2,2);

if (res1 != 106){
    console.error('res1 don`t work');
}
if (res2 != 70){
    console.error('res2 don`t work');
}
if (res3 != 25){
    console.error('res3 don`t work');
}
if (res4 != 400){
    console.error('res4 don`t work');
}
