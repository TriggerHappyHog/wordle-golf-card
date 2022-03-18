console.log("Script Loaded");

let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");
let l3 = document.getElementById("l3");
let l4 = document.getElementById("l4");
let l5 = document.getElementById("l5");
let l6 = document.getElementById("l6");

document.onkeyup = (e) => {

  // Backspace check
  if(e.key == "Backspace"){
    if(l6.innerText.length > 0){
      l6.innerText = "";
    } else if(l5.innerText.length > 0){
      l5.innerText = "";
    } else if(l4.innerText.length > 0){
      l4.innerText = "";
    } else if(l3.innerText.length > 0){
      l3.innerText = "";
    } else if(l2.innerText.length > 0){
      l2.innerText = "";
    } else if(l1.innerText.length > 0){
      l1.innerText = "";
    }
  } else if(e.key >= "0" && e.key <= "9"){
    if(l1.innerText.length < 1){
      l1.innerText = e.key;
    } else if(l2.innerText.length < 1){
      l2.innerText = e.key;
    } else if(l3.innerText.length < 1){
      l3.innerText = e.key;
    } else if(l4.innerText.length < 1){
      l4.innerText = e.key;
    } else if(l5.innerText.length < 1){
      l5.innerText = e.key;
    }  else if(l6.innerText.length < 1){
      l6.innerText = e.key;
    }
  } else if(e.key = "Enter"){
    var word = l1.innerText + l2.innerText + l3.innerText + l4.innerText + l5.innerText;
  }
}