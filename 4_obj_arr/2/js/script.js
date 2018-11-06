function isAllTrue(source, filterFn){
    if(filterFn === true){
        return true
    }
    else {
        return false;
    }
}
function filterFn(source) {
    let tr = 0;
    for (let i = 0; i < source.length; i++){
        if (typeof source[i] == 'number'){
            tr++;
        }
    }
    if (tr === 0) {
        return(false);
    }
    if (tr <= source.length){
        return(true);
    }
}
let source = ['k','h','f','j'];
console.log(isAllTrue(source, filterFn(source)));
