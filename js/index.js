function onInit() {
  console.log("Ready");
  //calcSalary(usernmae);
}

function calcSalary() {
  var fram = prompt("Enter Framework first char A/R/V");

  var eResultMsg = document.querySelector(".resultMsg");
  console.dir(eResultMsg);
  eResultMsg.innerHTML = "hiii";
  if (fram === "A" || fram === "a") {
    var hours = prompt("Enter total hours work");
    var result = hours * 150;
    eResultMsg.innerHTML = `as Angular programmer can earn ${result.toLocaleString()} ₪ per month`;
    setTimeout(() => {
      eResultMsg.innerHTML = "";
    }, 3000);
  } else if (fram === "R" || fram === "r") {
    var hours = prompt("Enter total hours work");
    var result = hours * 60;
    eResultMsg.innerHTML = `as React programmer can earn ${result.toLocaleString()} ₪ per month`;
    setTimeout(() => {
      eResultMsg.innerHTML = "";
    }, 3000);
  } else if (fram === "V" || fram === "v") {
    var hours = prompt("Enter total hours work");
    var result = hours * 50;
    eResultMsg.innerHTML = `as Vue programmer can earn ${result.toLocaleString()} ₪ per month`;
    setTimeout(() => {
      eResultMsg.innerHTML = "";
    }, 3000);
  } else alert("Bye Bye");
}
