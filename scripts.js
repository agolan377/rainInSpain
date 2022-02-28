async function scrambleButtonClick() {
  fetch("words.txt")
    .then((response) => response.text())
    .then((data) => {
      let wordsEndingInAin = [];
      let wordsEndingInAys = [];
      let wordsEndingInNly = [];
      let wordArr = data.split("\n");
      for (let i = 0; i < wordArr.length; i++) {
        //console.log(wordArr[i]);
        if (wordArr[i].endsWith("ain")) {
          wordsEndingInAin.push(wordArr[i]);
        }
        if (wordArr[i].endsWith("ays")) {
          wordsEndingInAys.push(wordArr[i]);
        }
        if (wordArr[i].endsWith("nly") && wordArr[i].length < 7) {
          wordsEndingInNly.push(wordArr[i]);
        }
      }

      let temp1 = wordsEndingInAin.length;
      let temp = Math.floor(Math.random() * wordsEndingInAin.length);
      document.getElementById("rainInSpain").innerText =
        "The " +
        wordsEndingInAin[Math.floor(Math.random() * wordsEndingInAin.length)] +
        " in " +
        wordsEndingInAin[Math.floor(Math.random() * wordsEndingInAin.length)] +
        " " +
        wordsEndingInAys[Math.floor(Math.random() * wordsEndingInAys.length)] +
        " " +
        wordsEndingInNly[Math.floor(Math.random() * wordsEndingInNly.length)] +
        " in the " +
        wordsEndingInAin[Math.floor(Math.random() * wordsEndingInAin.length)] + "!";
    });
}
