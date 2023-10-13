const output = document.querySelector("#output");
const button = document.querySelector("#inputButton");
const input = document.querySelector("#inputText");
const pillButton = document.querySelector("#thePill");
const bluePill1 = document.querySelector("#m0");
addValue





button.addEventListener('click', function () {
    // output.innerHTML = input.value;
    let varOutput = input.value;
    console.log(varOutput.length);
    let outputPara = document.createElement("p"); //Creates a <p> to the label
    for (let i = 0; i < varOutput.length; i++) {
        let outputSpan = document.createElement("span");
        outputSpan.textContent = varOutput[i];
        outputSpan.setAttribute("id", "m" + i);
        // outputSpan.setAttribute("class", "bluePill");
        outputPara.appendChild(outputSpan);
        // console.log(varOutput[i]);
    }
    output.appendChild(outputPara);
    addValue
});

pillButton.addEventListener('click', function () {

    for (let i = 0; i < output.innerHTML.length; i++) {
        const bluePill = document.querySelectorAll("m");

        bluePill.style.animation = "spanMove 2s";
    }
});
// 0.${i}s;

function addValue() {
    const output = document.querySelector("#output");
    const button = document.querySelector("#inputButton");
    const input = document.querySelector("#inputText");
    const pillButton = document.querySelector("#thePill");
    const bluePill1 = document.querySelector("#m0");
    }