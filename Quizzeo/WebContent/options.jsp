<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Quizzeo! - Choose Your Teams</title>
<link rel="shortcut icon" href="favicon/favicon.ico" >
<link rel="icon" type="image/gif" href="favicon/animated_favicon1.gif" >
<link rel="stylesheet" type="text/css" href="css/jeopardy.css">
</head>
<body style="background-color: #fffb71">
	<h1 class="optionsH1">Select Your Teams</h1>
	<div class="center">
		<span class="spanFont">
			<input id="0" type="radio" name="teams" value="team 1" onfocus="chooseTeams(event)">One Team
			<input id="1" type="radio" name="teams" value="team 2" onfocus="chooseTeams(event)">Two Teams
			<input id="2" type="radio" name="teams" value="team 3" onfocus="chooseTeams(event)">Three Teams
			<input id="3" type="radio" name="teams" value="team 4" onfocus="chooseTeams(event)">Four Teams
		</span>
	</div>
	<form action="jeopardy.jsp" class="center divFont" onsubmit="moveToStorage(event)">
		<div class="teams hidden">
			<p>Enter Name for Team 1: <input class="input" type="text" placeholder="Team 1"></p>
		</div>
		<div class="teams hidden">
			<p>Enter Name for Team 2: <input class="input" type="text" placeholder="Team 2"></p>
		</div>
		<div class="teams hidden">
			<p>Enter Name for Team 3: <input class="input" type="text" placeholder="Team 3"></p>
		</div>
		<div class="teams hidden">
			<p>Enter Name for Team 4: <input class="input" type="text" placeholder="Team 4"></p>
		</div>
			<input type="submit" class="button" value="submit">
	</form>
<script src="javascript/options.js" type="text/javascript"></script>
</body>
</html>