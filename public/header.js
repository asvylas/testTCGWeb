'use strict'
// Hide/Sow Content depening on pressed button. {BIT MESSY RIGTH NOW}
const cardList = document.querySelectorAll("div[data-cardtype]")
const ctypes = document.querySelector("ul")
const navList = document.querySelectorAll("div[data-nav]")
const cardTypes = document.getElementById("ctypes")

ctypes.addEventListener("click", function(e){
  const createdDivs = document.querySelectorAll('div .map-hidden')
  const navToShow = document.querySelector(`div[data-nav="${e.target.id}"]`);
  cardTypes.className = "hidden";
  for (let i = 0; i < cardList.length; i++) {
    cardList[i].className = "hidden"
  }
  for (let i = 0; i < navList.length; i++) {
    navList[i].className = "hidden"
  }
   for (let i = 0; i < createdDivs.length; i++) {
    createdDivs[i].className = "map-hidden"
  }
  
  
    navToShow.className = e.target.id+"container"
    if (e.target.id+"container" === "cardscontainer") {
      cardTypes.className = "row";
      for (let i = 0; i < cardList.length; i++) {
        cardList[i].className = "images"
      }
}
console.log(createdDivs)
});

const mapContainer = document.getElementById("map-container");
const createCardContainers = function(data){
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement('div');
    div.innerHTML = "";
    div.className= "map-hidden";
    mapContainer.appendChild(div);
  }
};
