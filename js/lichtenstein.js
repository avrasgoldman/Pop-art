var h = 800;
var w = window.innerWidth / 2;
var spacer = 10;
var maxDotSize = 6;
var minDotSize = 2;
var maxDist;
var distAdjust = 0.6;
var rowNum;

function setup() {
  var bendayBg = createCanvas(w, h);
  bendayBg.parent('benday');
  maxDist = dist(0, 0, w, h) * distAdjust;
}

function draw() {
  background(255, 255, 255);
  fill(0, 0, 0);
  noStroke();

  rowNum = 0;
  for (var y = 0; y < h + spacer; y += spacer) {
    for (var x = 0; x < w + spacer; x += spacer) {
      var mouseDist = dist(mouseX, mouseY, x, y);
      var dotSize = map (mouseDist, 0, maxDist, minDotSize, maxDotSize, true);
      if( rowNum % 2 == 0) {
        ellipse (x + spacer / 2, y + spacer / 2, dotSize, dotSize);
      } else {
        ellipse (x, y + spacer / 2, dotSize, dotSize);
      }
    }
    rowNum ++;
  }
}

// // Height of canvas is the same as heigh of div
// var h = 800;
// var w = window.innerWidth / 2;
// var spacer = 8;
// var dotSize = 5;
// var bendays = [];
//
// function setup(){
//   var bg = createCanvas(w, h);
//   bg.parent('benday');
//   noStroke();
//   initializeArray();
//   drawBackground();
//   placeBenday();
// }
//
// function placeBenday() {
//   for(var i = 0; i < bendays.length; i++){
//     bendays[i].draw();
//   }
// }
//
// function mouseDragged() {
//   for (var i = bendays.length - 1; i >= 0; i --) {
//     if(bendays[i].touching(mouseX, mouseY) && mouseIsPressed) {
//       bendays.splice(i, 1);
//     }
//   }
//   drawBackground();
//   placeBenday();
// }
//
// function drawBackground(){
//   background(247, 246, 227);
//   var rowNum = 0;
//   for (var y = 0; y < h; y += spacer) {
//     for (var x = 0; x < w; x += spacer) {
//       if (rowNum % 2 == 0) {
//         fill(171, 28, 42);
//         ellipse(x + spacer / 2, y + spacer / 2, dotSize);
//       } else {
//         fill(171, 28, 42);
//         ellipse(x, y + spacer / 2, dotSize);
//       }
//     }
//     rowNum ++;
//   }
// }
//
// function initializeArray() {
//   var rowNum = 0;
//   for (var y = 0; y < h; y+= spacer){
//     for(var x = 0; x < w; x += spacer) {
//       if (rowNum % 2 == 0) {
//         bendays.push(new Benday(x + spacer / 2, y + spacer / 2));
//       } else {
//         bendays.push(new Benday(x, y + spacer / 2));
//       }
//     }
//   }
// }
//
// class Benday {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.mouseSize = 8;
//     this.size = dotSize + 2;
//     this.color = color(247, 246, 227, 255);
//   }
//
//   draw() {
//     fill(this.color);
//     ellipse(this.x, this.y, this.size);
//   }
//
//   touching(x, y){
//     return dist(this.x, this.y, x, y) < (this.size/2 + this.mouseSize / 2);
//   }
// }
