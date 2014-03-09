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
	code_JYS = parseInt(j);
	str = "";
	for(i in PZ[j]){
		str += "<option value="+i+">"+PZ[j][i]+"</option>"
	}
	$("select[name=variety]")[0].innerHTML = str;
	$("select[name=contract]")[0].innerHTML = "<option value=0>合约</option>";
}

function load_code_YF(j){
	code_PZ = parseInt(j);
	str = "";
	for(i in YF[code_JYS][code_PZ]){
		str += "<option value="+i+">"+YF[code_JYS][code_PZ][i][0]+"</option>"
	}
	$("select[name=contract]")[0].innerHTML = str;
}

function load_list(){
	html_str = "";
	if(localStorage.length == 0){
		$("table tbody")[0].innerHTML = "<tr style='text-align:center;'><td colspan=7>未添加任何数据</td></tr>";
	}else{
		name = localStorage.name_list.split(",");
		code = localStorage.yf_list.split(",");
		for(i=0; i<localStorage.length; i++){
			html_str += "<tr><td>"+name[i]+"("+code[i]+")";
			html_str += "</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>";
			html_str += "<td><a href='#' onclick='del("+i+");'>删除</a></td>";
			html_str += "</tr>";
		}
	}
	$("table tbody")[0].innerHTML = html_str;
}

function del(i){
	alert(i);
}

function add_handle(){
	//console.log(YF[code_JYS][code_PZ][code_YF][0]);
	//console.log(YF[code_JYS][code_PZ][code_YF][1]);
	//return ;

	if($("select[name=contract]")[0].value == 0){
		alert_mgs("未选择合约");
		return;
	}

	if(isNaN($("input[name=alert_text]")[0].value) || $("input[name=alert_text]")[0].value.length == 0){
		alert_mgs("告警条件应为数字且不能为空");
		return;
	}

	//add yf num
	if(localStorage.yf_list == undefined){
		localStorage.yf_list = YF[code_JYS][code_PZ][code_YF][1];
		localStorage.name_list = YF[code_JYS][code_PZ][code_YF][0];
	}else{
		localStorage.yf_list += "," + YF[code_JYS][code_PZ][code_YF][1];
		localStorage.name_list += "," + YF[code_JYS][code_PZ][code_YF][0];
	}

	alert("添加成功!");
	init_select();
}

function init_select(){
	code_JYS = 0;
	code_PZ = 0;
	code_YF = 0;

	load_code_JYS();
	$("select[name=variety]")[0].innerHTML = "<option value=0>品种</option>";
	$("select[name=contract]")[0].innerHTML = "<option value=0>合约</option>";	
	$("select[name=alert]")[0].value = 1;
	$("input[name=alert_text]")[0].value = "";
}

function alert_option_change(option_value){
	if(option_value > "2"){
		$("#alert_point").hide();
	}else{
		$("#alert_point").show();
	}
}

function alert_mgs(content){
	alert(content);
}


function init(){
	load_code_JYS();
	load_list();
}


jQuery(document).ready(function($) {
	init();
});