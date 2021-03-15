hoehe = 700;
breite = 500;
let RHour= 130;
let RMinute= 200;
let RSecond = 200;
let angleHour;
let angleMinute = 0;
let angleSecond = 0;

function setup() {
  createCanvas(breite, hoehe);
  angleMode(DEGREES)
}


function clockFace() {
  var numPoints = 60;
  var numMinutes = 12;
  var angleMinutes = 360/numMinutes
  var angle = 360 / numPoints;
  strokeWeight(4);
  stroke(255);
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
  stroke(255);
  i = 0;
  
  while (i < numMinutes) {
    x = cos(angleMinutes * i) * RSecond;
    y = sin(angleMinutes * i) * RSecond;
    vertex(x, y);
    i++;
  }
  endShape();

}

function draw() {
  background(0);
  translate(width/2, height/2);
  clockFace();
  Hour = hour();
  HourSingleDigit = abs(hour()-12)
  Minute = minute();
  Second = second();
  Month = month();
  Day = day();
  Year = year();
  hourarrow();
  minutearrow();
  secondarrow();
  textclock();
  textdate();

}



function hourarrow()  {
  angleHour = 30*HourSingleDigit-90;

  let x1 = 0;
  let y1 = 0;
  let x2 = cos(angleHour)*RHour;
  let y2 = sin(angleHour)*RHour;
  stroke(255);
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
  text(stringTime, -breite/2+140,-hoehe/2+60)
 
}

function textdate(){

stringDate = String(Day) + "." + String(Month) + "." + String(Year);
stroke(255);
fill(0,158,224);
textFont('ComicSansMS',45); 
text(stringDate, -breite/2+147,+hoehe/2-40);

}
