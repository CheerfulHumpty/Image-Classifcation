let classifier;
let video;
let label = ""
let confi = ""
function preload(){
    classifier = ml5.imageClassifier("MobileNet")
}
function gotResults(results){
    console.log(results)
    label = results[0].label
    confi = results[0].confidence

}
function setup(){
let canvas = createCanvas(400,600)
canvas.position(360,40)
video = createCapture(VIDEO)
video.hide()
classifier.classifyStart(video,gotResults)
}
function draw(){
  background(220) 
  image(video,0,0,width,400)
  textSize(25);
  fill(255,0,0);
  textAlign(CENTER, CENTER);
  text("Object: "+label, 200,500); 
  text("Confidence; "+Math.ceil(confi*100000)/100000, 200,550)
}
