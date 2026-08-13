const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const error = document.getElementById("error");
const results = document.getElementById("results");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


convertBtn.addEventListener("click", convertTemperature);


function convertTemperature() {

    const input = temperatureInput.value.trim();
    const value = Number(input);
    const unit = unitSelect.value;

    error.textContent = "";
    results.classList.add("hidden");


    // Empty input
    if (input === "") {
        error.textContent = "Please enter a temperature.";
        return;
    }


    // Non-numeric input
    if (!Number.isFinite(value)) {
        error.textContent = "Please enter a valid numeric temperature.";
        return;
    }


    // Convert everything to Celsius first
    let celsius;


    if (unit === "celsius") {

        celsius = value;

    } else if (unit === "fahrenheit") {

        celsius = (value - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius = value - 273.15;
    }


    // Absolute zero validation
    if (celsius < -273.15) {

        error.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        return;
    }


    // Convert Celsius to other units
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;


    // Display results
    celsiusResult.textContent =
        `${celsius.toFixed(2)} °C`;

    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;

    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;


    results.classList.remove("hidden");
}