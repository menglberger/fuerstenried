
/*
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
*/

var myImage = document.querySelector('img');
var header = 'München-Fürstenried, präsentiert für ';

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/schloss-fuerstenried.jpg') {
    myImage.setAttribute ('src','images/sparkassenhochhaus.jpg');
  } else {
    myImage.setAttribute ('src','images/schloss-fuerstenried.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = header + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = header + storedName;
}

myButton.onclick = function() {
  setUserName();
}
