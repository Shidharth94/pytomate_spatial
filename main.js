document.getElementsByClassName('popupcontent')[0].innerHTML = document.getElementsByClassName('c1')[0].innerHTML;
document.getElementsByClassName('popupcontent2')[0].innerHTML = document.getElementsByClassName('c2')[0].innerHTML;
document.getElementsByClassName('popupcontent3')[0].innerHTML = document.getElementsByClassName('c3')[0].innerHTML;
document.getElementsByClassName('popupcontent4')[0].innerHTML = document.getElementsByClassName('c4')[0].innerHTML;



// for code 1
// Initialize Variables
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("button");

// close popup when clicked outside the popup
overlay.onclick = function() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
  document.body.style.overflow = 'scroll';
};

// Show Overlay and Popup
button.onclick = function() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// for code 2
// Initialize Variables
var overlay2 = document.getElementById("overlay2");
var popup2 = document.getElementById("popup2");
var button2 = document.getElementById("button2");

// close popup when clicked outside the popup
overlay2.onclick = function() {
  overlay2.style.display = 'none';
  popup2.style.display = 'none';
  document.body.style.overflow = 'scroll';
};

// Show Overlay and Popup
button2.onclick = function() {
  overlay2.style.display = 'block';
  popup2.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// for code 3
// Initialize Variables
var overlay3 = document.getElementById("overlay3");
var popup3 = document.getElementById("popup3");
var button3 = document.getElementById("button3");

// close popup when clicked outside the popup
overlay3.onclick = function() {
  overlay3.style.display = 'none';
  popup3.style.display = 'none';
  document.body.style.overflow = 'scroll';
};

// Show Overlay and Popup
button3.onclick = function() {
  overlay3.style.display = 'block';
  popup3.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// for code 4
// Initialize Variables
var overlay4 = document.getElementById("overlay4");
var popup4 = document.getElementById("popup4");
var button4 = document.getElementById("button4");

// close popup when clicked outside the popup
overlay4.onclick = function() {
  overlay4.style.display = 'none';
  popup4.style.display = 'none';
  document.body.style.overflow = 'scroll';
};

// Show Overlay and Popup
button4.onclick = function() {
  overlay4.style.display = 'block';
  popup4.style.display = 'block';
  document.body.style.overflow = 'hidden';
}