status="";
function setup() {
    canvas = createCanvas(360,360);
    canvas.center();
    video = createCapture(360,360);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function draw() {
    image(video,0,0,360,360);
}