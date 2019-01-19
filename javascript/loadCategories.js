/*
*This class utilizes basic IIFE function call to named function which calls
*category_name variables from sessionStorage and place in the DOM.
*/

(function(){
	loadCategories();


	//getRandomCategories();
	//getQASets();
})();

function loadCategories() {
	console.log("in loadCategories()");

	let i;
	let tableCategory = document.getElementsByClassName("categories");

	for(i = 0; i < 6; i++) {
		tableCategory[i].innerHTML = sessionStorage.getItem("category" + (i+1)).toUpperCase();
	}
}
