﻿'use strict'

const cardSortBut = function(e) {
  const cards = document.querySelectorAll("div[class='images'");
  const cardToShow = document.querySelectorAll(`div[data-cardtype="${e.target.id}"]`);
  for (let i = 0; i < cardList.length; i++) {
    cardList[i].className = "hidden"
  };
  for (let i = 0; i < cardToShow.length; i++) {
    cardToShow[i].className = "images"
  };
};

//Gettting container ID and attaching event listener to it
document.getElementById("ctypes").addEventListener("click", function(e) {
  if (e.target.className === "buttoncardtypes") {
    cardSortBut(e)
  };
});

const cardStatsReq = new XMLHttpRequest()
cardStatsReq.open("GET", "https://raw.githubusercontent.com/asvylas/testTCGWeb/master/media/Cards.json");
cardStatsReq.onload = function(){
  const cardStats = JSON.parse(cardStatsReq.responseText);
  addCardStats(cardStats)
}
cardStatsReq.send();

function addCardStats(data) {
//Query DOM for container element and then query the element instead.
  const cardContainer = document.getElementById("cardscontainer");
  const hpContainers = cardContainer.querySelectorAll("div.HP-container");
  const attContainers = cardContainer.querySelectorAll("div.ATTACK-container");
  const imgContainers = cardContainer.querySelectorAll("img.cardImg");
  const nameContainers = cardContainer.querySelectorAll("p.cardName");
  const triviaContainers = cardContainer.querySelectorAll("p.trivia-text")


  // Assigning HP/ATT/IMG/NAME/TRIVIA values form json
  for (let i = 0; i < data.length; i++) {
    hpContainers[i].querySelector('h3').innerHTML = data[i].hp;
    attContainers[i].querySelector('h3').innerHTML = data[i].attack;
    imgContainers[i].src = data[i].image;
    nameContainers[i].innerHTML = data[i].name;
    triviaContainers[i].innerHTML = data[i].text;
  }
};
