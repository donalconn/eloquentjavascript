"use strict";

function countBs(str) {

    var count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "B") {
            count++
        }
    }
    return count;
}

function countChar(str, c) {

    var count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] == c) {
            count++
        }
    }
    return count;

}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
