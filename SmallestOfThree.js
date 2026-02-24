function SmallestOfThree(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "compare number only"
    }
    if (a < b && a < c) return a
    else if (b < a && b < c) return b
    else return c
}


function SmallestOfThree2(a, b, c) {
    let smllest = a;
    if (b < smllest ) {
        smllest = b;
    }else if(c < smllest){
        smllest = c;
    }

    return smllest;
}

console.log(SmallestOfThree(3,6,1))

console.log(SmallestOfThree2(3,6,7))