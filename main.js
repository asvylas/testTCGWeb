/*	Card List Display & Sorting */
var cardSortBut = function(e){
	var target = e.target || e.srcElement;
	
	while (target && !target.id) {
		target = target.parentNode;
	};
	if(typeof target.id === "string") {
		alert(target.id)
	}
}
document.addEventListener("click", cardSortBut)
