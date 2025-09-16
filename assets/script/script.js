const temperatureInput = document.querySelector("#temperature-input");
const convertFrom = document.querySelector("#convertFrom");
const convertTo = document.querySelector("#convertTo");
const convertBtn = document.querySelector(".convert-btn");
const resultTitle = document.querySelector(".result-title");
const temperatureConverted = document.querySelector(".result");

convertFrom.addEventListener("change", handleSelectChange);
convertTo.addEventListener("change", handleSelectChange);
temperatureInput.addEventListener("input", clearError);

let defaultFromRemoved = false;
let defaultToRemoved = false;

// Limpar qualquer erro anterior
function handleSelectChange() {
  clearError();
}

// Restaurar o estilo padrão do título do resultado
function clearError() {
  temperatureConverted.innerHTML = "";
  resultTitle.style.color = "";
  resultTitle.classList.add("disabled");
}

function convert() {
  // Limpar qualquer erro anterior
  clearError();

  // Verificar se os selects têm valores padrão (não selecionados)
  if (convertFrom.value === "default" || convertTo.value === "default") {
    resultTitle.classList.remove("disabled");
    resultTitle.style.color = "red";
    resultTitle.innerHTML = "Error: Please select both 'From' and 'To' units";
    return;
  }

  if (temperatureInput.value === "") {
    resultTitle.classList.remove("disabled");
    resultTitle.style.color = "red";
    resultTitle.innerHTML = "Error: Please enter a temperature value";
    return;
  }

  if (convertFrom.value == "c") {
    if (convertTo.value == "c") {
      resultTitle.classList.remove("disabled");
      resultTitle.style.color = "red";
      resultTitle.innerHTML =
        "Error: you can't convert from Celsius to Celsius";
      return;
    }
    if (convertTo.value == "f") {
      resultTitle.classList.remove("disabled");
      resultTitle.innerHTML = "Result:";
      temperatureConverted.innerHTML = `${convertCtoF(
        temperatureInput.value
      )} °F`;
      return;
    }
  }

  if (convertFrom.value == "f") {
    if (convertTo.value == "f") {
      resultTitle.classList.remove("disabled");
      resultTitle.style.color = "red";
      resultTitle.innerHTML =
        "Error: you can't convert from Fahrenheit to Fahrenheit";
      return;
    }

    if (convertTo.value == "c") {
      resultTitle.classList.remove("disabled");
      resultTitle.innerHTML = "Result:";
      temperatureConverted.innerHTML = `${convertFtoC(
        temperatureInput.value
      )} °C`;
      return;
    }
  }
}

function convertCtoF() {
  let result = temperatureInput.value * 1.8 + 32;
  return result.toFixed(2);
}

function convertFtoC() {
  let result = (temperatureInput.value - 32) / 1.8;
  return result.toFixed(2);
}
