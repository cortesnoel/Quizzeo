/**
 * 
 */

/*Start: JS for options.jsp*/
	function chooseTeams(event) {
		let target = event.target || event.srcElement;
		//let grandTarget = target.parentElement.parentElement;
		let hide = document.getElementsByClassName("teams");
		console.log("1st");
		
		for(i=0;i<hide.length;i++) {
			console.log("2nd");

			if(!hide[i].classList.contains("hidden")) {
				console.log("if executed");

				hide[i].classList.add("hidden");
			}
		}
		console.log("before switch");

		switch(target.id) {
			case "0":
				hide[0].classList.remove("hidden");
				break;	
			case "1":
				hide[0].classList.remove("hidden");
				hide[1].classList.remove("hidden");
				break;		
			case "2":
				hide[0].classList.remove("hidden");
				hide[1].classList.remove("hidden");
				hide[2].classList.remove("hidden");
				break;	
			case "3":
				hide[0].classList.remove("hidden");
				hide[1].classList.remove("hidden");
				hide[2].classList.remove("hidden");
				hide[3].classList.remove("hidden");
				break;			
		}
	}
	
	function checkWebStorage() {
		if (typeof(Storage) !== "undefined") {
		    console.log("Code for localStorage/sessionStorage");
		} else {
		    console.log("Sorry! No Web Storage support..");
		}
	}
	
	function moveToStorage(event) {
		let storage = document.getElementsByClassName("input");
		checkWebStorage();
		
		for(i=0;i<storage.length;i++) {
			let storageID = "storageID" + String(i);
			console.log(storageID);
			sessionStorage.setItem(storageID, storage[i].value);
		}
	}
/*End: JS for options.jsp*/