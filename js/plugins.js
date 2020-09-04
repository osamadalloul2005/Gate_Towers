

var backVideo=document.getElementById("backVideo");
var playBtn  =document.getElementById("playBtn");
var icon     =document.getElementById("icon");
var conHead  =document.getElementById("conHead");
var conTitle  =document.getElementById("conTitle");

playBtn.onclick= function ()

{
    backVideo.style.display="block";
    

    if(backVideo.paused)
    {
        backVideo.play();
        icon.src="images/pause.png";
        conHead.style.display="none";
        conTitle.style.display="none";
    }
    else
    {
        backVideo.pause();
        icon.src="images/play.png";
        conHead.style.display="block";
        conTitle.style.display="block";
    }
};
