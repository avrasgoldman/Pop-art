//create stage for SVG
let r2 = new Rune({
  container: "#oldenburgDivider1",
  width: 600,
  height: 32,
});

let topArray = [];
let bottomArray = [];
let gap = 15;
let numLines = 40;
let dividerHeight = 30;

for (let i = 1; i <= numLines; i++) {
  topArray.push(gap * i);
}

for (let i = 0; i < numLines; i++) {
  bottomArray.push(gap * i);
}

for (let i = 0; i < numLines; i++) {
  let l = r2.line(topArray[i], 0, bottomArray[i], dividerHeight)
    .stroke('#7f8c8d')
    .strokeWidth(5);
}

r2.draw();