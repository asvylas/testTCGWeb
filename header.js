'use strict'
// Heading Module.
const cardList = document.querySelectorAll("div[data-cardtype]")
const ctypes = document.querySelector("ul")
const navList = document.querySelectorAll("div[data-nav]")

ctypes.addEventListener("click", function(e){
  const navToShow = document.querySelector(`div[data-nav="${e.target.id}"]`);
  for (var i = 0; i < cardList.length; i++) {
    cardList[i].className = "hidden"
  };
  for (var i = 0; i < navList.length; i++) {
    navList[i].className = "hidden"
  };
    navToShow.className = e.target.id+"container"
    if (e.target.id+"container" === "cardscontainer") {
      for (var i = 0; i < cardList.length; i++) {
        cardList[i].className = "images"
      };
    }
})


// Need MAJOR REVISION BITTE
// OLD CODE PLS NO JUDGE. ~~
