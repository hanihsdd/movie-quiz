$(document).ready(function(){

var answer;
currentQuestion = 0;
currentScore = 0;

//Store question 1 and 4 possible answers
var questions = [
	
	{
		q: "Which of the following 1970s classics did not win an Academy Award for Best Picture?",
		qNum: 1,
		choices: ["The French Connection", "Network", "One Flew Over The Cuckoo's Nest", "Rocky"],
		correct: "Network",
		explanation: "<p>Network was the only film to not win an Academy Award for Best Picture. It was nominated for Best Picture in 1976 along with All the President's Men, Bound for Glory, Taxi Driver, and the eventual winner - Rocky.</p><p>Despite the loss in Best Picture, Network managed to win 5 Academy Awards including 3 in the major acting categories.</p>"
	},
	{
		q: "Frances McDormand plays a pregnant sheriff in which dark comedic thriller?",
		qNum: 2,
		choices: ["Twelve Monkeys", "Fargo", "Heat", "The Quick and the Dead"],
		correct: "Fargo",
		explanation: "<p>Frances McDormand plays a pregnant sheriff in Fargo tasked with investigating a series of local homicides. The movie received much critical acclaim and was nominated for 7 Academy Awards, winning 2 for Best Screenplay, and Best Actress in a Leading Role for Frances McDormand.</p>"
	},
	{
		q: "Spike Lee directed and starred in Do The Right Thing. What character did he play?",
		qNum: 3,
		choices: ["Radio Raheem", "Sweet Dick Willie", "Mookie", "Siddy"],
		correct: "Mookie",
		explanation: "<p>Spike Lee played Mookie, a young black parent in Brooklyn, New York, working in an Italian family pizzeria, alongside an intensely racist character named Pino, played by John Turturro. The movie features the debuts of Martin Lawrence and Rosie Perez. As well as performances from Samuel L Jackson, and Giancarlo Esposito.</p>"
	},
	{
		q: "How many times has Meryl Streep been nominated for an Academy Award?",
		qNum: 4,
		choices: ["15", "19", "23", "27"],
		correct: "19",
		explanation: "<p>Meryl Streep has been nominated for a record 19 Academy Awards. She has won 3 awards for Kramer vs Kramer, Sophie's Choice, and The Iron Lady. Her first nomination was in 1978 for her role in The Deer Hunter.</p>"
	},
	{
		q: "In the classic 1970s movie Dog Day Afternoon, what famous word does Al Pacino repeatedly shout at the police?",
		qNum: 5,
		choices: ["Pigs!", "Gastown!", "Alcatraz!", "Attica!"],
		correct: "Attica!",
		explanation: "<p>Al Pacino screams the famous word of 'Attica!' at the police, to raucous cheers from an onlooking crowd as he becomes locked in a bank whilst attempting to rob it. Attica was in reference to the Attica Prison Riots of 1971.</p><p>The movie was nominated for 6 Academy Awards, winning one for Best Original Screenplay. It is based upon a real-life story that happened in the early seventies in which the Chase Manhattan Bank in Gravesend, Brooklyn, was held siege by a gay bank robber determined to steal enough money for his male lover to undergo a sex change operation.</p>"
	}] //End questions


$(".intro").show();
$(".welcome").hide();
$(".game").hide();
$(".answer-review").hide();
$(".results").hide();
$("#name").focus();


$("form").submit(function(event) {
	event.preventDefault();
	
	userName = $.trim($("#name").val());

	if ( userName == "" ) {
		userName = "The Person With No Name";
	}
	else {
		userName = $.trim($('#name').val());
	}
	$(".intro").fadeOut();
	$(".welcome").fadeIn();
	$("h3.name").text(userName);
})


$("#play").on("click", function() {
	$(".welcome").fadeOut();
	$(".game").fadeIn();
	loadQuestion();
});

function loadQuestion() {


$(".question-number").text("Question " + questions[currentQuestion].qNum + " of 5");
$(".score").text("Score: " + currentScore);

$("h2.question").text(questions[currentQuestion].q);

$("#choice1").text(questions[currentQuestion].choices[0]);
$("#choice2").text(questions[currentQuestion].choices[1]);
$("#choice3").text(questions[currentQuestion].choices[2]);
$("#choice4").text(questions[currentQuestion].choices[3]);

}

loadQuestion();

$("li").on("click", function(){
	answer = $(this).text();
	answerCheck();
});

$(".answer-review button").on("click", function(){
	if (currentQuestion < 4) {
		currentQuestion += 1;
		loadQuestion();
		console.log("click");
		$(".game").fadeIn();
		$(".answer-review").fadeOut();
	}
	else if (currentQuestion == 4) {
		$(".answer-review").fadeOut();
		$(".results").fadeIn();
		finalReview();
		$(".results h3").text(userName);

	}
	event.preventDefault();
});

function answerCheck() {
	if (answer == questions[currentQuestion].correct) {
		$(".game").fadeOut();
		$(".answer-review").fadeIn();
		$(".explainer").html(questions[currentQuestion].explanation);
		currentScore++;
		$(".answer-review h3").text("You're right!");
		$(".answer-review h4").text("1 point");
		console.log("Correct");
	}
	else {
		$(".game").fadeOut();
		$(".answer-review").fadeIn();
		$(".explainer").html(questions[currentQuestion].explanation);
		$(".answer-review h3").text("You're wrong!");
		$(".answer-review h4").text("0 points");
		console.log("Incorrect");
	}
}

function finalReview() {
	if ( currentScore == 5 ) {
		console.log("You have 5 stars");
		$(".results .container").append("<article><h4>Score</h4></h3>" + currentScore + " / 5</h3></article><article><p><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i></p><p>\u201C A masterful performance that will live on through the ages.\u201D</p><h4>Sight & Sound</h4></article>");
	} 
	else if ( currentScore == 4 ) {
		$(".results .container").append("<article><h4>Score</h4></h3>" + currentScore + " / 5</h3></article><article><p><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-o'></i></p><p>\u201C A great debut performance that promises much in the years to come.\u201D</p><h4>Sight & Sound</h4></article>");
		$(".results .container").append("<article><h4>Score</h4></h3>" + currentScore + " / 5</h3></article><article><p><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-o'></i></p><p>\u201C A great debut performance from " + userName +".\u201D</p><h4>Sight & Sound</h4></article>");
	}
	else if ( currentScore == 3 ) {
		$(".results .container").append("<article><h4>Score</h4></h3>" + currentScore + " / 5</h3></article><article><p><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i></p><p>\u201C A decent but uneven performance that hints at a lot more potential.\u201D</p><h4>Sight & Sound</h4></article>");
	}
	else if ( currentScore == 2 ) {
		$(".results .container").append("<article><h4>Score</h4></h3>" + currentScore + " / 5</h3></article><article><p><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i></p><p>\u201C A bad performance but some glimmers of talent on show.\u201D</p><h4>Sight & Sound</h4></article>");
	}
	else if ( currentScore == 1 ) {
		$(".results .container").append("<article><h4>Score</h4></h3>" + currentScore + " / 5</h3></article><article><p><i class='fa fa-star'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i></p><p>\u201C A terrible performance. But not terrible enough for a Razzie. In some ways this failure at being completely terrible makes it worse.\u201D</p><h4>Sight & Sound</h4></article>");
	}
	else if ( currentScore == 0 ) {
		$(".results .container").append("<article><h4>Score</h4></h3>" + currentScore + " / 5</h3></article><article><p><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i></p><p>\u201C A performance so stupefyingly bad comes along only once in a lifetime. This one has Razzie award winner written all over it.\u201D</p><h4>Sight & Sound</h4></article>");
	}
}


//End Doc Ready
});