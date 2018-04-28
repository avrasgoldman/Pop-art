//create stage for SVG
let r3 = new Rune({
  container: "body",
  width: 600,
  height: 80,
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
  let l = r3.line(topArray[i], 0, bottomArray[i], dividerHeight)
    .stroke('#7f8c8d')
    .strokeWidth(5);
}

r3.draw();