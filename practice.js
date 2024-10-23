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

function parkingSpaces(n, yesterday, today) {
    let count = 0;
    for(let i = 0; i < n; i++){
        if(yesterday[i] === 'C' && today[i] === 'C') {
            count++;
        }
    }
    return count;
}
console.log(checkSpaces(5, "CC..C", ".CC.."));
//algorithm

Input decimal
for i = 0, i < n