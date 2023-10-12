
matrixColums()

function letter() {
    //Creates an array with random symbols and upper- lowercase
    const letters = [];
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    for (let i = 0; i < 790; i++) {
        const tf = Math.floor(Math.random() * 2);
        let adding = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (tf == 1) {
            letters.push(adding);
        } else
            letters.push(adding.toLowerCase());

    }
    return letters.join("");
}

function matrixColums() {
    //Array with font sizes for randomization
    const fontSize = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
    let posLeft = 0;
    let max = 1;
    let min = 0.6;
    // for (let i = 0; i < 400; i++) {
    while (posLeft < 100) {
        posLeft = posLeft + (Math.random() * (max - min) + min);

        let matrixPara = document.createElement("p");
        //Adds uniqe ID to each paragraph
        // matrixPara.setAttribute("id", `matrix${i}`);
        matrixPara.setAttribute("class", `matrix`);

        // ***** STYLE SECTION *****

        //Adds random fontsize
        matrixPara.style.fontSize = fontSize[Math.floor(Math.random() * fontSize.length)];
        //Adds random z-index for possible overlapping
        matrixPara.style.zIndex = -Math.abs(Math.floor(Math.random() * (5 - 1) + 1));
        matrixPara.style.left = posLeft + "vw";

        // Animation

        matrixPara.style.animation = `matrixMove ${Math.random() * (250 - 50) + 50}s infinite`
        // **** END STYLE SECTION ****

        //Appends to DOM
        matrixPara.innerHTML = letter()
        document.querySelector("#matrixBg").appendChild(matrixPara)
    }
}