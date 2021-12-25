//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

const text = document.querySelector(".text");
const namee = document.querySelector(".namee");

document.getElementById("textFill").addEventListener("keyup", changeText);
document.getElementById("nameFill").addEventListener("keyup", changeName);

function changeName() {
	var elementValue = document.getElementById("nameFill").value;
  document.getElementById("nameTxt").innerHTML = elementValue;
}

function changeText() {
	var elementValue = document.getElementById("textFill").value;
  document.getElementById("textTxt").innerHTML = elementValue;
}

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  text.style.transform = "translateZ(300px)";
  namee.style.transform = "translateZ(250px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  text.style.transform = "translateZ(0px)";
  namee.style.transform = "translateZ(0px)";
});