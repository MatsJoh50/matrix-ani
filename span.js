const output = document.querySelector("#output");
const button = document.querySelector("#inputButton");
const input = document.querySelector("#inputText");
const pillButton = document.querySelector("#thePill");
const bluePill = document.querySelectorAll(".bluePill");

button.addEventListener('click', function () {
    // output.innerHTML = input.value;
    let varOutput = input.value;
    console.log(varOutput.length);
    let outputPara = document.createElement("p"); //Creates a <p> to the label
    for (let i = 0; i < varOutput.length; i++) {
        let outputSpan = document.createElement("span");
        outputSpan.textContent = varOutput[i];
        outputSpan.setAttribute("id", i);
        outputSpan.setAttribute("class", "bluePill");
        outputPara.appendChild(outputSpan);
        // console.log(varOutput[i]);
    }
    output.appendChild(outputPara);

});

pillButton.addEventListener('click', function () {
    console.log(output.innerHTML);
    for (let i = 0; i < output.innerHTML.length; i++) {
        bluePill.style.animation = `opacity: 0% 0.${i};`;
    }
});