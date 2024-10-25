// function factorial(x) {
//     //guard clause
//     if(x < 1) {
//         return;
//     }
//     let result = 1;
//     for (i=1; i<=x; i++) {
//         result *=i;
//     };
//     return result;
// };
// console.log(factorial(10))

// function parkingSpaces(n, yesterday, today) {
//     let count = 0;
//     for(let i = 0; i < n; i++){
//         if(yesterday[i] === 'C' && today[i] === 'C') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(checkSpaces(5, "CC..C", ".CC.."));
//algorithm

// input binary
// for i = 0; i < binary; i--
//  eachNumber = i*Math.pow(2, i - 1)
//  wholeNumber = eachNumber += eachNumber
// console.log(wholeNumber)

// function binToDec(x) {
//     let decimal = 0;
//     for (let i = 0; i < x.length; i++) {
//         if(binary[binary.length-1-1] === "1") {
//             decimal = decimal + Math.pow(2, i);
//         }
//     }
//     return decimal;
// };
// console.log(binToDec("1101"));

function decToBin(x) {
    let bin = "";
    if (x === 0) {
        return 0;
    }
    while(x >= 1) {
        let remainder = x % 2;
        bin = remainder + bin;
        decimal = Math.floor(x / 2);
    }
    return binary;
}
console.log(decToBin(9));
//divide the nuimber by the largest exponent of 2
// if u can still divide it by 2 you would 