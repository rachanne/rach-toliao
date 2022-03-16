class Ants {
  constructor(_xPos, _yPos, _rotation) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    
  }
  
  display() {
  
  push();
  fill(55, 44, 32)
  
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  circle(30, 10, 5);
  circle(30, 15, 5);
  circle(30, 20, 5);
  

  circle(50, 20, 5);
  circle(50, 25, 5);
  circle(50, 30, 5);
  
  circle(290, 20, 5);
  circle(290, 25, 5);
  circle(290, 30, 5);
  
  circle(380, 10, 5);
  circle(380, 15, 5);
  circle(380, 20, 5);
  pop();
  
  }
  
 move(){
   
   if(this.yPos <= height * 1.03){
   this.yPos += 2;
   } else {
     this.yPos = -height * .03;
     
   }
   
 }

}
