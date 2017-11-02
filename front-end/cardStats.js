'use strict'
/*	Card List Display & Sorting */	

const cardSortBut = function(e){
	const cards = document.querySelectorAll("div[class='images'")
	const cardType = document.querySelectorAll(`div[data-cardtype="${e.target.id}"]`);
	for (let i = 0; i < cardList.length; i++) {
	cardList[i].className = "hidden"
	};
	for (let i = 0; i < cardType.length; i++) {
	cardType[i].className = "images"
	};
}


const monsterCards = document.getElementById("monster")
const fieldCards = document.getElementById("field")
const spellCards = document.getElementById("spell")

monsterCards.addEventListener("click", cardSortBut)
fieldCards.addEventListener("click", cardSortBut)
spellCards.addEventListener("click", cardSortBut)


/* Card stats [fake DB] */
const cardStatsArray = [
	{type:"Spell", 
	name:"Bladed Devil", 
	text:"Trivia text here!", 
	image:"media/1.jpg",
	attack:"7",
	hp:"6"
	},
	
	{type:"Monster", 
	name:"Sad Gorgyle", 
	text:"Trivia text here!", 
	image:"media/2.jpg",
	attack:"5",
	hp:"9",
	},
	
	{type:"Field", 
	name:"Kitty Cat", 
	text:"Trivia text here!", 
	image:"media/3.jpg",
	attack:"6",
	hp:"6"
	},
	
	{type:"Monster", 
	name:"I'm Hungry", 
	text:"Trivia text here!", 
	image:"media/4.jpg",
	attack:"7",
	hp:"6"
	},
	
	{type:"Spell", 
	name:"Sexual Deviant", 
	text:"Trivia text here!", 
	image:"media/5.jpg",
	attack:"7",
	hp:"5"
	},
	
	{type:"Field", 
	name:"Arm-chair Warrior", 
	text:"Trivia text here!", 
	image:"media/6.jpg", 
	attack:"7",
	hp:"6"
	},
	
	{type:"Monster", 
	name:"Icy Ice", 
	text:"Trivia text here!", 
	image:"media/7.jpg",
	attack:"7",
	hp:"2"
	},
	
	{type:"Monster", 
	name:"Icier Ice", 
	text:"Trivia text here!", 
	image:"media/8.jpg",
	attack:"7",
	hp:"6"
	},
	
	{type:"Monster", 
	name:"Sisters", 
	text:"Trivia text here!", 
	image:"media/9.jpg",
	attack:"7",
	hp:"6"
	}
]