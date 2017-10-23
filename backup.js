cards.addEventListener("click", showhidden);
function showhidden() {
	var cardid = cardlist[0].attributes["id"].value;
	var card = cardid.className;
	console.log(card);
	if (cardlist[0].className === "hidden") {
		cardlist[0].className = "firstimage"; 
	}	else {
		cardlist[0].className = "hidden";
	}
};

cards.addEventListener("click", showhidden1);
function showhidden1() {
	var cardid = cardlist[1].attributes["id"].value;
	var card = cardid.className;
	console.log(card);
	if (cardlist[1].className === "hidden") {
		cardlist[1].className = "images"; 
	}	else {
		cardlist[1].className = "hidden";
	}
};

cards.addEventListener("click", showhidden2);
function showhidden2() {
	var cardid = cardlist[2].attributes["id"].value;
	var card = cardid.className;
	console.log(card);
	if (cardlist[2].className === "hidden") {
		cardlist[2].className = "images"; 
	}	else {
		cardlist[2].className = "hidden";
	}
};
cards.addEventListener("click", showhidden3);
function showhidden3() {
	var cardid = cardlist[3].attributes["id"].value;
	var card = cardid.className;
	console.log(card);
	if (cardlist[3].className === "hidden") {
		cardlist[3].className = "images"; 
	}	else {
		cardlist[3].className = "hidden";
	}
};

pbh.addEventListener("click", function() {
	if (pbs.className === "hidden") {
		pbs.className = "pbs"; 
	}	else {
			pbs.className = "hidden";
		}
});
////////////////////////////////////////////
////////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////
//////////////////////////////////////////
////////////////////////////////
////////////////////////////////////////
//////////////////////////////
////////////////////////////////////
/////////////////////////////
/////////////////////////////////
/////////////////////////
//////////////////////////////
//////////////////////
//////////////////////////
/////////////////
/
cards.addEventListener("click", function (){
	if (wolf.className === "imageshidden") { 
		wolf.className = "images";
	}	else {
		wolf.className ="imageshidden";
	}
});

cards.addEventListener("click", function (){
	if (blades.className === "firstimagehidden") {
		blades.className = "firstimage";
	}	else {
		blades.className ="firstimagehidden";
	}
});
cards.addEventListener("click", function (){
	if (legion.className === "imageshidden") {
		legion.className = "images";
	}	else {
		legion.className ="imageshidden";
	}
});

cards.addEventListener("click", function (){
	if (golem.className === "imageshidden") {
		golem.className = "images";
	}	else {
		golem.className ="imageshidden";
	}
});

pbh.addEventListener("click", function() {
	if (pbs.className === "pbh") {
		pbs.className = "pbs"; 
	}	else {
			pbs.className = "pbh";
		}
});
cards.addEventListener("click", showitem);

function showitem() {
	var picId = this.attributes["data-hs"].value;
	var pic = document.getElementById(picId);
	console.log(this);
	console.log(picId);
	if (pic.className === "imageshidden") {
		pic.className = "images";
		}
		else {
		pic.nameClass = "imageshidden"
		}
};

cards.addEventListener("click", function (){
	if (blades.className === "firstimagehidden") {
		blades.className = "firstimage";
	}	else {
		blades.className ="firstimagehidden";
	}
});

//function showitem() {
//	var picId = this.attributes["data-hs"].value;
//	console.log(picId);
//	var pic = document.getElementById(picId);
//	if (pic.className === "imageshidden") {
//		pic.className = "images";
//	}	else {
//		pic.className = "imageshidden"
//	}
//};

//cards.addEventListener("click", function () {
//	console.log("hi");
//});

//cards.addEventListener("click", showh2);
//function showh2() {
//	var cardid = cardlist
//	for (cardnumber = 0; i =<cardlist.length ; i++) {
//    card += "The number is " + i + "<br>";
//}
//}



//cards.addEventListener("click", function (){
//	if (legion.className === "imageshidden") {
//		legion.className = "images";
//	}	else {
//		legion.className ="imageshidden";
//	}
//});


//cards.addEventListener("click", showhide )
//function showhide(){
//	console.log(this);
//	var cardid = this.attributes["data-hs"].value;
//	console.log(cardid);
//	if (cardid.className === "imageshidden") {
//		cardid.className= "images" ;
//	}
//} ;





//function showitem() {
//	var picId = this.attributes["data-hs"].value;
//	console.log(picId);
//	var pic = document.getElementById(picId);
//	if (pic.className === "imageshidden") {
//		pic.className = "images";
//	}	else {
//		pic.className = "imageshidden"
//	}
//};

//console.log(cli);
//console.log(cardlist[0]);

// DRY	function go() {
// var name = prompt('What is your name?');
//alert (name + ', ar tikrai?');
//alert ( 'Nemeluok man ' + name + '.');

//cardlist.forEach ( function (value, index) {
//	console.log (value);
//});

 
// var i = cardlist.length;
// var card = 0;
 //while (card < i) {
//	console.log (card)
//	card =card++;
//};
//const prom = fetch(endpoint);
//fetch (endpoint. function(data))
//	console.log(data)
//fetch(endpoint).then(blob => console.log(blob));


//numberone.addEventListener("input", add);
//numbertwo.addEventListener("input", add);
//function add() {
//	var one = parseFloat (numberone.value) || 0;
//	var two = parseFloat (numbertwo.value) || 0;
//	var sum = one+two;
//	console.log(one,two);
//	sumofonetwo.innerHTML = "Your sum is:" + sum;
//};

//numberone.addEventListener("input", movetolist);