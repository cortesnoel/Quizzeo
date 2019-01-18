/*
*This Class utilizes Session Storage.
*/

let category_name = [];
let questionSet = [];
let answerSet = [];
let valueSet = [];

function loadData() {
  stageCategoryName();
  stageQuestions();
  stageAnswers();
  stageValues();
}

function stageCategoryName() {
  let i;
  let e = 0;

  for(i = 0; i < data.length; i++) {
    category_name.push(data[i][e].category.title);
  }

  for(i = 0; i < 6; i++) {
    sessionStorage.setItem("category" + (i+1), category_name[i]);
    console.log("session category");
  }
}

function stageQuestions() {
  let i, e;

  for(i = 0; i < data.length; i++) {
    for(e = 0; e < data[i].length; e++) {
      questionSet.push(data[i][e].question);
    }
  }

  for(i = 0; i < 30; i++) {
    sessionStorage.setItem("question" + (i+1), questionSet[i]);
    console.log("session question");
  }
}

function stageAnswers() {
  let i, e;

  for(i = 0; i < data.length; i++) {
    for(e = 0; e < data[i].length; e++) {
      answerSet.push(data[i][e].answer);
    }
  }

  for(i = 0; i < 30; i++) {
    sessionStorage.setItem("answer" + (i+1), answerSet[i]);
    console.log("session answer");
  }
}

function stageValues() {
  //let valueSet = [100, 200, 300, 400, 500];
  //let i;

/*  for(i = 0; i < data[i].length; i++) {
      valueSet.push(data[i][i].value);
      if(valueSet[i] === null) {
        valueSet[i] = ((i+1)*100);
      } else if(valueSet[i] == valueSet[i-1] || valueSet[i] == valueSet[i+1]) {
        valueSet[i] = ((i+1)*100);
      }
  }*/

  for(i = 0; i < data[i].length; i++) {
    valueSet.push((i+1)*100);
  }

  for(i = 0; i < 5; i++) {
    sessionStorage.setItem("value" + (i+1), valueSet[i]);
    console.log("session value");
  }
}
