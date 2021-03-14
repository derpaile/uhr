hoehe = 500;
breite = 500;
let RHour = 130;
let RMinute = 200;
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
  var angle = 360 / numPoints;
  strokeWeight(4);
  stroke(255, 200);
  beginShape(POINTS);
  var i = 0;
  while (i < numPoints) {
    x = cos(angle * i) * RSecond;
    y = sin(angle * i) * RSecond;
    vertex(x, y);
    i++;
  }
  endShape();

}



function draw() {
  background(0);
  let Time = getTime();
  translate(width / 2, height / 2);
  clockFace();
  hourarrow(Time[0]);
  minutearrow(Time[1]);
  secondarrow(Time[2]);
  //console.log(Time);


}


function getTime() {
  var Hour = abs(hour() - 12);
  var Minute = minute();
  var Second = second();
  return [Hour, Minute, Second]
}


function hourarrow(Hour) {
  angleHour = 30 * Hour - 90;

  let x1 = 0;
  let y1 = 0;
  let x2 = cos(angleHour) * RHour;
  let y2 = sin(angleHour) * RHour;
  stroke(255);
  strokeWeight(7);

  line(x1, y1, x2, y2)
}

function minutearrow(Minute) {
  angleMinute = 6 * Minute - 90;
  let x1 = 0;
  let y1 = 0;
  let x2 = cos(angleMinute) * RMinute;
  let y2 = sin(angleMinute) * RMinute;
  stroke(255);
  strokeWeight(5)


  line(x1, y1, x2, y2)
}

function secondarrow(Second) {
  angleSecond = 6 * Second - 90;
  let x1 = 0;
  let y1 = 0;
  let x2 = cos(angleSecond) * RSecond;
  let y2 = sin(angleSecond) * RSecond;
  stroke(255, 24, 42, 255);
  strokeWeight(2)
  line(x1, y1, x2, y2)
}
