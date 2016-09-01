// Trivia Game Js

//watch
window.onload = function(){
    
    
    $('#reset').click(stopwatch.reset);
    $('#start').click(stopwatch.start);
};

var stopwatch = {
    time:11,
    
    reset: function () {
        stopwatch.time = 0;
        stopwatch.lap = 1;
        //change the "display" div to "00:00"
        $(".well").html("00:00")
        //empty the "laps" div
        
    },
    start: function(){
        counter=setInterval(stopwatch.count,1000);
        //Use setInterval to start the count here

    },
    stop: function(){
        //Use clearInterval to stop the count here
        clearInterval(counter);


    },
    
    
    count: function(){
        stopwatch.time--;
        //increment time by 1, remember we cant use "this" here
        
        //Get the current time, pass that into the stopwatch.timeConverter function, and save the result in a variable
        realTime=stopwatch.timeConverter(stopwatch.time);
        //Use the variable you just created to show the converted time in the "display" div
        $(".well").html(realTime);
    },
    timeConverter: function(t){
        //This function is done. You do not need to touch it. It takes the current time in seconds and converts it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
};





//Trivia
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
$('.answer').on('click', isRight())




// function displays queston

function displayQuestion(i){
	i++;
	$('#question').html("question "+i);
	$('#qbody').html(trivia[0][i]);
	console.log(trivia[0][i]);
	showAnswer(i);
	if (stopwatch.time==0) {
		("#question").html("you ran out of time, press next for the next question")
		
		stopwatch.time=11;
	}
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

