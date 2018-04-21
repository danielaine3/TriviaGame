var correct = 0;
var wrong = 0;
var unanswered = 0;
var myQuestions = [
	{ "question": "What year was Phi Sigma Sigma founded?",
		"answers": ['1912','1913','1920','1921'],
		"correctAnswer":'1913',
		"image": 'assets/images/est1913.jpg'
	},
	{ "question": "At what school was Phi Sigma Sigma founded?",
		"answers": ['Hunter College','New York University','Cornell University','Columbia University'],
		"correctAnswer": 'Hunter College',
		"image": 'assets/images/huntercollege.jpg'
	},
	{ "question": "What is Phi Sigma Sigma's official stone?",
		"answers": ['Ruby','Diamond','Emerald','Sapphire'],
		"correctAnswer": 'Sapphire',
		"image": 'assets/images/sapphire.jpg'
	},
	{ "question": "How many founders does Phi Sigma Sigma have?",
		"answers": ['12','3','10','6'],
		"correctAnswer": '10',
		"image": 'assets/images/founders.jpg'
	},
	{ "question": "What are Phi Sigma Sigma's colors?",
		"answers": ['Navy and Gold','King Blue and Gold','Rose Red and Sunshine Yellow','Black and White'],
		"correctAnswer": 'King Blue and Gold',
		"image": 'assets/images/badge.jpg'
	},
	{ "question": "Where is Phi Sigma Sigma Headquarters located?",
		"answers": ['Baltimore, MD','Washington, D.C.','Elkridge, MD','New York City, NY'],
		"correctAnswer": 'Elkridge, MD',
		"image": 'assets/images/headquarters.jpg'
	},
	{ "question": "What is Phi Sigma Sigma's motto?",
		"answers": ['Diokete Hupsala','Union hand in hand','Do Good','Seek the Noblest'],
		"correctAnswer": 'Diokete Hupsala',
		"image": 'assets/images/crest.JPG'
	},
	{ "question": "What does Diokete Hupsala mean?",
		"answers": ['Once, Always','Aim High','Do Good','Seek the Noblest'],
		"correctAnswer": 'Aim High',
		"image": 'assets/images/aimhigh.jpg'
	},
	{ "question": "What is Phi Sigma Sigma's symbol?",
		"answers": ['Skull & Crossbones','Anchor','Arrow','Sphinx'],
		"correctAnswer": 'Sphinx',
		"image": 'assets/images/sphinx.jpg'
	},
	{ "question": "What does LITP mean?",
		"answers": ['Lean into thy prayer','Love in the Pyramid','Learning in the purest ','Lean into the Phi'],
		"correctAnswer": 'Love in the Pyramid',
		"image": 'assets/images/logo.jpeg'
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
	});
};

function setTimer() {
	number = 16;
	decrement();
	intervalId = setInterval(decrement, 1000);
	console.log("Timer set.");
};

function displayQuestion(qIndex) {
	setTimer();
	$("#timer").show();
	//reset results div to blank before displaying next question
	$("#results").empty();
	$("#pic").hide();
	$("#question").html(myQuestions[qIndex].question);
	//reset html of answer div to blank before adding answer-buttons of next question
	$("#answer").empty();
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
		correct++;
		//disable buttons clickability
		$(".answer-button").hide();
		nextQuestion();
		$("#results").html("<p>Correct! The answer is " 
			+ myQuestions[qIndex].correctAnswer + ".</p>");
		showPicture();
	}else if(result === "incorrect") {
		wrong++;
		//hide buttons so they cannot be clicked again
		$(".answer-button").hide();
		nextQuestion();
		$("#results").html("<p>Nope! <br> The correct answer is " 
			+ myQuestions[qIndex].correctAnswer + ".</p>");
		showPicture();
	}else {
		unanswered++;
		//hide buttons so they cannot be clicked again
		$(".answer-button").hide();
		nextQuestion();
		$("#results").html("<p>No answer selected! <br> The correct answer is " 
			+ myQuestions[qIndex].correctAnswer + ".</p>");
		showPicture();
	};
};

function showPicture() {
		$("#pic").show();
		$("#pic").attr('src', myQuestions[qIndex].image);
};

function nextQuestion() {
	clearInterval(intervalId);
	$("#timer").hide();
	setTimeout(function() {
		qIndex++;
		if (qIndex <= (myQuestions.length -1)) {
			stop();
			//move to next question automatically 
			displayQuestion(qIndex);
			console.log("nextQ");
		}else {
			clearInterval(intervalId);
			console.log("end of round");
			// //Show results
			$("#results").html("Finished! Here's how you did: <br> Correct: " 
				+ correct + "<br> Incorrect: " + wrong + "<br> Unanswered: " + unanswered);
			$("#question").hide();
			$("#timer").hide();
		};
	}, 5000);	
};

//Set timer to decrease by 1 second until 0. 
function decrement() {
	number--;
	$("#timer").html("<h1>Time remaining: " + number + "</h1>");
	if (number === 0) {
		showResult();
		console.log("Time Up!");
	} 
};
function stop(){
	console.log("Timer stopped.");
	clearInterval(intervalId);
};
start();