const buttonsEle = document.querySelectorAll("button");

const inputFieldEle = document.getElementById("result");

// console.log(buttonsEle);
for (let i = 0; i < buttonsEle.length; i++) {
  buttonsEle[i].addEventListener("click", () => {
    const buttonValue = buttonsEle[i].textContent;
    // console.log(buttonsEle[i].textContent);
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}
function clearResult() {
  inputFieldEle.value = "";
}

function calculateResult() {
  inputFieldEle.value = eval(inputFieldEle.value);
}

function appendValue(buttonValue) {
  inputFieldEle.value += buttonValue; //+= give on type 123 otherwise give 1 or what you type inplace repeat
}
