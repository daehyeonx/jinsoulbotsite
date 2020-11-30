$(document).ready(function() {
	$('#ok').click(function (event){
		var x = $('#person').val();
		if(x == 'tea'){
			teaSleep();
		}
		else if(x == 'jen'){
			jenSleep();
		}
	});
	$('#no').click(function (event){
		kermitJudge();
	});
});	
function jenSleep() {
	$('#kermit').attr("src","eevee_pat.png");
	$('h1').html("Nice jen go sleep");
}

function teaSleep() {
	$('#kermit').attr("src","eevee_sleep.png");
	$('h1').html("Nice tea go sleep");
}
function kermitJudge() {
	$('#kermit').attr("src", "kermitjudge.png");
	$('h1').html("kermitjudge");
}
function changePage(){
	var x = $('#person').val();
	if(x == 'tea'){
		$('#kermit').attr("src", "");
		$('h1').html("Tea go sleep");
	}
	else if(x == 'jen'){
		$('#kermit').attr("src", "");
		$('h1').html("Jen go sleep");
	}
	
}