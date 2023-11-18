function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    if (unit === "celsius") {
        var result = (temperature * 9/5) + 32;
        resultElement.textContent = temperature + " Celsius is " + result.toFixed(2) + " Fahrenheit.";
    } else {
        var result = (temperature - 32) * 5/9;
        resultElement.textContent = temperature + " Fahrenheit is " + result.toFixed(2) + " Celsius.";
    }
}