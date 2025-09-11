const temperatureInput = document.querySelector("#temperature-input");
const convertFrom = document.querySelector("#convertFrom");
const convertTo = document.querySelector("#convertTo");
const convertBtn = document.querySelector(".convert-btn");
const resultTitle = document.querySelector(".result-title");
const temperatureConverted = document.querySelector(".result");

function convert(e) {
  if (temperatureInput.value == "") {
    return;
  }

  if (convertFrom.value == "c") {
    if (convertTo.value == "f") {
      return (temperatureConverted.innerHTML += convertCtoF(
        temperatureInput.value + " F"
      ));
    } else if (convertTo.value == "k") {
      return convertCtoK(temperatureInput.value);
    }
  }

  if (convertFrom.value == "f") {
    if (convertTo.value == "c") {
      return convertFtoC(temperatureInput.value);
    } else if (convertTo.value == "k") {
      return convertFtoK(temperatureInput.value);
    }
  }

  if (convertFrom.value == "k") {
    if (convertTo.value == "c") {
      return convertKtoC(temperatureInput.value);
    } else if (convertTo.value == "f") {
      return convertKtoF(temperatureInput.value);
    }
  }
}

function convertCtoF() {
  let result = temperatureInput.value * 1.8 + 32;
  return result;
}

function convertCtoK() {
  let result = temperatureInput.value + 273.15;
  return result;
}

function convertKtoC() {
  let result = temperatureInput.value - 273.15;
  return result;
}

function convertKtoF() {
  let result = temperatureInput.value * 1.8 - 459.67;
  return result;
}

function convertFtoK() {
  let result = (temperatureInput.value - 32) * 1.8 + 273.15;
  return result;
}

function convertFtoC() {
  let result = 1.8 * temperatureInput.value - 32;
  return result;
}
