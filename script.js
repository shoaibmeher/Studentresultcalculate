let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let matha = document.getElementById("matha").value;
  let mathb = document.getElementById("mathb").value;
  let physics = document.getElementById("physics").value;
  let english = document.getElementById("english").value;
  let result = document.getElementById("secondry");
  let mathac = parseInt(matha);
  let mathab = parseInt(mathb);
  let physicsa = parseInt(physics);
  let englisha = parseInt(english);
  if (matha === "" || mathb === "" || physics === "" || english === "") {
    result.innerText = `Please Write Your number`;
  } else {
    let total = mathac + mathab + physicsa + englisha;
    let resul = (total / 400) * 100;
    let p = resul.toFixed(2);
    if (p > 89 && p < 100) {
      let grade = "A+";
      let results = "Pass";
      result.innerText = `Out of 400 your total is ${total} and percentage is ${p}%. Your grade is ${grade}. You are ${results}.`;
    } else if (p > 79 && p < 90) {
      let grade = "A";
      let results = "Pass";
      result.innerText = `Out of 400 your total is ${total} and percentage is ${p}%. Your grade is ${grade}. You are ${results}.`;
    } else if (p > 69 && p < 80) {
      let grade = "B";
      let results = "Pass";
      result.innerText = `Out of 400 your total is ${total} and percentage is ${p}%. Your grade is ${grade}. You are ${results}.`;
    } else if (p > 59 && p < 70) {
      let grade = "C";
      let results = "Pass";
      result.innerText = `Out of 400 your total is ${total} and percentage is ${p}%. Your grade is ${grade}. You are ${results}.`;
    } else if (p > 49 && p < 60) {
      let grade = "C";
      let results = "Pass";
      result.innerText = `Out of 400 your total is ${total} and percentage is ${p}%. Your grade is ${grade}. You are ${results}.`;
    } else if (p > 39 && p < 50) {
      let grade = "D";
      let results = "Pass";
      result.innerText = `Out of 400 your total is ${total} and percentage is ${p}%. Your grade is ${grade}. You are ${results}.`;
    } else if (p > 33 && p < 40) {
      let grade = "F";
      let results = "Pass";
      result.innerText = `Out of 400 your total is ${total} and percentage is ${p}%. Your grade is ${grade}. You are ${results}.`;
    } else {
      let grade = "E";
      let results = "Fail";
      result.innerText = `Out of 400 your total is ${total} and percentage is ${p}%. Your grade is ${grade}. You are ${results}.`;
    }
    reset();
  }
});

function reset() {
  let matha = (document.getElementById("matha").value = "");
  let mathb = (document.getElementById("mathb").value = "");
  let physics = (document.getElementById("physics").value = "");
  let english = (document.getElementById("english").value = "");
}
