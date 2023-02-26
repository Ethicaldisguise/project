function vis()
{
    document.getElementById("show").style.display="block";

}
function invis()
{

    document.getElementById("show").style.display="none";
}
function nvis()
{
    document.getElementById("nshow").style.display="block";

}
function ninvis()
{

    document.getElementById("nshow").style.display="none";
}
function play(){
    document.getElementById("myVideo").load();
}
function vid()
{
    document.getElementById("myVideo").play();
}
function wer()
{
    document.getElementById("myVideo").pause();
}
var a=0;
function mut()
{
    a=a+1;
    if(a%2 != 0){
    document.getElementById("myVideo").muted = false;
    document.getElementById("mutebox").innerHTML="Mute";
    }
    if(a%2 == 0){
        document.getElementById("myVideo").muted = true;
        document.getElementById("mutebox").innerHTML="UnMute";
    }
  
}
var input = document.getElementByName("q");
input.addEventListener("keypress", function(event) 
{
  if (event.key === "Enter") 
  {
    event.preventDefault();
    document.getElementById("searchbtn").click();
  }
}
);