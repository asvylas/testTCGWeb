// Heading Module.
var home = document.getElementById ("home")
var cards = document.getElementById ("cards")
var map = document.getElementById("map")
var ctypes = document.getElementById("ctypes")
var cardList = document.querySelectorAll("div[data-cardtype]")
var mapVisual = document.getElementById("mapVisual")



home.addEventListener("click", hp);
function hp() {
	if (mapVisual.className==="map"){
		mapVisual.className = "hidden"
	};
	if (homepage.className === "hidden") {
		homepage.className = "qoute"
		};
	if (ctypes.className==="row"){
	ctypes.className = "hidden"
	};	
	for (i = 0; i < cardList.length; i++) {
	cardList[i].className = "hidden"
	}
};

cards.addEventListener("click", showcards);
function showcards() {
	if (homepage.className ==="qoute") {
		homepage.className = "hidden"
	};
	if (mapVisual.className==="map"){
		mapVisual.className = "hidden"
	};
	if (ctypes.className==="hidden"){
		ctypes.className = "row"
	};
	for (i = 0; i < cardList.length; i++) {
	cardList[i].className = "images"
	};
	
};

map.addEventListener("click", showmap);
function showmap() {
	if (homepage.className ==="qoute") {
		homepage.className = "hidden"
	};
	if (ctypes.className==="row"){
		ctypes.className = "hidden"
	};
	if (mapVisual.className==="hidden"){
		mapVisual.className = "map"
	};
	for (i = 0; i < cardList.length; i++) {
	cardList[i].className = "hidden"
	};
	
};