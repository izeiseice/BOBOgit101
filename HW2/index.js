function num(e) {
    document.getElementById("bobo").innerHTML=" "+document.getElementById("bobo").innerHTML+e;
}
function bksp() {
    var y=document.getElementById("bobo").innerHTML;
    var x=document.getElementById("bobo").innerHTML.length;
    document.getElementById("bobo").innerHTML=y.substring(0,x-2);
}