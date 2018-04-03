function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else return false;

}

function isEvenWithRecursion(n){
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEvenWithRecursion(-n)
    else return isEven(n - 2);
}

console.log(isEvenWithRecursion(50)); // true
console.log(isEvenWithRecursion(75)); // false
console.log(isEvenWithRecursion(-1)); // false