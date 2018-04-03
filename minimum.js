console.log(min(0, 10)); // 0
console.log(min(0, -10)); // -10


function min(a, b) {
    if (a < b) {
        return a;
    }  
    return b;
}