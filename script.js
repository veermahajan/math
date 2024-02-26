var score = 0;
var total = 16;
var q1Done = false;
var q2Done = false;
var q3Done = false;
var q4Done = false;
var q5Done = false;
var q6Done = false;
var q7Done = false;
var q8Done = false;
var over = false;
var sec = 1800;
var song = document.getElementById("song");
var muteCount = 0;

function start(){
	song.play();
	document.getElementById("music").innerHTML = "<button id='muteButton'onclick='mute()'>Mute</button>";
	document.getElementById("queries").style = "visibility:visible;"
	document.getElementById("button").innerHTML = "";
	var timer = setInterval(function(){
		document.getElementById('mins').innerHTML= Math.floor(sec/60);
		if (sec - 60*Math.floor(sec/60) < 10){
			document.getElementById("secs").innerHTML= "0" + String(sec - 60*Math.floor(sec/60));
		}
		else{
			document.getElementById("secs").innerHTML= sec - 60*Math.floor(sec/60);
		}
		if (over == false){
			sec--;
		}
		if (sec < 0) {
			clearInterval(timer);
			document.getElementById("main").innerHTML = "<p>Time expired.</p>";
			}
	}, 1000);
}
function mute(){
	if (muteCount % 2 == 0){
		song.muted = true;
	}
	else{
		song.muted = false;
	}
	muteCount++;
}
function returnFinalScore(){
	over = true;
	var answer1 = document.getElementById("one").value;
	if (answer1 == 2 && q1Done == false){
		score += 3;
	}
	q1Done = true;
	var answer2 = document.getElementById("two").value;
	if (answer2 == 1780 && q2Done == false){
		score += 2;
	}
	q2Done = true;
	var answer3 = document.getElementById("three").value;
	if (answer3 == 0.96 && q3Done == false){
		score += 1;
	}
	q3Done = true;
	var answer4 = document.getElementById("four").value;
	if (answer4 == 2.6 && q4Done == false){
		score += 2;
	}
	q4Done = true;
	var answer5 = document.getElementById("five").value;
	if (answer5 == 0.97 && q5Done == false){
		score += 1;
	}
	q5Done = true;
	var answer6 = document.getElementById("six").value;
	if (answer6 == 6 && q6Done == false){
		score += 3;
	}
	q6Done = true;
	var answer7 = document.getElementById("seven").value;
	if (answer7 == 9 && q7Done == false){
		score += 2;
	}
	q7Done = true;
	var answer8 = document.getElementById("eight").value;
	if (answer8 == 10 && q8Done == false){
		score += 2;
	}
	q8Done = true;
	
	let finalDecimal = score/total;
	let finalScore = Math.round(10000 * finalDecimal);
	finalScore = finalScore/100;
	let weightedScore = Math.round(100 * (finalScore * Math.sqrt(1 + sec/1800)/2 + finalScore/2))/100;
	document.getElementById("end").innerHTML = "<p>" + finalScore + "%<br>" + weightedScore + " points</p>";
	if (weightedScore >= 90){
		document.getElementById("feedback").innerHTML = "<p style='color:green;'>Tier 1<br></p>";
	}
	else if (weightedScore >= 65){
		document.getElementById("feedback").innerHTML = "<p style='color:orange;'>Tier 2<br></p>";		
	}
	else if (weightedScore >= 50){
		document.getElementById("feedback").innerHTML = "<p style='color:yellow;'>Tier 3<br></p>";
	}
	else{
		document.getElementById("feedback").innerHTML = "<p style='color:red;'>No Tier<br></p>";		
	}
	finalScore=0;
	document.getElementById("sub").innerHTML = "Submitted. View results below.";
}
