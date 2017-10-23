// Heading Module.
var home = document.getElementById ("home")
var cards = document.getElementById ("cards")
var rules = document.getElementById ("rules")
var newsi = document.getElementById ("news_b")
var news = document.getElementById ("news")
var about_cont = document.getElementById("about_top")
var ctypes = document.getElementById("ctypes")

var cardlist = [
	document.getElementById("card1"),
	document.getElementById("card2"),
	document.getElementById("card3"),
	document.getElementById("card4"),
	document.getElementById("card5"),
	document.getElementById("card6"),
	document.getElementById("card7"),
	document.getElementById("card8"),
	document.getElementById("card9")
];

home.addEventListener("click", hp);
function hp() {
	console.log("Home is working");
	if (homepage.className === "hidden") {
		homepage.className = "qoute"
		};
	if (news.className ==="news") {
		news.className = "hidden"
		};
	if (ctypes.className==="row"){
	ctypes.className = "hidden"
	};	
		var i = 0;
		var y = cardlist.length;
		while ( i < y) {cardlist[i].className = "hidden",
		i++
		};
};

cards.addEventListener("click", showcards);
function showcards() {
	console.log("Cards are working");
	if (homepage.className ==="qoute") {
		homepage.className = "hidden"};
	if (news.className ==="news") {
		news.className = "hidden"
		};		
	if (ctypes.className==="hidden"){
		ctypes.className = "row"
		};
	var i = 0;
	var y = cardlist.length;
		while ( i < y) {
			if (cardlist[i].className === "hidden") {
				cardlist[i].className = "images"; 
		};
			i++;
		};
};

newsi.addEventListener("click", shownews);
function shownews() {
	console.log("News are working");
		if (homepage.className ==="qoute") {
			homepage.className = "hidden"};
	var i = 0;
	var y = cardlist.length;
		while ( i < y) {
		if (cardlist[i].className === "images") {
				cardlist[i].className = "hidden"; 
		};
			i++;
		};
		if (news.className ==="hidden") {
		news.className = "news"
		};
	if (ctypes.className==="row"){
		ctypes.className = "hidden"
		};
};