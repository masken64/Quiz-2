
var questionIndex = 0
var win = 0
var loss = 0
var secondsLeft = 60
var score = ""
var winCount = localStorage.getItem("Win Count")
var lossCount = localStorage.getItem("Loss Count")
var winCountEl = document.getElementById("winCount")
var lossCountEl = document.getElementById("lossCount")
var finalScoreEl = document.getElementById("finalScore")
var input = document.getElementById("inputDetails")
var submit = document.getElementById("submitBtn")
var timerEl = document.querySelector(".timer")
var timerMessageEl = document.getElementById('timerMessage')
var questionContentEl = document.getElementById('questionContent');
var answerContentEl = document.getElementById('answerContent');
var rightAnswerContentEl = document.getElementById('rightAnswerContent');
var startGameEl = document.getElementById('startGame');
var nextQuestionEl = document.getElementById('nextQuestion');
var questionsAll =
	[
		{
			question: "Which type of plastic is commonly used for beverage bottles??",
			choices: ["A: PET", "B: PVC", "C: HDPE", "D: LDPE",],
			answer: "A: PET"
		},

		{
			question: " What is the recommended way to dispose of used batteries?",
			choices: ["Recycling", "Composting", "Landfilling", "Burning",],
			answer: "Recycling"
		},

		{
			question: "Which of the following is an example of a renewable resource?",
			choices: ["Oil", "Coal", "Solar energy", "Natural gas",],
			answer: "Solar energy"
		},

		{
			question: "Which of the following is an example of hazardous waste??",
			choices: ["Aluminium can", "Batteries", "Newspaper", "All of the above",],
			answer: "Batteries"
		},
		

		
	]



function startGame() {
	console.log('starting')
	questionnaire()
	winCountEl.textContent = 0;
	lossCountEl.textContent = 0;
	secondsLeft = 60;
}

function checkAnswer() {
	if (this.textContent == questionsAll[questionIndex].answer) {
		answerContentEl.textContent = "Correct Answer!";
		win++;
		winCountEl.textContent = win;
		localStorage.setItem("Win Count", win);
	}
	else {
		answerContentEl.textContent = "Wrong Answer! Better luck next time.";
		loss++;
		lossCountEl.textContent = loss;
		localStorage.setItem("Loss Count", loss);
		secondsLeft -= 5
		sendMessage();
	}

	if (questionIndex === questionsAll.length - 1) {
		document.getElementById("next-finsih").style.visibility = "hidden";
		document.getElementById("storeDetails").style.visibility = "visible";
	}
}


function questionnaire() {
	if (questionIndex == 0) {
		score = 0
	}

	questionContentEl.innerHTML = `<div class ="questionAll">${questionsAll[questionIndex].question}</div>
	<button class ="answer0">${questionsAll[questionIndex].choices[0]}</button>
	<button class ="answer0">${questionsAll[questionIndex].choices[1]}</button>
	<button class ="answer0">${questionsAll[questionIndex].choices[2]}</button>	
	<button class ="answer0">${questionsAll[questionIndex].choices[3]}</button>
	`;

	document.querySelectorAll('.answer0').forEach(item => {
		item.addEventListener('click', checkAnswer)
	})
}


function countDown() {
	
	var timerInterval = setInterval(function () {
		secondsLeft--;
		console.log(secondsLeft)
		timerEl.textContent = secondsLeft + " seconds until end of game.";

		if (secondsLeft <= 0) {
			
			clearInterval(timerInterval);
			
			sendMessage();
			return;
		}

		if (questionIndex === questionsAll.length - 1) {
			clearInterval(timerInterval);
			console.log("Timer stopped!");
			return;
		}
	}, 1000);
}

function sendMessage() {
	timerMessageEl.textContent = "Sorry! Better luck next time";
}

function nextQuestion() {
}

startGameEl.addEventListener('click', function () {
	startGame();
	countDown();
})

nextQuestionEl.addEventListener('click', function () {
	answerContentEl.textContent = ""
	questionIndex++
	console.log(questionIndex)
	questionnaire()
});

function scoreTotal() {
	var tally = win - loss;
	console.log(tally);
	return tally;
}

submit.addEventListener('click', function () {
	const val = document.querySelector('input').value;
	localStorage.setItem("Initials", input.value);
	finalScoreEl.textContent = "You scored " + scoreTotal();
})




















































/*questionnaire1 ()

//Click on Next and the following question comes up
nextQuestionEl.addEventListener('click', nextQuestion)

function nextQuestion() {
	questionnaire2()
}

function questionnaire2() {
	questionContentEl.innerHTML = `<div>${questionsAll[1].question}</div>
	<button>${questionsAll[0].choices[0]}</button>	
	<button>${questionsAll[0].choices[1]}</button>	
	<button>${questionsAll[0].choices[2]}</button>	
	<button>${questionsAll[0].choices[3]}</button>
	`;	
}

function questionnaire3() {
	questionContentEl.innerHTML = `<div>${questionsAll[2].question}</div>
	<button>${questionsAll[0].choices[0]}</button>	
	<button>${questionsAll[0].choices[1]}</button>	
	<button>${questionsAll[0].choices[2]}</button>	
	<button>${questionsAll[0].choices[3]}</button>
	`;	
}

function questionnaire4() {
	questionContentEl.innerHTML = `<div>${questionsAll[3].question}</div>
	<button>${questionsAll[0].choices[0]}</button>	
	<button>${questionsAll[0].choices[1]}</button>	
	<button>${questionsAll[0].choices[2]}</button>	
	<button>${questionsAll[0].choices[3]}</button>
	`;	
}*/
