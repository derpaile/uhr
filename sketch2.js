hoehe = 700;
breite = 500;
let RHour= 130;
let RMinute= 200;
let RSecond = 200;
let angleHour;
let angleMinute = 0;
let angleSecond = 0;
let button;
let r = 0;
let g = 0;
let b = 0;
let farbeuhr = 255;

function setup() {
  createCanvas(breite, hoehe);
  angleMode(DEGREES);
  //button = createButton('Drück mich pls dann ändere ich mein Antlitz');

}





function draw() {
  //mousePressed(changeBG);
  Hour = hour();
  HourSingleDigit = abs(hour()-12)
  Minute = minute();
  Second = second();
  Month = month();
  Day = day();
  Year = year();
  translate(width/2, height/2);
  background(r,g,b);
  clockFace();
  hourarrow();
  minutearrow();
  secondarrow();
  textclock();
  textdate();
}

function clockFace() {
  var numPoints = 60;
  var numMinutes = 12;
  var angleMinutes = 360/numMinutes
  var angle = 360 / numPoints;
  strokeWeight(4);
  stroke(farbeuhr);
  beginShape(POINTS);
  var i = 0;
  while (i < numPoints) {
    x = cos(angle * i) * RSecond;
    y = sin(angle * i) * RSecond;
    vertex(x, y);
    i++;
  }
  
  endShape();
  beginShape(POINTS);
  strokeWeight(10);
  stroke(farbeuhr);
  i = 0;
  
  while (i < numMinutes) {
    x = cos(angleMinutes * i) * RSecond;
    y = sin(angleMinutes * i) * RSecond;
    vertex(x, y);
    i++;
  }
  endShape();

}

function hourarrow()  {
  angleHour = 30*HourSingleDigit-90;

  let x1 = 0;
  let y1 = 0;
  let x2 = cos(angleHour)*RHour;
  let y2 = sin(angleHour)*RHour;
  stroke(farbeuhr);
  strokeWeight(7);

  line(x1,y1,x2,y2)
}

function minutearrow() {
  angleMinute = 6*Minute-90;
  let x1 = 0;
  let y1 = 0;
  let x2 = cos(angleMinute)*RMinute;
  let y2 = sin(angleMinute)*RMinute;
  stroke(0,158,224);
  strokeWeight(5)  
  

  line(x1,y1,x2,y2)
}

function secondarrow() {
  angleSecond = 6*Second-90;
  let x1 = 0;
  let y1 = 0;
  let x2 = cos(angleSecond)*RSecond;
  let y2 = sin(angleSecond)*RSecond;
  stroke(255,24,42,255);
  strokeWeight(2)
  line(x1,y1,x2,y2)
}

function textclock() {

  stroke(255);
  fill(0,158,224);
  textFont('ComicSansMS',55);  
  
  if (Minute<10){
    stringMinute = "0" + String(Minute);
  }
  else{
    stringMinute= String(Minute);
  }
  
  if (Hour<10){
    stringHour = "0" + String(Hour);
    }
  else{
    stringHour= String(Hour);
  }
  
  if (Second<10){
    stringSecond = "0" + String(Second);
  }
  else{
    stringSecond = String(Second);
  }
  stringTime = stringHour + ":" + stringMinute + ":" + stringSecond;
  textAlign(CENTER, TOP);
 // text(stringTime, -breite/2+140,-hoehe/2+60)
    text(stringTime, 0,-hoehe/2+10)


}

function textdate(){

stringDate = String(Day) + "." + String(Month) + "." + String(Year);
stroke(255);
fill(0,158,224);
textFont('ComicSansMS',55); 
textAlign(CENTER, BOTTOM);
text(stringDate, 0,+hoehe/2-10);

}

function backgroundcycle() {
console.log(Hour)

if (Hour >= 18){
  background(51, 51, 255);
  }
  
  else{
    background(255, 255, 0);
  }
  
}

function changeBG() {
 
}

function mousePressed() {
   r = random(0,255);
   g = random(0,255);
   b = random(0,255);
  if (r+g+b <= 300) {
    farbeuhr = 255;
  }
    else {
      farbeuhr = 0;
    }
    
  
  
  background(r,g,b);
  }
