//create stage for SVG
let dividerLeft = new Rune({
  container: "#leftSlash",
  width: 600,
  height: 32,
});

let topArray = [];
let bottomArray = [];
let gap = 15;
let numLines = 40;
let dividerHeight = 30;

for (let i = 0; i < numLines; i++) {
  topArray.push(gap * i);
}

for (let i = 1; i <= numLines; i++) {
  bottomArray.push(gap * i);
}

for (let i = 0; i < numLines; i++) {
  dividerLeft.line(topArray[i], 0, bottomArray[i], dividerHeight)
    .stroke('#7f8c8d')
    .strokeWidth(5);
}

dividerLeft.draw();