var correct = 0;

var wrong = 0;

var unanswered = 0;

var myQuestions = [

	{ "question": "What year was Phi Sigma Sigma founded?",
		"answers": ['1912','1913','1920','1921'],
		"correctAnswer":'1913'
	},

	{ "question": "At what school was Phi Sigma Sigma founded?",
		"answers": ['Hunter College','New York University','Cornell University','Columbia University'],
		"correctAnswer": 'Hunter College'
	},

	{ "question": "Who is not a founder of Phi Sigma Sigma?",
		"answers": ['Fay Chertkoff','Jeanette Lipka Furst','Estelle Melnick Cole','Shirley Ann Frederick'],
		"correctAnswer": 'Shirley Ann Frederick'
	},

	{ "question": "How many founders does Phi Sigma Sigma have?",
		"answers": ['12','3','10','6'],
		"correctAnswer": '10'
	},

	{ "question": "What are Phi Sigma Sigma's colors?",
		"answers": ['Navy and Gold','King Blue and Gold','Rose Red and Sunshine Yellow','Black and White'],
		"correctAnswer": 'King Blue and Gold'
	},

	{ "question": "Where is Phi Sigma Sigma Headquarters located?",
		"answers": ['Baltimore, MD','Washington, D.C.','Elkridge, MD','New York City, NY'],
		"correctAnswer": 'Elkridge, MD'
	},

	{ "question": "What is Phi Sigma Sigma's motto?",
	"answers": ['Diokete Upsala','Union hand in hand','Do Good','Seek the Noblest'],
	"correctAnswer": 'Diokete Upsala'
	},

	{ "question": "What is Phi Sigma Sigma's symbol?",
		"answers": ['Skull & Crossbones','Anchor','Arrow','Sphinx'],
		"correctAnswer": 'Sphinx'
	},

	{ "question": "What does LITP mean?",
		"answers": ['Lean into thy prayer','Love in the Pyramid','Learning in the purest ','Lean into the Phi'],
		"correctAnswer": 'Love in the Pyramid'
	},

];

$(document).ready(function(){

	//create button to start game
	var startBtn = document.createElement("button");

	var text = document.createTextNode("Start");

	startBtn.appendChild(text);

	$("#btn").append(startBtn);

});

var number = 16;

var intervalId;

function start(){
	//Set button to start game onclick
	$("#btn").on("click", function(){

		$("#btn").hide();

		displayQuestion(0);

	})
};

function setTimer() {

	number = 16;

	intervalId = setInterval(decrement, 1000);

		console.log("Timer set.");

};

//function showQuestions- onclick of button
function displayQuestion(qIndex) {

		setTimer();

		$("#question").html(myQuestions[qIndex].question);

		//reset html of answer div to blank before adding answer-buttons of next question
		$("#answer").html('');

		for (var i = 0; i < myQuestions[qIndex].answers.length; i++) {

			 var answerBtn = $("<button>");

			 answerBtn.addClass("answer-button");

			 answerBtn.attr("data-answer", myQuestions[qIndex].answers[i]);

			 answerBtn.text(myQuestions[qIndex].answers[i]);

			 answerBtn.click(checkAnswer);

			 $("#answer").append(answerBtn);
		};
};

var qIndex= 0;

function checkAnswer(){

	console.log("clicked2");

	var userSelect = $(this).attr("data-answer");

	var correctAnswer = myQuestions[qIndex].correctAnswer; 

	if(userSelect === correctAnswer) {

		showResult("correct");
	}
	else {
		showResult("incorrect");
	};
};
	
function showResult(result) {
	if(result === "correct") {

		console.log("Correct!");

		correct++;

		console.log("Number correct: " + correct);

		nextQuestion();
	}
	else if(result === "incorrect") {

		console.log("Incorrect!");

		wrong++;

		console.log("Number wrong: " + wrong);

		nextQuestion();
	}
	else {
		console.log("No answer selected!");

		unanswered++;

		console.log("Number unanswered: " + unanswered);

		nextQuestion();
	}
};

function nextQuestion() {

	qIndex++;

	if (qIndex <= (myQuestions.length -1)) {

		stop();

		//move to next question automatically 
		displayQuestion(qIndex);


		console.log("nextQ");
	}

	else {

		clearInterval(intervalId);

		console.log("end of round");

		// //Show results
		$("#results").html("<h2>Finished! Here's how you did: <br> Correct:" + correct + "<br> Incorrect: " + wrong + "<br> Unanswered: " + unanswered + "</h2>");

		//disable buttons clickability
		$(".answer-button").off('click');

		$("#timer").hide();

	};	
};

//Set timer to decrease by 1 second until 0. 
function decrement() {

	number--;

	$("#timer").html("<h2>Time remaining: " + number + "</h2>");

	if (number === 0) {
		showResult();
		// nextQuestion("0");

		console.log("Time Up!");



	} 

};

//function showResults- onclick of answer- use if/else, set time result shows on screen ~5seconds
// function showResults() {
	
// };

function stop(){

	console.log("Timer stopped.")

	clearInterval(intervalId);

};

start();

