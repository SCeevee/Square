noseX=0;
noseY=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500, 500);
    canvas=createCanvas(500, 500);
    canvas.position(550, 125);
    poseNet=ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background(255, 0, 0);
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, 100);

}

function modelLoaded(){
    console.log("PoseNet ready");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY =" + noseY);
    }
}