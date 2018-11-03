function calculator(firstNumber) {
    return {
        sum: function (){
            let res = 0;
            for (let i = 0; i < arguments.length; i++){
                res += arguments[i];
            }
            return firstNumber + res;
        },
        dif: function () {
            let res = 0;
            for (let i = 0; i < arguments.length; i++){
                res += arguments[i];
            }
            return firstNumber - res;
        },
        div: function () {
            let res = 0;
            for (let i = 0; i < arguments.length; i++){
                res += arguments[i];
            }
            return firstNumber / res;
        },
        mul: function () {
            let res = 0;
            for (let i = 0; i < arguments.length; i++){
                res += arguments[i];
            }
            return firstNumber * res;
        }

    }
}
let myCalculator = calculator(100);

module.exports = myCalculator;

