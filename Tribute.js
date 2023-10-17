var myVideo = document.getElementById("video");

function pp(){
    if(myVideo.paused){
        myVideo.play();
    }else{
        myVideo.pause();
    }
}

function BIG(){
    myVideo.width = 600;
}

function Normal(){
    myVideo.width = 300;
}