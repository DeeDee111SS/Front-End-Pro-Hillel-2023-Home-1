// Home Calculator

function calculate(a, b, operator) {

    a = document.getElementById("firstValue").value;
    b = document.getElementById("secondValue").value;
    operator = document.getElementById("operator").value;

    if (operator == "+") {
        console.log(Number(a) + Number(b));
        document.getElementById("result").innerHTML = Number(a) + Number(b);
    } else if (operator == "-") {
        console.log(a - b);
        document.getElementById("result").innerHTML = a - b;
    } else if (operator == "*") {
        console.log(a * b);
        document.getElementById("result").innerHTML = a * b;
    } else if (operator == "/") {
        console.log(a / b);
        document.getElementById("result").innerHTML = a / b;
    } else if (operator == "%") {
        console.log(Number(a) * Number(b) / 100 + "%"); // similar to Windows Calculator
        document.getElementById("result").innerHTML = Number(a) * Number(b) / 100 + "%";
    } else {
        console.log("uncorrect data");
        document.getElementById("result").innerHTML = "uncorrect input data";
    }     
}
