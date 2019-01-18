let data = [];
let category_id = [];

(function(){
  let i;

  if(data !== undefined && data.length !== 0) {
    return;
  }else{
  	getRandomCategories();
    for(i = 0; i < 6; i++) {
      callJeopardyAPI("http://jservice.io/api/clues?category=" + category_id[i], true, i);
    }
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

function trimArrayLengthToFive(array) {
  while(array.length > 5) {
    array.pop();
  }
  return array;
}

function callJeopardyAPI(url, sync, i) {
  let returnValue = "";
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log("API call: " + this.statusText + "\n\nData returned: " + this.responseText);

     switch(i) {
        case 0:
          data[i] = JSON.parse(this.responseText);
          if (data[i].length > 5) {
            trimArrayLengthToFive(data[i]);
          }
        break;
        case 1:
          data[i] = JSON.parse(this.responseText);
          if (data[i].length > 5) {
            trimArrayLengthToFive(data[i]);
          }
        break;
        case 2:
          data[i] = JSON.parse(this.responseText);
          if (data[i].length > 5) {
            trimArrayLengthToFive(data[i]);
          }
        break;
        case 3:
          data[i] = JSON.parse(this.responseText);
          if (data[i].length > 5) {
            trimArrayLengthToFive(data[i]);
          }
        break;
        case 4:
          data[i] = JSON.parse(this.responseText);
          if (data[i].length > 5) {
            trimArrayLengthToFive(data[i]);
          }
        break;
        case 5:
          data[i] = JSON.parse(this.responseText);
          if (data[i].length > 5) {
            trimArrayLengthToFive(data[i]);
          }
        break;
        default:
        console.log("default switch case");
      }

     returnValue = this.responseText;
    }
		else {
			console.log("readyState = " + this.readyState);
		}
  };
  xhttp.open("GET", url, sync);
  xhttp.send();

	return returnValue;
}
