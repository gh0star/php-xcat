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
	$("select[name=contract]")[0].innerHTML = "<option value=0>合约</option>";
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

	if($("select[name=contract]")[0].value == 0){
		alert_mgs("未选择合约" ,4000);
		return;
	}

	if(isNaN($("input[name=alert_text]")[0].value) || $("input[name=alert_text]")[0].value.length == 0){
		alert_mgs("告警条件应为数字且不能为空" ,4000);
		return;
	}

	//add yf num
	if(localStorage.yf_list == undefined){
		localStorage.yf_list = code_JYS;
		localStorage.name_list = code_PZ;
	}
}

function alert_option_change(option_value){
	if(option_value > "2"){
		$("#alert_point").hide();
	}else{
		$("#alert_point").show();
	}
}

function alert_mgs(content, time){
	$('.alert-danger')[0].innerHTML = content;
	$('.alert-danger').slideToggle();
	setTimeout(function() {
		$('.alert-danger').slideToggle();
		$('.alert-danger')[0].innerHTML = "";
	}, time);
}


function init(){
	load_code_JYS();
}


jQuery(document).ready(function($) {
	init();
});