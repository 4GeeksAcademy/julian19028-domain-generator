/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let first = ["the", "our", "your"];
let second = ["highest", "best", "big", "little"];
let third = ["house", "company", "flag", "planet"];
let domain = [".com", ".net", ".gov", ".co"];

console.log("Any string");
for (let i = 0; i < first.length; i++) {
  // console.log(first[i]);
  for (let j = 0; j < second.length; j++) {
    for (let m = 0; m < third.length; m++) {
      for (let t = 0; t < third.length; t++) {
        console.log(first[i] + second[j] + third[m] + domain[t]);
      }
    }
  }
}
