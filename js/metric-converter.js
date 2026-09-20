const converterForm = document.getElementById("converter-form");
const converterValue = document.getElementById("converter-value");
const conversionResult = document.getElementById("conversion-result");

converterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const numericValue = parseFloat(converterValue.value);

    const selectList = document.getElementsByTagName("select");
    const selectedIndex = selectList[0].selectedIndex;
    const choice = parseInt(selectList[0].options[selectedIndex].value);

    let result;
    let unit;

    if (choice === 1) {
        result = numericValue * 2.54;
        unit = "centimeters";
    } else if (choice === 2) {
        result = numericValue * 30.48;
        unit = "centimeters";
    } else if (choice === 3) {
        result = numericValue * 0.91;
        unit = "meters";
    } else if (choice === 4) {
        result = numericValue * 1.61;
        unit = "kilometers";
    } else if (choice === 5) {
        result = numericValue * 0.39;
        unit = "inches";
    } else if (choice === 6) {
        result = numericValue * 0.0328;
        unit = "feet";
    } else if (choice === 7) {
        result = numericValue * 1.09;
        unit = "yards";
    } else if (choice === 8) {
        result = numericValue * 0.62;
        unit = "miles";
    } else {
        conversionResult.innerHTML = "Invalid conversion choice";
        return;
    }

    conversionResult.innerHTML = result.toFixed(2) + " " + unit;
});