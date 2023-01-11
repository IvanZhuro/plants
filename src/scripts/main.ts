import "../styles/style.scss";
import arrowTop from "../assets/svg/accordion_btn_top.svg";
import arrowDown from "../assets/svg/accordion_btn_down.svg";

let gardensCheckBox: any = document.getElementById("gardens");
let lawnCheckBox: any = document.getElementById("lawn");
let plantingCheckBox: any = document.getElementById("planting");

let gardensItems: any = document.getElementsByClassName("garden");
let lawnItems: any = document.getElementsByClassName("lawn");
let plantingItems: any = document.getElementsByClassName("planting");

let priceItem : any= document.getElementsByClassName("price-item");

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

let price : any= {
  basics : 15,
  standard : 25,
  proCare : 35
}

for (const iterator of priceItem) {
  iterator.getElementsByClassName(
    "arrow"
  )[0].innerHTML = `<img src=${arrowDown} alt="yes">`;
  iterator.getElementsByClassName("arrow")[0].addEventListener("click", () => {
    if (iterator.classList.contains("unWrap")) {
      iterator.getElementsByClassName(
        "arrow"
      )[0].innerHTML = `<img src=${arrowDown} alt="yes">`;
      setTimeout(() => {
        iterator.getElementsByClassName(
          "unwrap-content"
        )[0].style.borderTop = 'none';
        iterator.getElementsByClassName(
          "unwrap-content"
        )[0].style.marginTop = '0px';
        iterator.getElementsByClassName("unwrap-content")[0].innerHTML = "";
      }, 500);
    } else {
      iterator.getElementsByClassName(
        "arrow"
      )[0].innerHTML = `<img src=${arrowTop} alt="yes">`;
      setTimeout(() => {
        iterator.getElementsByClassName(
          "unwrap-content"
        )[0].style.borderTop = '0.5px solid #AEA1A1';
        iterator.getElementsByClassName(
          "unwrap-content"
        )[0].style.marginTop = '10px';
        iterator.getElementsByClassName(
          "unwrap-content"
        )[0].innerHTML = `<p class="text">Release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
        <p class="price"><span>$<span class="count">${price[iterator.id]}</span></span> / per hour</p>
        <button>Order</button>`;
      }, 500);
    }
    iterator.classList.toggle("unWrap");
  });
}
