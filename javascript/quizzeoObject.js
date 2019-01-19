/**
 *
 */

const jObject = {
	"super": [
		{"Question": "What is Supermans home planet called?",
			"Answer": "what is krypton"},
		{"Question": "Which comic book character hails from the fictional nation of Wakanda?",
			"Answer": "who is black panther"},
		{"Question": "What does the DC in DC Comics stand for?",
			"Answer": "what is detective comics"},
		{"Question": "Which city does Green Arrow patrol?",
			"Answer": "what is star city"},
		{"Question": "What is the real name of the Punisher?",
			"Answer": "who is frank castle"}
	],
	"geography": [
		{"Question": "The Big Apple",
			"Answer": "what is new york city"},
		{"Question": "The Windy City",
			"Answer": "what is chicago"},
		{"Question": "Sin City",
			"Answer": "what is las vegas"},
		{"Question": "Magic City",
			"Answer": "what is miami"},
		{"Question": "The City of Lights",
			"Answer": "what is paris"}
	],
	"math": [
		{"Question": "How many licks does it take to get to the Tootsie Roll center of a Tootsie Pop?",
			"Answer": "what is 3"},
		{"Question": "I am an odd number. Take away one letter and I become even. What number am I?",
			"Answer": "what is 7"},
		{"Question": "If 1=5, 2=10, 3=15, 4=20, 5 equals to what?",
			"Answer": "what is 1"},
		{"Question": "What is the derivative of 5x?",
			"Answer": "what is 5"},
		{"Question": "How many eggs can you put in an empty basket six inches in diameter?",
			"Answer": "what is 1"}
	],
	"animal": [
		{"Question": "What do you call a baby giraffe?",
			"Answer": "what is a calf"},
		{"Question": "What is the largest type of big cat in the world?",
			"Answer": "what is a tiger"},
		{"Question": "What do you call a female elephant?",
			"Answer": "what is a cow"},
		{"Question": "How many pairs of wings does a bee have?",
			"Answer": "what is 2"},
		{"Question": "What type of animal is the largest primate in the world?",
			"Answer": "what is a gorilla"}
	],
	"movie": [
		{"Question": "They may take our lives, but theyll never take our freedom!",
			"Answer": "what is braveheart"},
		{"Question": "Ill get you, my pretty, and your little dog, too!",
			"Answer": "what is the wizard of oz"},
		{"Question": "Just keep swimming.",
			"Answer": "what is finding nemo"},
		{"Question": "I drink your milkshake!",
			"Answer": "what is there will be blood"},
		{"Question": "Im going to make him an offer he cant refuse.",
			"Answer": "what is the godfather"}
	],
	"music": [
		{"Question": "Rah, rah, ah, ah, ah, roma, roma, ma. Gaga, ooh, la, la... want your bad romance!",
			"Answer": "what is bad romance"},
		{"Question": "To the left, to the left, everything you own in the box to the left",
			"Answer": "what is irreplaceable"},
		{"Question": "I cant wait til I get you on the floor good-looking",
			"Answer": "what is suit and tie"},
		{"Question": "Theres vomit on his sweater already, moms spaghetti, hes nervous",
			"Answer": "what is lose yourself"},
		{"Question": "Ima take your grandpas style, Ima take your grandpas style. No, for real, ask your grandpa. Can I have his hand-me-downs?",
			"Answer": "what is thrift shop"}
	]
};

/*Start of hard Jeopardy set*/
/*const jObject = {
	"history": [
		{"Question": "What year was the US Declaration of Independence signed?",
			"Answer": "what is 1776"},
		{"Question": "What year marked the end of WWII?",
			"Answer": "what is 1945"},
		{"Question": "Which Renaissance artist painted The School of Athens?",
			"Answer": "who is raphael"},
		{"Question": "What army did Napoleon Bonaparte meet during the French invasion of Cairo, Egypt?",
			"Answer": "who is the mamelukes"},
		{"Question": "Who was Alexander the Greats childhood instructor?",
			"Answer": "who is aristotle"}
	],
	"geography": [
		{"Question": "What American state hosts the largest trees in the world?",
			"Answer": "what is california"},
		{"Question": "What is the largest desert in the world?",
			"Answer": "what is the sahara desert"},
		{"Question": "What city hosts the largest population in the world?",
			"Answer": "what is tokyo"},
		{"Question": "What country hosts the largest pyramid in the world?",
			"Answer": "what is mexico"},
		{"Question": "What country hosts the largest gold mine in the world?",
			"Answer": "what is indonesia"}
	],
	"math": [
		{"Question": "What is the number of degrees of arc in a circle?",
			"Answer": "what is 360"},
		{"Question": "What is the sum of the measures in degrees of the angles of a triangle?",
			"Answer": "what is 180"},
		{"Question": "What is the derivative of: (42x)?",
			"Answer": "what is 42"},
		{"Question": "How many centimeters are in a cubic meter?",
			"Answer": "what is 1,000,000"},
		{"Question": "What is the cube root of 216?",
			"Answer": "what is 6"}
	],
	"literature": [
		{"Question": "Marley was dead as a doornail",
			"Answer": "what is a christmas carol"},
		{"Question": "I cant go back to yesterday because I was a different person then",
			"Answer": "what is alice in wonderland"},
		{"Question": "It sounds plausible enough tonight, but wait until tomorrow. Wait for the common sense of the morning",
			"Answer": "what is the time machine"},
		{"Question": "Then something Tookish woke up inside him, and he wished to go and see the great mountains, and hear the pine-trees and the waterfalls, and explore the caves, and wear a sword instead of a walking-stick",
			"Answer": "what is the hobbit"},
		{"Question": "Not all those who wander are lost",
			"Answer": "what is the lord of the rings"}
	],
	"poetry": [
		{"Question": "Shall I compare thee to a summers day? Thou art more lovely and more temperate",
			"Answer": "who is william shakespeare"},
		{"Question": "I have measured out my life with coffee spoons",
			"Answer": "who is t.s. eliot"},
		{"Question": "Im Nobody! Who are you? Are you Nobody too?",
			"Answer": "who is emily dickinson"},
		{"Question": "Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light",
			"Answer": "who is dylan thomas"},
		{"Question": "O Captain! my Captain! our fearful trip is done, the ship has weatherd every rack, the prize we sought is won",
			"Answer": "who is walt whitman"}
	],
	"quote": [
		{"Question": "To live is the rarest thing in the world. Most people exist, that is all",
			"Answer": "who is oscar wilde"},
		{"Question": "Get busy living or get busy dying",
			"Answer": "who is stephen king"},
		{"Question": "A room without books is like a body without a soul",
			"Answer": "who is marcus tullius cicero"},
		{"Question": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
			"Answer": "who is helen keller"},
		{"Question": "If you tell the truth, you dont have to remember anything",
			"Answer": "who is mark twain"}
	]
};*/
/*End of hard Jeopardy set*/


/*Practice JSON object below for debugging*/

/*const jObject = {
	"history": [
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"}
	],
	"geography": [
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"}
	],
	"math": [
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"}
	],
	"literature": [
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"}
	],
	"poetry": [
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"}
	],
	"quote": [
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"},
		{"Question": "q","Answer": "a"}
	]
};*/
