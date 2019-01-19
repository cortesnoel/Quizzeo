/*
*This class stages JSONObject.json data.
*This Class utilizes Session Storage.
*/

let category_name = ["SUPER HEROES", "WHAT CITY?", "FUNNY MATH", "ANIMALS", "MOVIE QUOTES", "WHO SINGS?"];
let questionSet = [];
let answerSet = [];

function loadData() {
  stageCategoryName();
  stageQuestions();
  stageAnswers();
}

function stageCategoryName() {
  let i;
  let e = 0;

  for(i = 0; i < 6; i++) {
    sessionStorage.setItem("category" + (i+1), category_name[i]);
    console.log("session category");
  }
}

function stageQuestions() {
  let i, e;

  for(i = 0; i < 6; i++) {
    for(e = 0; e < 5; e++) {
      questionSet.push(jObject[i][e].question);
    }
  }

  for(i = 0; i < 30; i++) {
    sessionStorage.setItem("question" + (i+1), questionSet[i]);
    console.log("session question");
  }
}

function stageAnswers() {
  let i, e;

  for(i = 0; i < 6; i++) {
    for(e = 0; e < 5; e++) {
      answerSet.push(jObject[i][e].answer);
    }
  }

  for(i = 0; i < 30; i++) {
    sessionStorage.setItem("answer" + (i+1), answerSet[i]);
    console.log("session answer");
  }
}

const jObject = [
	[
		{"question": "What is Supermans home planet called?",
			"answer": "what is krypton"},
		{"question": "Which comic book character hails from the fictional nation of Wakanda?",
			"answer": "who is black panther"},
		{"question": "What does the DC in DC Comics stand for?",
			"answer": "what is detective comics"},
		{"question": "Which city does Green Arrow patrol?",
			"answer": "what is star city"},
		{"question": "What is the real name of the Punisher?",
			"answer": "who is frank castle"}
	],
	[
		{"question": "The Big Apple",
			"answer": "what is new york city"},
		{"question": "The Windy City",
			"answer": "what is chicago"},
		{"question": "Sin City",
			"answer": "what is las vegas"},
		{"question": "Magic City",
			"answer": "what is miami"},
		{"question": "The City of Lights",
			"answer": "what is paris"}
	],
	[
		{"question": "How many licks does it take to get to the Tootsie Roll center of a Tootsie Pop?",
			"answer": "what is 3"},
		{"question": "I am an odd number. Take away one letter and I become even. What number am I?",
			"answer": "what is 7"},
		{"question": "If 1=5, 2=10, 3=15, 4=20, 5 equals to what?",
			"answer": "what is 1"},
		{"question": "What is the derivative of 5x?",
			"answer": "what is 5"},
		{"question": "How many eggs can you put in an empty basket six inches in diameter?",
			"answer": "what is 1"}
	],
	[
		{"question": "What do you call a baby giraffe?",
			"answer": "what is a calf"},
		{"question": "What is the largest type of big cat in the world?",
			"answer": "what is a tiger"},
		{"question": "What do you call a female elephant?",
			"answer": "what is a cow"},
		{"question": "How many pairs of wings does a bee have?",
			"answer": "what is 2"},
		{"question": "What type of animal is the largest primate in the world?",
			"answer": "what is a gorilla"}
	],
	[
		{"question": "They may take our lives, but theyll never take our freedom!",
			"answer": "what is braveheart"},
		{"question": "Ill get you, my pretty, and your little dog, too!",
			"answer": "what is the wizard of oz"},
		{"question": "Just keep swimming.",
			"answer": "what is finding nemo"},
		{"question": "I drink your milkshake!",
			"answer": "what is there will be blood"},
		{"question": "Im going to make him an offer he cant refuse.",
			"answer": "what is the godfather"}
	],
	[
		{"question": "Rah, rah, ah, ah, ah, roma, roma, ma. Gaga, ooh, la, la... want your bad romance!",
			"answer": "what is bad romance"},
		{"question": "To the left, to the left, everything you own in the box to the left",
			"answer": "what is irreplaceable"},
		{"question": "I cant wait til I get you on the floor good-looking",
			"answer": "what is suit and tie"},
		{"question": "Theres vomit on his sweater already, moms spaghetti, hes nervous",
			"answer": "what is lose yourself"},
		{"question": "Ima take your grandpas style, Ima take your grandpas style. No, for real, ask your grandpa. Can I have his hand-me-downs?",
			"answer": "what is thrift shop"}
	]
];
