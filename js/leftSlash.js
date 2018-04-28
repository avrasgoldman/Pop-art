//create stage for SVG
let dividerLeft = new Rune({
  container: "#leftSlash",
  width: 600,
  height: 32,
});

let arrayTop = [];
let arrayBottom = [];
let gapLeft = 15;
let numberLines = 40;
let divHeight = 30;

for (let i = 0; i < numLines; i++) {
  arrayTop.push(gapLeft * i);
}

for (let i = 1; i <= numLines; i++) {
  arrayBottom.push(gapLeft * i);
}

for (let i = 0; i < numLines; i++) {
  dividerLeft.line(arrayTop[i], 0, arrayBottom[i], divHeight)
    .stroke('#7f8c8d')
    .strokeWidth(5);
}

dividerLeft.draw();