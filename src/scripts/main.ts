import "../styles/style.scss";

let gardensCheckBox: any = document.getElementById("gardens");
let lawnCheckBox: any = document.getElementById("lawn");
let plantingCheckBox: any = document.getElementById("planting");

let gardensItems: any = document.getElementsByClassName("garden");
let lawnItems: any = document.getElementsByClassName("lawn");
let plantingItems: any = document.getElementsByClassName("planting");

gardensCheckBox.addEventListener("click", () => {
  for (const iterator of gardensItems) {
    iterator.classList.toggle("blur");
  }
  gardensCheckBox.classList.toggle("orange");
});
lawnCheckBox.addEventListener("click", () => {
  for (const iterator of lawnItems) {
    iterator.classList.toggle("blur");
  }
  lawnCheckBox.classList.toggle("orange");
});
plantingCheckBox.addEventListener("click", () => {
  for (const iterator of plantingItems) {
    iterator.classList.toggle("blur");
  }
  plantingCheckBox.classList.toggle("orange");
});
