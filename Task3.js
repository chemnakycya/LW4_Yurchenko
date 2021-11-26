//3. Використання тернарного оператора
time = 50;
transmition = 25;
message = "";

if (transmition <= time) {
    message = "Дані перадаються у відповідності зі вказаним часом передачі сигналу.";
}
else {
    message = "Час передачі перевищений!"; 
}

console.log(message);