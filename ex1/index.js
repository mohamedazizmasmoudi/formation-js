// DOM Manipulation: Selecting & changing website elements

// var div1 = document.getElementById('div1');

// var uniycle = document.getElementsByClassName('unicycle');

// var paragraphs = document.getElementsByTagName('p');

var queryUnicycle = document.querySelectorAll('.unicycle');
console.log('queryUnicycle',queryUnicycle)
// var queryAll = document.querySelectorAll('.unicycle, #div2');
// const getValue = document.getElementById('blog test');
// console.log('innerHTML',getValue.innerHTML)
// console.log('innerText',getValue.innerText)
// console.log('textContent',getValue.textContent)


var text = "<h1>Hello World</h1>";

// queryUnicycle.innerHTML = text;

for (i = 0; i < queryUnicycle.length; ++i) {
  queryUnicycle[i].innerHTML = text;
}
document.querySelector("body").style.backgroundColor="red"



/* Setting and getting css styles */
// var line = document.getElementById('line');
// var attribute = document.getElementById('attribute');

// line.style.background = 'red';
// attribute.style.boxShadow = "2px 2px 5px 1px blue";

// line.style.cssText = "color: blue; border: 1px solid black"; 

// attribute.setAttribute("style", "color:red; border: 1px solid blue;");

// console.log(line.style);
// console.log(window.getComputedStyle(line));