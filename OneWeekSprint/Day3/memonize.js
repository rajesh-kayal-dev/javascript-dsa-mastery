const cache = {};

function squre(num) {
    if(cache[num]){
        console.log("Calling from Cache")
        return cache[num];
    }

    console.log("Calulating...");
    const result = num * num;
    cache[num] = result;

    return result;
}
console.log(squre(5));
console.log(squre(5));
console.log(squre(5));