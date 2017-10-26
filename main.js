/*	Card List Display & Sorting */
var cardSortBut = function(e){
	var cards = document.querySelectorAll("div[class='images'")
	var cardType = document.querySelectorAll(`div[data-cardtype="${e.target.id}"]`);
	for (i = 0; i < cardList.length; i++) {
	cardList[i].className = "hidden"
	};
	for (i = 0; i < cardType.length; i++) {
	cardType[i].className = "images"
	};
}

var monsterCards = document.getElementById("monster")
var fieldCards = document.getElementById("field")
var spellCards = document.getElementById("spell")

monsterCards.addEventListener("click", cardSortBut)
fieldCards.addEventListener("click", cardSortBut)
spellCards.addEventListener("click", cardSortBut)
