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
var btn = document.createElement("button");

var text = document.createTextNode("Start");

btn.appendChild(text);

$("#btn").append(btn);

});

var number = 16;

var intervalId;

function start(){
	//Set button to start game onclick
	$("#btn").on("click", function(){

		$("#btn").hide();

		setTimer();

		displayQuestion(0);

	})
};



function setTimer() {

		number = 16;

		intervalId = setInterval(decrement, 1000)

		console.log("Timer set.");

};


//function showQuestions- onclick of button
function displayQuestion(qIndex) {

	if (qIndex <= (myQuestions.length -1)) {

		$("#question").html(myQuestions[qIndex].question);

		//reset html of answer div to blank before adding answer-buttons of next question
		$("#answer").html('');

		//Add answer buttons for selected questions
		for (var i = 0; i < myQuestions[qIndex].answers.length; i++) {

			 var answerBtn = $("<button>");

			 answerBtn.addClass("answer-button");

			 answerBtn.attr("data-answer", myQuestions[qIndex].answers[i]);

			 answerBtn.text(myQuestions[qIndex].answers[i]);

			answerBtn.click(checkAnswer);

			 $("#answer").append(answerBtn);
		};
	}

	else {
		//stop timer
		stop();

		//Show results
		$("#results").html("<h2>Finished! Here's how you did: <br> Correct:" + correct + "<br> Incorrect: " + wrong + "<br> Unanswered: " + unanswered + "</h2>");

		//disable buttons clickability
		$(".answer-button").off('click');
	};
};

var qIndex= 0;

function checkAnswer(){
	console.log("clicked2");
	var userSelect = $(this).attr("data-answer");
	var correctAnswer = myQuestions[qIndex].correctAnswer; 

	if(userSelect === correctAnswer) {
		console.log("Correct!");

		//add one to correct answer count
		correct++;

		console.log("Number correct: " + correct);

		//run showResults function
		showResults();
	} 
	else if (userSelect != correctAnswer) {
		console.log("Incorrect!");
		//add one to wrong answer count
		wrong++;
		console.log("Number wrong: " + wrong);
		//run showResults function
		showResults();
	}
	else {
		console.log("No answer selected!");
		
	 	//add one to unanswered count
		unanswered++;

		console.log("Number unanswered: " + unanswered);

		showResults();
	};
};

function nextQuestion() {
	console.log("Next question.")
	//add one to qIndex
	qIndex++;
	//move to next question automatically
	displayQuestion(qIndex);
};

function showResults(){
		stop();
		nextQuestion();
		setTimer();
};

//Set timer to decrease by 1 second until 0. 
function decrement() {
	number--;
	//set timer div to show text and decrementing timer
	$("#timer").html("<h2>Time remaining: <br>" + number + "</h2>");

	if (number === 0) {
		console.log("Time Up!");	
		//stop the timer
		stop();
	};
};

function stop(){
	console.log("Timer stopped.")
	clearInterval(intervalId);
	nextQuestion();
};

start();