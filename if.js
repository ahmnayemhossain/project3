function displayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

// Using an anonymous function as a callback
calculator(5, 5, function(result) {
    displayer(result);
});