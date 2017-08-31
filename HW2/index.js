function word (hi){
	document.getElementById("mocha").innerHTML = document.getElementById("mocha").innerHTML + hi;
}
function words (){
	var y = document.getElementById("mocha").innerHTML;
	var x = document.getElementById("mocha").innerHTML.length;
	document.getElementById("mocha").innerHTML = y.substring(0,x-1);
}
function cle (){
	document.getElementById("mocha").innerHTML = ' ';
}
function bar (hi){
	document.getElementById("mocha").innerHTML = document.getElementById("mocha").innerHTML + ' ';
}