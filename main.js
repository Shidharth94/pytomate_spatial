function popupFunc(i){
	document.getElementsByClassName('popupcontent'+i)[0].innerHTML = document.getElementsByClassName('c'+i)[0].innerHTML;
	var overlay = document.getElementById("overlay"+i);
	var popup = document.getElementById("popup"+i);
	var button = document.getElementById("button"+i);

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
}

popupFunc('1');
popupFunc('2');
popupFunc('3');
popupFunc('4');
popupFunc('5');