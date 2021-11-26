let num1;
let num2;
num1 = prompt(num1);
num2 = prompt(num2);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("You have typed in Not a Number. Please, try again.");
}
else if (num1 < num2) {
    console.log(Number(num1) + Number(num2));
}
else if (num1 > num2) {
    console.log(Number(num1) - Number(num2));
}
else {
    console.log(0);
}