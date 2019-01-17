let test = [];
let category_id = [];

(function(){
  let i;
  let index = 0;

	getRandomCategories();

  for(i = 0; i < 6; i++) {
    test.push.apply(callJeopardyAPI(("http://jservice.io/api/category?id=" + category_id[index]), true));
  }
})();

function getRandomCategories() {
  let min = 1;
  let max = 1800;
  let i;

  for(i = 0; i < 6; i++) {
    category_id.push(Math.floor(Math.random() * (+max - +min)) + +min);
    console.log("Random Number Generated : " + category_id[i]);
  }
}

function callJeopardyAPI(url, sync) {
	let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log("API call: " + this.statusText + "\n\nData returned: " + this.responseText);
		 test = JSON.parse(this.responseText);
    }
		else {
			console.log("readyState = " + this.readyState);
		}
  };
  xhttp.open("GET", url, sync);
  xhttp.send();

	return test;
};
