/**
 *This class holds all the business logic.
 */



/*Start: JS for jeopardy.jsp*/

	let bgMusic = document.getElementById("bgMusic");
		document.getElementById('bgMusic').addEventListener("ended", expiredTurn, true);
	let djMusic = document.getElementById("djMusic");
	let winMusic = document.getElementById("winMusic");
	let loseMusic = document.getElementById("loseMusic");
	let oFortuna = document.getElementById("oFortuna");
	let requiem = document.getElementById("requiem");

	//let setId = document.getElementById("input");
	let setId = document.getElementsByClassName("input");
	let random = Math.floor(Math.random() * 6);
	let turn = 0;
	let turnMax = (function hideTables() {
					let tables = document.getElementsByClassName("teamName");
					let x = 0;
					for(i=0;i<tables.length;i++) {
						if(sessionStorage.getItem("storageID"+String(i))!="") {
							x++;
						}
					} return x-1;
				}());
	let finalWrong = 0;
	let bugFixer = 0;
	let points = 0;
	let dj = Math.floor(Math.random() * 30);
	let gameOver = 30;
	let winner = null;

	//let tableTurn = document.getElementsByClassName("table");

	turnColor();

	function playOFortuna() {
		oFortuna.play();
	}
	function pauseOFortuna() {
		oFortuna.pause();
	}
	function playBgMusic() {
		bgMusic.play();
	}
	function pauseBgMusic() {
		bgMusic.pause();
	}
	function loadBgMusic() {
		bgMusic.load();
	}
	function playDjMusic() {
		djMusic.play();
	}
	function playWinMusic() {
		winMusic.play();
	}
	function loadWinMusic() {
		winMusic.load();
	}
	function playLoseMusic() {
		loseMusic.play();
	}
	function loadLoseMusic() {
		loseMusic.load();
	}
	function playFinalMusic() {
		requiem.play();
	}


	function randomFirst(event) {
		let valueForRandom = document.getElementById("inputRandom");
		let divRandom = document.getElementById("hideRandom");

		if(valueForRandom.value==random) {
			divRandom.style.display = "none";
			valueForRandom.setAttribute("name","executed");
			alert("Correct! You can now begin Jeopardy!!!");
			pauseOFortuna();
		} else {
			if(valueForRandom.value!=random) {
				valueForRandom.value = null;
			}
			valueForRandom.placeholder = "Try again!"
			turn++;
			if(turn>turnMax) {
				turn = 0;
			}
			turnColor();
			alert("Wrong! Next team, please guess a number (0-5)!");
		}
	}

	function change(event,address) {
		let target = event.target || event.srcElement;
		let passAddress = address;
		points = Number(target.innerHTML);
		let valueForRandom = document.getElementById("inputRandom");

		console.log(random);
		console.log(dj);

		if(!valueForRandom.name) {
			alert("Please choose a number (0-5) before beginning game!");
			return;
		} else{
			if(setId[0].parentElement.parentElement.parentElement.id != "hidden") {
				alert("Please answer current question first");
				return;
			} else{
				if(Number(target.id)==dj) {
					doubleJeopardy(target,passAddress);
				} else{
					stagingQuestion(target,passAddress);
				}
			}

		}
	}

	function doubleJeopardy(target,passAddress) {
		playDjMusic();
		target.innerHTML = "Double Jeopardy!";
		points = points*2;
		target.parentElement.setAttribute("id", "doubleJeopardy");
		console.log("doubleJeopardy() executed!");
		window.setTimeout(stagingQuestion,5500,target,passAddress);
	}

	function stagingQuestion(target,address) {
		let level1 = 100;
		let level2 = 200;
		let level3 = 300;
		let level4 = 400;
		let level5 = 500;

		playBgMusic();

		console.log(sessionStorage.getItem("question" + address));
		if(target.parentElement.id=="doubleJeopardy") {
			target.parentElement.removeAttribute("id");
		}
		if(target.innerHTML=="Double Jeopardy!" || target.innerHTML==level1 || target.innerHTML==level2 ||
		target.innerHTML==level3 || target.innerHTML==level4 ||
		target.innerHTML==level5) {
			target.innerHTML = sessionStorage.getItem("question" + address);
			target.removeAttribute("href");
			setId[0].setAttribute("id", sessionStorage.getItem("answer" + address));
			target.setAttribute("id", "temp"+String(++bugFixer));
			console.log(target.id);
			setId[0].setAttribute("name", target.id);
			setId[0].parentElement.parentElement.parentElement.id = "reveal";
			console.log(setId[0].id + setId[0].name);

			//if(window.setTimeout(endBgMusic,(38*1000)));
		}
	}




	function answer(event) {
		let target = document.getElementById(setId[0].name);
		let winning = document.getElementsByClassName("teamPoints");
		console.log(target);

		if(setId[0].id.toLowerCase() == setId[0].value.toLowerCase()) {
			pauseBgMusic();
			playWinMusic();
			window.setTimeout(loadWinMusic,1000);
			loadBgMusic();

			console.log(setId[0].id);
			target.innerHTML = setId[0].id.toUpperCase();
			target.parentElement.setAttribute("id", "correct");
			setId[0].parentElement.parentElement.parentElement.id = "hidden";
			target.removeAttribute("id");
			finalWrong = 0;
			winning[turn].innerHTML = Number(winning[turn].innerHTML) + points;

			gameOver = gameOver - 1;
			if(gameOver==0) {
				window.setTimeout(finishGame,2000);
			}
		} else {
			pauseBgMusic();
			playLoseMusic();
			loadBgMusic();
		/*	loadLoseMusic();
			loadBgMusic();
			window.setTimeout(playBgMusic,2000);*/
			//target.innerHTML = setId[0].id;
			turn++;
			if(turn>turnMax) {
				turn = 0;
			}
			finalWrong++;
			if(finalWrong>turnMax) {
				//pauseBgMusic();
				finalWrong = 0;
				setId[0].parentElement.parentElement.parentElement.id = "hidden";
				target.innerHTML = setId[0].id.toUpperCase();
				target.parentElement.setAttribute("id", "incorrect");

				gameOver = gameOver - 1;
				if(gameOver==0) {
					window.setTimeout(finishGame,2000);
				}
			} else {
				window.setTimeout(playBgMusic,1000);
				window.setTimeout(loadLoseMusic,1000);
			}
			turnColor();
		}
		if(setId[0].value!="") {
			setId[0].value = "";
		}
	}

	(function hideTables() {
		let tables = document.getElementsByClassName("teamName");

		for(i=0;i<tables.length;i++) {
			if(sessionStorage.getItem("storageID"+String(i))!="") {
				console.log("executed: " + (sessionStorage.getItem("storageID"+String(i))));
				tables[i].innerHTML = (sessionStorage.getItem("storageID"+String(i)));
			} else {
				tables[i].parentElement.parentElement.parentElement.style.display = "none";
				//tables[i].parentElement.parentElement.setAttribute("hidden", "true");
			}
		}
	}());

	function turnColor() {
		let tableTurn = document.getElementsByClassName("teamName");

		for(i=0;i<tableTurn.length;i++) {
			//if(tableTurn[i].style.color=="#ff7990") {
				tableTurn[i].removeAttribute("style");
			//}
		}
		tableTurn[turn].style.color = "#ff7990";
	}

	function expiredTurn() {
		console.log("Expired turn method executed");
		console.log(setId[0].value);
		setId[0].nextElementSibling.click();
	}

	function finishGame() {
		let winningPoints = document.getElementsByClassName("teamPoints");
		let winningTeam = document.getElementsByClassName("teamName");
		let mainTable = document.getElementById("mainTable");


		/*for(i=0;i<turnMax;i++) {
			if(i==0){
				if(Number(winning[i].innerHTML)>(9000/turnMax) && Number(winning[i].innerHTML)>)
			}else if(i==1) {

			}else if(i==2) {

			}else{

			}
		}*/

		if(turnMax==0) {
			winner = winningTeam[0];
		}else if(turnMax==1) {
			if(Number(winningPoints[0].innerHTML)>Number(winningPoints[turnMax].innerHTML)) {
				winner = winningTeam[0];
			} else {
				winner = winningTeam[1];
			}
		}else if(turnMax==2) {
			if(Number(winningPoints[0].innerHTML)>Number(winningPoints[turnMax].innerHTML) &&
			Number(winningPoints[0].innerHTML)>Number(winningPoints[1].innerHTML)) {
				winner = winningTeam[0];
			} else if(Number(winningPoints[1].innerHTML)>Number(winningPoints[turnMax].innerHTML) &&
			Number(winningPoints[1].innerHTML)>Number(winningPoints[0].innerHTML)) {
				winner = winningTeam[1];
			} else {
				winner = winningTeam[turnMax];
			}
		}else {
			if(Number(winningPoints[0].innerHTML)>Number(winningPoints[turnMax].innerHTML) &&
			Number(winningPoints[0].innerHTML)>Number(winningPoints[1].innerHTML) &&
			Number(winningPoints[0].innerHTML)>Number(winningPoints[2].innerHTML)) {
				winner = winningTeam[0];
			} else if(Number(winningPoints[1].innerHTML)>Number(winningPoints[turnMax].innerHTML) &&
			Number(winningPoints[1].innerHTML)>Number(winningPoints[0].innerHTML) &&
			Number(winningPoints[1].innerHTML)>Number(winningPoints[2].innerHTML)) {
				winner = winningTeam[1];
			} else if(Number(winningPoints[2].innerHTML)>Number(winningPoints[turnMax].innerHTML) &&
			Number(winningPoints[2].innerHTML)>Number(winningPoints[0].innerHTML) &&
			Number(winningPoints[2].innerHTML)>Number(winningPoints[1].innerHTML)) {
				winner = winningTeam[2];
			} else {
				winner = winningTeam[turnMax];
			}
		}
		winner.parentElement.parentElement.parentElement.setAttribute("id","winner");
			for(i=0;i<winningTeam.length;i++) {
				if(winningTeam[i]!=winner) {
					winningTeam[i].parentElement.parentElement.setAttribute("style", "background:red;");
				}
			}
		mainTable.innerHTML = (winner.innerHTML + " wins!")
		mainTable.setAttribute("style","font-size:8vw;text-align:center;background-color:#92ff80;");
		mainTable.parentElement.setAttribute("style","background-image: url('images/gold.jpg');");
		playFinalMusic();
	}
/*End: JS for jeopardy.jsp*/
