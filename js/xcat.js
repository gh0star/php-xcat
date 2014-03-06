var code_JYS = 0;
var code_PZ = 0;
var code_YF = 0;


function alert_audio(){
	audio = new Audio("audio/alert.mp3");
  	audio.play();
}

function add_box(){

}

function load_code_JYS(){
	str = "";
	for(i in JYS){
		str += "<option value="+i+">"+JYS[i]+"</option>"
	}
	$("select[name=exchange]")[0].innerHTML = str;
}

function load_code_PZ(j){
	code_JYS = j;
	str = "";
	for(i in PZ[j]){
		str += "<option value="+i+">"+PZ[j][i]+"</option>"
	}
	$("select[name=variety]")[0].innerHTML = str;
}

function load_code_YF(j){
	code_PZ = j;
	str = "";
	for(i in YF[code_JYS][code_PZ]){
		str += "<option value="+YF[code_JYS][code_PZ][i][1]+">"+YF[code_JYS][code_PZ][i][0]+"</option>"
	}
	$("select[name=contract]")[0].innerHTML = str;
}

function add_handle(){
	//console.log(YF[code_JYS][code_PZ][code_YF][0]);
	//console.log(YF[code_JYS][code_PZ][code_YF][1]);
}

sd

function init(){
	load_code_JYS();
}


jQuery(document).ready(function($) {
	init();
});