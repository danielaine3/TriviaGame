var correct = 0;
var wrong = 0;
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
	{ "question": "What is Phi Sigma Sigma's flower?",
		"answers": ['Shasta Daisy','Moutan Peony','Common Sunflower','American Beauty Rose'],
		"correctAnswer": 'American Beauty Rose'
	}

];

function displayQuestion(qnum) {
	if(quesitonIndex <= (myQuestions.length - 1)) {
		$("#question").html(myQuestions[qnum]);

	}
}

$(document).ready(function(){

//create button to start game
var btn = document.createElement("button");
var t = document.createTextNode("Start");
btn.appendChild(t);
$("#btn").append(btn);
});

//Set button to start game onclick
var number = 30;

var intervalId;

function start(){

	$("#btn").on("click", function(){

		intervalId = setInterval(decrement, 1000)
		console.log("Timer set.");
		$('#btn').hide();
	})

};

function decrement() {

	number--;

	$("#timer").html("<h2>" + number + "</h2>");

	if (number === 0) {

		stop();

		alert("Time Up!");

		console.log("Time Up!");
	} 
}

function stop(){

	clearInterval(intervalId);
}

start();

//function showQuestions- onclick of button

//function showResults- onclick of answer- use if/else, set time result shows on screen ~5seconds

//move to next question automatically 
//reset timer


