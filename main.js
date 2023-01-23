status= true
images="[]";

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status= true
    video.loop;
    video.speed(1);
    video.volum(0);
}

function draw(){
    image(video, 0, 0, 480, 380);
    if(status !="")
    {
        objectDetector.detect(video, gotResult);
        for(i=0; 1< image.length; i++){
            document.getElementById("status").innerHTML = "Status: Image Detected";
            document.getElementById("number_of_images").innerHTML = "Number of Images detected are: "+ objects.length;
    
            fill("#FF0000");
            percent= floor(Objects[i].confidence*100);
            text(images[1].label+""+ percent+ "%", images[1].x + 15, images[1].y+15);
            noFill();
            stroke("#FF0000");
            rect(images[1].x, images[1].y, images[1].width, images[1].height);
        }
        }
}

function gotResult(){
    if(error){
        console.log(error);
    }
    console.log(results);
    images=results;
    }

    function start(){
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "Status: Detecting Objects";
    }
    