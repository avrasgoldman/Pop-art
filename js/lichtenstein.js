let h = 800;
let w = window.innerWidth / 2;
let spacer = 8;
let dotSize = 5;
let rowNum;

function setup() {
  var bendayBg = createCanvas(w, h);
  bendayBg.parent('benday');
  background(255, 255, 255);
  rowNum = 0;
  fill(0, 0, 0);
  noStroke();
  for (let y = 0; y < h+1; y += spacer) {
    for (let x = 0; x < w+1; x += spacer) {
      if ( rowNum % 2 == 0) {
        ellipse(x + spacer/2, y + spacer/2, dotSize, dotSize);
      } else {
        ellipse(x, y + spacer/2, dotSize, dotSize);
      }
    }
    rowNum ++;
  }
}
