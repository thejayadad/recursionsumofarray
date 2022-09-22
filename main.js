
function sum(array, finish = false){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        if(finish){
            console.log(total + " + " + array[i] + " = " + (total + array[i]));
        }
        total += array[i]
    }
    return total
}

console.log(sum([3,4,5,6], true))