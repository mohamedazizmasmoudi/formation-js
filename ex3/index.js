/* Event Listeners */

//Syntax: element.addEventListener(event, function, useCapture);

var myP = document.getElementById("p1");
var myDiv = document.getElementById("div1");
// var myP2 = document.getElementById("myP2");
// var myDiv2 = document.getElementById("myDiv2");

document.addEventListener("click", function(){ myDiv.style.background = "lightblue" });

// // myP.onclick = function(){ myDiv.style.background = "lightblue" };

// myP.addEventListener("click", changeText);

// myDiv.addEventListener("click", changeText2);

// myDiv.addEventListener("mouseover", function(){ myDiv2.style.background = "darkkhaki" });

// function changeText() {
//     myP2.textContent = myP2.textContent += "According to a Cornell publication, the answer is ~700 pounds."
// };

// function changeText2() {
//     myP2.textContent = myP2.textContent += "THE REAL ANSWER."
// };

// myP.removeEventListener("click", changeText);