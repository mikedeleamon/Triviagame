// Trivia Game Js

var i = -1;
var trivia = [
//questions
['how many states in the USA are connected?','What year did man first reach the moon?', 'which is the most popular pokemon?', 'Are there more men or woman on the planet?'],
//answer1
['50','1953','pikachu','more men'],
//answer2
['48','1972','charzard','more women'],
//answer3
['52','1969','mewtwo',"it's 50/50"],
//answer4
['2','sometime in the 90s','vaporeon',''],

//correct answer
['48','1969','pikachu','']
];

// display the question
console.log(trivia[0][0])

$('#start').on('click',function(){
	console.log('i hear you')
	displayQuestion(i);
})

$('#nextbtn').on('click',function(){
	if (i>0){
		displayQuestion(i);
	}
})




// function displays queston

function displayQuestion(i){
	i++
	$('#question').html("question "+i);
	$('#qbody').html(trivia[0][i]);
	console.log(trivia[0][i]);
	showAnswer(i);
}

// create a function to show the answers
function showAnswer(qNumber){
	
		for(j=1; j<trivia.length-1;j++){
			console.log(trivia[j][qNumber]);
			$('#a'+j).html(trivia[j][qNumber]);
			}
		
}

// create a function that checks the correct answer

function isRight(rAnswer){
// if the text in the button == answer, youre right
	if (rAnswer==trivia[5][i]) {
		console.log("You Got it");
	}
	else{
		console.log("wrong, the answer is "+trivia[5][i])
	}



}

