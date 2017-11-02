'use strict'


function addCardStats(){
	//Need to remake this to only use query ONCE.

	const hpContainers = document.querySelectorAll("div.HP-container");
	const attContainers = document.querySelectorAll("div.ATTACK-container");
	const imgContainers = document.querySelectorAll("img.cardImg");
	const nameContainers = document.querySelectorAll("p.cardName");
	const triviaContainers = document.querySelectorAll("p.trivia-text")

	
	// Assigning HP/ATT/IMG/NAME/TRIVIA values form "DB"
	for(let i=0; i< cardStatsArray.length; i++){
	hpContainers[i].querySelector('h3').innerHTML = cardStatsArray[i].hp;
	attContainers[i].querySelector('h3').innerHTML = cardStatsArray[i].attack;
	imgContainers[i].src = cardStatsArray[i].image;
	nameContainers[i].innerHTML = cardStatsArray[i].name;
	triviaContainers[i].innerHTML = cardStatsArray[i].text;
	}
};
