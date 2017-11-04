'use strict'

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

function addCardStats(cardStats) {
  //Need to remake this to only use query ONCE.

  const hpContainers = document.querySelectorAll("div.HP-container");
  const attContainers = document.querySelectorAll("div.ATTACK-container");
  const imgContainers = document.querySelectorAll("img.cardImg");
  const nameContainers = document.querySelectorAll("p.cardName");
  const triviaContainers = document.querySelectorAll("p.trivia-text")


  // Assigning HP/ATT/IMG/NAME/TRIVIA values form "DB"
  for (let i = 0; i < cardStats.length; i++) {
    hpContainers[i].querySelector('h3').innerHTML = cardStats[i].hp;
    attContainers[i].querySelector('h3').innerHTML = cardStats[i].attack;
    imgContainers[i].src = cardStats[i].image;
    nameContainers[i].innerHTML = cardStats[i].name;
    triviaContainers[i].innerHTML = cardStats[i].text;
  }
};
