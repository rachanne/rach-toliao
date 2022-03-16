let micVar;
let mic;
 
let circleX = 0;
let fr = 30; 
let clr;

let ant1;
let ant2;


function setup() {
  angleMode(DEGREES);
  
  mic = new p5.AudioIn();
  mic.start();

  frameRate(fr); 
  clr = color(000000);
  
  ants1 = new Ants(20, 20, 10);
  console.log(ants1);
  
}

function draw(){

  createCanvas(400, 400);
  background(116, 149, 112);
  
//draw ants - background
  
  ants1.display();
  
  ants1.move();
  
  
//drawAnts();
  
//plate sliding
  let plateSlide = map(mouseX, 0, width, 0, 400, true);
  fill(255, 254, 252)
  ellipse(plateSlide, 200, 400, 400);

// burning toast
  micVar = map  (mic.getLevel(), 0, 0.1, 0, 205);

//drawings
  
drawToast();
  
drawBurntToast();

drawWhites();
  
drawYolk(width*.4, height*.31, 10);
  
// fly flying 
  circleX = circleX + 1 * (deltaTime / 50); 

  if (circleX >= width) {
    
   if (fr === 30) {
      clr = color(000000);
      fr = 10;
      frameRate(fr);
    } else {
      clr = color(000000);
      fr = 30;
      frameRate(fr);
    }
    rectX = 0;
  }
  fill(clr);
  circle(circleX, 150, 5, 20);

}

function drawAnts(xPos, yPos, rotation) {
  
  push();
  fill(55, 44, 32)
  
  translate(xPos, yPos);
  rotate(rotation);
  ellipseMode(CENTER);
  circle(30, 10, 5);
  circle(30, 15, 5);
  circle(30, 20, 5);
  pop();

  
}

function drawToast(){
  
//toast main body
  noStroke();
  fill(227, 196, 137);
  beginShape();
  vertex(width*.1,height*.3)
  vertex(width*.9,height*.3)
  vertex(width*.89,height*.9) 
  vertex(width*.12,height*.9) 
  endShape(CLOSE);
  

//toast top
  circle(100, 100, 150)
  circle(300, 100, 150)
  
  beginShape();
  vertex(width*.4,height*.15)
  vertex(width*.4,height*.4)
  vertex(width*.7,height*.4)
  endShape(CLOSE);
  
  beginShape();
  vertex(width*.6,height*.15)
  vertex(width*.3,height*.4)
  vertex(width*.6,height*.4)
  endShape(CLOSE);
  
  beginShape();
  vertex(width*.4,height*.18)
  vertex(width*.6,height*.18)
  vertex(width*.5,height*.3)
  vertex(width*.5,height*.3)
  endShape(CLOSE);
  
}

function drawBurntToast(){
  
//burnt toast
  
push()
  fill(199, 162, 109, 10+micVar)
  rect(70, 100, 80, 250)
  rect(160, 100, 90, 250)
  rect(260, 100, 80, 250)
pop()
  

}

function drawWhites(){

//egg main body
  
  fill(239, 237, 224)
  ellipse(250, 300, 200, 150);
  ellipse(220, 240, 120, 100);
  
  
}

function drawYolk(xPos, yPos, rotation){
  
//egg yolk
  fill(240, 200, 49)
  push();
  circle(280, 300, 100)
  
  translate(xPos, yPos)
  fill(255, 252, 243)
  rotate(rotation);
  ellipseMode(CENTER);
  circle(xPos, yPos, 20)
  pop();
  
}
