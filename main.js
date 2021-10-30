video = "";
status = "";
Objectdt="";
object = [];
function preload() {
video = createVideo("video.mp4");
}


function setup() {
canvas = createCanvas(700,500);
canvas.center();
video.hide();
}

function stuartlittle() {
    Objectdt = ml5.objectDetector('cocossd', loads);
    document.getElementById("stat").innerHTML = "Detected The objects, loading..."
}
function loads() {
    console.log("Loaded");
    status = true;
    video.loop();
    video.speed(2);
    video.volume(1);
   
}


function gotem(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

function draw() {
    image(video, 0, 0, 700, 500);
    if(status != true) {
        Objectdt.detect(video, gotem);
        for(i=0; i < object.length; i++) {
            document.getElementById("stat").innerHTML = "Indicating Objects...";
            document.getElementById("numb").innerHTML = 'Objects:'+object.length;
            fill("#FF0000");
            text(object[i].label, object[i].x, object[i].y);
            nofill();
            stroke("Red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
    
    }