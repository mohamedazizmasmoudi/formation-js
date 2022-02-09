/* DOM Events */

function changeColor(obj) { 
  obj.style.color = "Peru";
}

document.getElementById("myBtn").onclick = changeBackgroundColorToMediumOrchid;

function changeBackgroundColorToMediumOrchid() {
  document.querySelector('body').style.background = "MediumOrchid";
}

function removeLetterFromH1() { 
  var h1 = document.querySelector('h1')
  console.log('h1.textContent',h1.textContent)
  h1.textContent = h1.textContent.slice(0, -1);
  console.log('h1.textContent after',h1.textContent)

}

function mOver(obj) { 
  obj.innerHTML = "GET OFF ME! "
}

function mOut(obj) { 
  obj.innerHTML = "Thank you 😃"
}

//https://www.w3schools.com/jsref/dom_obj_event.asp

// const checkCookies = (this) => {
//   console.log('any 5demt')
// }
function checkCookies() { 
  console.log('any 5demt')
}