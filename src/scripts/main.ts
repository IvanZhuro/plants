import "../styles/style.scss";
import arrowTop from "../assets/svg/accordion_btn_top.svg";
import arrowDown from "../assets/svg/accordion_btn_down.svg";
import drpBtnUnactive from "../assets/svg/drop_btn_unactive.svg";
import drpBtnActive from "../assets/svg/drop_btn_active.svg";
import cardJson from './card.json';

let gardensCheckBox: any = document.getElementById("gardens");
let lawnCheckBox: any = document.getElementById("lawn");
let plantingCheckBox: any = document.getElementById("planting");

let gardensItems: any = document.getElementsByClassName("garden");
let lawnItems: any = document.getElementsByClassName("lawn");
let plantingItems: any = document.getElementsByClassName("planting");

let priceItem: any = document.getElementsByClassName("price-item");

let contactSelect: any = document.querySelector(".contacts-select");

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

let price: any = {
  basics: 15,
  standard: 25,
  proCare: 35,
};

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
        iterator.getElementsByClassName("unwrap-content")[0].style.borderTop =
          "none";
        iterator.getElementsByClassName("unwrap-content")[0].style.marginTop =
          "0px";
        iterator.getElementsByClassName("unwrap-content")[0].innerHTML = "";
      }, 500);
    } else {
      iterator.getElementsByClassName(
        "arrow"
      )[0].innerHTML = `<img src=${arrowTop} alt="yes">`;
      setTimeout(() => {
        iterator.getElementsByClassName("unwrap-content")[0].style.borderTop =
          "0.5px solid #AEA1A1";
        iterator.getElementsByClassName("unwrap-content")[0].style.marginTop =
          "10px";
        iterator.getElementsByClassName(
          "unwrap-content"
        )[0].innerHTML = `<p class="text">Release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
        <p class="price"><span>$<span class="count">${
          price[iterator.id]
        }</span></span> / per hour</p>
        <button>Order</button>`;
      }, 500);
    }
    iterator.classList.toggle("unWrap");
  });
}

let down = false, display = 'none', city = '', phone ='', adress ='';

function getContactSelect(bgColor: any, image:any, top : any, display : any, city ='', phone='', adress ='') {
  contactSelect.innerHTML = `
  <div class='contacts-drop'>
    <div class="top" style='background-color:${bgColor}'><p>City</p><img src=${image}></div>
    <div class="shadow"></div>
    <div class='drop-list' style='top:${top}px'>
      <ul>
        <li id='01'>Canandaigua, NY</li>
        <li id='02'>New York City</li>
        <li id='03'>Yonkers, NY</li>
        <li id='04'>Sherrill, NY</li>
      </ul>
    </div>
    <div class='card' style='display:${display}'>
      <p>City:<span>${city}</span></p>
      <p>Phone:<span>${phone}</span></p>
      <p>Office adress:<span>${adress}</span></p>
      <button>Call us</button>
    </div>
  </div>`;
  let contactTop : any = contactSelect.querySelector(".top")
  let dropList : any = contactSelect.querySelector('.drop-list')
  contactTop.addEventListener('click', () => {
    if (down) {
      down = !down;
      getContactSelect('#D6E7D2',drpBtnUnactive, -234, display,city,phone,adress)
    } else {
      down = !down;
      getContactSelect('#C1E698',drpBtnActive, 0 , display,city,city,phone);
    }
  })
  for (const iterator of dropList.querySelector('ul').querySelectorAll('li')) {
    iterator.addEventListener('click', (element:any)=>{

      for (const iterator of cardJson) {
        if (iterator.id === Number(element.target.id)) {
          city = iterator.city;
          phone = iterator.phone;
          adress = iterator.office;
          getContactSelect('#D6E7D2', drpBtnUnactive, -234, 'flex', city, phone, adress);
        }
      }
    })
  }
};

getContactSelect('#D6E7D2', drpBtnUnactive, -234, display, city, phone, adress);