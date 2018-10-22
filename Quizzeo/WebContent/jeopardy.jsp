<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Quizzeo!</title>
<link rel="shortcut icon" href="favicon/favicon.ico" >
<link rel="icon" type="image/gif" href="favicon/animated_favicon1.gif" >
<link rel="stylesheet" type="text/css" href="css/jeopardy.css">
</head>
<body>
	<div class="center">
		<table class="table inline">
			<tr>
				<th class="teamName">Team 1</th>
			</tr>
			<tr>
				<td class="teamPoints">0</td>
			</tr>
		</table>
		<table class="table inline">
			<tr>
				<th class="teamName">Team 2</th>
			</tr>
			<tr>
				<td class="teamPoints">0</td>
			</tr>
		</table>
		<table class="table inline">
			<tr>
				<th class="teamName">Team 3</th>
			</tr>
			<tr>
				<td class="teamPoints">0</td>
			</tr>
		</table>
		<table class="table inline">
			<tr>
				<th class="teamName">Team 4</th>
			</tr>
			<tr>
				<td class="teamPoints">0</td>
			</tr>
		</table>
	</div>
	<div id="hidden" class="marginBottom">
		<form action="#" onsubmit="answer(event);return false;">
			<span>Enter answer here: <input type="text" id="input" class="input" placeholder="Who/What is...">   <input type="submit" value="submit"></span>
		</form>
	</div>
	<div id="hideRandom" class="marginBottom">
		<form action="#" onsubmit="randomFirst(event);return false;">
			<span>Choose a number (0-5) to begin: <input type="text" id="inputRandom" placeholder="Enter number here...">   <input type="submit" value="submit"></span>
		</form>
	</div>
	<table id="mainTable" class="table">
		<thead> 
			<tr>
				<th colspan="6">Quizzeo!</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>SUPERHEROES!</th>
				<th>CITY OF...</th>
				<th>RIDDLE ME MATH</th>
				<th>AMAZING ANIMALS</th>
				<th>WHAT MOVIE AGAIN?</th>
				<th>POP THOSE LYRICS!</th>
			</tr>
			<tr id="rowOne">
				<td><a id="0" href="#" onclick="change(event,jObject.super[0]);return false;">100</a></td> 
				<td><a id="1" href="#" onclick="change(event,jObject.geography[0]);return false;">100</a></td>
				<td><a id="2" href="#" onclick="change(event,jObject.math[0]);return false;">100</a></td>
				<td><a id="3" href="#" onclick="change(event,jObject.animal[0]);return false;">100</a></td>
				<td><a id="4" href="#" onclick="change(event,jObject.movie[0]);return false;">100</a></td>
				<td><a id="5" href="#" onclick="change(event,jObject.music[0]);return false;">100</a></td>
			</tr>
			<tr id="rowTwo">
				<td><a id="6" href="#" onclick="change(event,jObject.super[1]);return false;">200</a></td>
				<td><a id="7" href="#" onclick="change(event,jObject.geography[1]);return false;">200</a></td>
				<td><a id="8" href="#" onclick="change(event,jObject.math[1]);return false;">200</a></td>
				<td><a id="9" href="#" onclick="change(event,jObject.animal[1]);return false;">200</a></td>
				<td><a id="10" href="#" onclick="change(event,jObject.movie[1]);return false;">200</a></td>
				<td><a id="11" href="#" onclick="change(event,jObject.music[1]);return false;">200</a></td>
			</tr>
			<tr id="rowThree">
				<td><a id="12" href="#" onclick="change(event,jObject.super[2]);return false;">300</a></td>
				<td><a id="13" href="#" onclick="change(event,jObject.geography[2]);return false;">300</a></td>
				<td><a id="14" href="#" onclick="change(event,jObject.math[2]);return false;">300</a></td>
				<td><a id="15" href="#" onclick="change(event,jObject.animal[2]);return false;">300</a></td>
				<td><a id="16" href="#" onclick="change(event,jObject.movie[2]);return false;">300</a></td>
				<td><a id="17" href="#" onclick="change(event,jObject.music[2]);return false;">300</a></td>
			</tr>
			<tr id="rowFour">
				<td><a id="18" href="#" onclick="change(event,jObject.super[3]);return false;">400</a></td>
				<td><a id="19" href="#" onclick="change(event,jObject.geography[3]);return false;">400</a></td>
				<td><a id="20" href="#" onclick="change(event,jObject.math[3]);return false;">400</a></td>
				<td><a id="21" href="#" onclick="change(event,jObject.animal[3]);return false;">400</a></td>
				<td><a id="22" href="#" onclick="change(event,jObject.movie[3]);return false;">400</a></td>
				<td><a id="23" href="#" onclick="change(event,jObject.music[3]);return false;">400</a></td>
			</tr>
			<tr id="rowFive">
				<td><a id="24" href="#" onclick="change(event,jObject.super[4]);return false;">500</a></td>
				<td><a id="25" href="#" onclick="change(event,jObject.geography[4]);return false;">500</a></td>
				<td><a id="26" href="#" onclick="change(event,jObject.math[4]);return false;">500</a></td>
				<td><a id="27" href="#" onclick="change(event,jObject.animal[4]);return false;">500</a></td>
				<td><a id="28" href="#" onclick="change(event,jObject.movie[4]);return false;">500</a></td>
				<td><a id="29" href="#" onclick="change(event,jObject.music[4]);return false;">500</a></td>
			</tr>
		</tbody>
	</table>
	<audio id="bgMusic" preload="auto"><source src="jeopardy.mp3" type="audio/mpeg"></audio>
	<audio id="djMusic" preload="auto"><source src="dj.mp3" type="audio/mpeg"></audio>
	<audio id="winMusic" preload="auto"><source src="win.mp3" type="audio/mpeg"></audio>
	<audio id="loseMusic" preload="auto"><source src="buzzer.mp3" type="audio/mpeg"></audio>
	<audio id="oFortuna" preload="auto" loop="loop" autoplay="autoplay"><source src="fortuna.mp3" type="audio/mpeg"></audio>
	<audio id="requiem" preload="auto" loop="loop"><source src="verdi.mp3" type="audio/mpeg"></audio>
<script src="javascript/main.js" type="text/javascript"></script>
<script src="javascript/jeopardyObject.js" type="text/javascript"></script>
</body>
</html>