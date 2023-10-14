const output = document.querySelector("#output");
const button = document.querySelector("#inputButton");
const input = document.querySelector("#inputText");
const pillButton = document.querySelector("#thePill");
const bluePill1 = document.querySelector("#m0");





button.addEventListener('click', function () {
    // output.innerHTML = input.value;
    let varOutput = input.value;
    // console.log(varOutput.length);
    let outputDiv = document.createElement("div"); //Creates a <p> to the label
    for (let i = 0; i < varOutput.length; i++) {
        let outputSpan = document.createElement("span");
        outputSpan.textContent = varOutput[i];
        outputSpan.setAttribute("id", "m" + i);
        // outputSpan.setAttribute("class", "bluePill");
        // outputPara.appendChild(outputPara);
        // console.log(varOutput[i]);
        outputDiv.appendChild(outputSpan);
    }
    output.appendChild(outputDiv);
});

pillButton.addEventListener('click', function () {
    const bluePill = []
    bluePill.push(document.querySelectorAll("span"));
    console.log(bluePill.length);
    let timer = 0;
    bluePill.forEach(element => {
        element.forEach(index => {
            setTimeout(()=>{
                index.classList.add("spanOp");
                // index.style.opacity = 0;
            }, timer*100);
            timer++
            // setTimeout(()=>{
            //     index.style.opacity = 0;
            // }, 900);
        });
    });

}); //Function End
// 0.${i}s;

function addValue() {
    const output = document.querySelector("#output");
    const button = document.querySelector("#inputButton");
    const input = document.querySelector("#inputText");
    const pillButton = document.querySelector("#thePill");
    const bluePill1 = document.querySelector("#m0");
}