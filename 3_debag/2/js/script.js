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
    if (tr < source.length){
        return(true);
    }
    else {
        return(false);
    }
}
let source = [1,2,3,'f',5];
console.log(isAllTrue(source, filterFn(source)));
