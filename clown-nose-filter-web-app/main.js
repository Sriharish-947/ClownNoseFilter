noseX = 0;
noseY = 0;
function preload()
{
    clownNoseImage = loadImage("https://i.postimg.cc/8cn0THYk/Clown-Nose.gif");
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results, error)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y -15;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}

function modelLoaded()
{
    console.log("model has been succesfully loaded!")
}

function draw()
{
    image(video, 0, 0, 400, 400);
    //fill("red");
    //stroke("red");
    //circle(noseX, noseY, 20);
    image(clownNoseImage, noseX, noseY, 30, 30);
}

function takeSnapshot()
{
    save("myImageLooksGood.png");
}