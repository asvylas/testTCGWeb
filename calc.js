var box_inner_1 = [];
var box_inner_2 = [];

submit_1.addEventListener("click", submitted);
function submitted() {
	var submitted_value = numberone.value;
	console.log(submitted_value)
	box_inner_1.push(submitted_value);
	console.log(box_inner_1);
	box_1.innerHTML =box_inner_1;
};
	
	