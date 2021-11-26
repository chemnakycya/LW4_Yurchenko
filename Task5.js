let n;
let result;
x = 2;
n = prompt(n);
n = Number(n);

switch (n) {
    case 1: 
        result = x^2 - 2;
        break;
    case 2:
        result = 2*x + 1;
        break;
    case 3: 
        result = 12 - 2*x;
        break;
    case 4:
        result = x^3;
        break;
    default:
        console.log("Please, enter a number from 1 to 4.");
}
console.log(result);