'use strict'
// Heading Module.
const home = document.getElementById("home")
const cards = document.getElementById("cards")
const map = document.getElementById("map")
const ctypes = document.getElementById("ctypes")
const cardList = document.querySelectorAll("div[data-cardtype]")
const mapVisual = document.getElementById("mapVisual")
const headerClick = document.querySelector('header')

// Need MAJOR REVISION BITTE
// OLD CODE PLS NO JUDGE. ~~
home.addEventListener("click", hp);

function hp() {
  if (mapVisual.className === "map") {
    mapVisual.className = "hidden"
  };
  if (homepage.className === "hidden") {
    homepage.className = "qoute"
  };
  if (ctypes.className === "row") {
    ctypes.className = "hidden"
  };
  for (let i = 0; i < cardList.length; i++) {
    cardList[i].className = "hidden"
  }
};

cards.addEventListener("click", showcards);

function showcards() {
  //Calling function to assign values to cards
  addCardStats();

  if (homepage.className === "qoute") {
    homepage.className = "hidden"
  };
  if (mapVisual.className === "map") {
    mapVisual.className = "hidden"
  };
  if (ctypes.className === "hidden") {
    ctypes.className = "row"
  };
  for (let i = 0; i < cardList.length; i++) {
    cardList[i].className = "images"
  };

};

map.addEventListener("click", showmap);

function showmap() {
  if (homepage.className === "qoute") {
    homepage.className = "hidden"
  };
  if (ctypes.className === "row") {
    ctypes.className = "hidden"
  };
  if (mapVisual.className === "hidden") {
    mapVisual.className = "map"
  };
  for (let i = 0; i < cardList.length; i++) {
    cardList[i].className = "hidden"
  };

};
