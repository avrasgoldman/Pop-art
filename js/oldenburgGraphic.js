//create stage for SVG
let r = new Rune({
  container: "body",
  width: 800,
  height: 800,
  debug: false
});

let grid = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 10,
  columns: 2,
  rows: 2
});

function squares1(x, y) {
  for (let i = 0; i < 4; i++) {
    let lineColor;
    if (i === 0) {
      lineColor = '#7f8c8d'; //colors go from darker to lighter
    } else if (i === 1) {
      lineColor = '#95a5a6';
    } else if (i === 2) {
      lineColor = '#bdc3c7';
    } else {
      lineColor = '#ecf0f1';
    }
    let s = r.rect(x + 2.5 + i * 5, y + 2.5 + i * 5, 69 - i * 18, 69 - i * 18)
      .strokeWidth(5)
      .fill(false)
      .stroke(lineColor);

    grid.add(s, 2, 2);
  }
}

function squares2(x, y) {
  for (let i = 0; i < 4; i++) {
    let lineColor;
    if (i === 0) {
      lineColor = '#7f8c8d'; //colors go from darker to lighter
    } else if (i === 1) {
      lineColor = '#95a5a6';
    } else if (i === 2) {
      lineColor = '#bdc3c7';
    } else {
      lineColor = '#ecf0f1';
    }
    let s = r.rect(x + 2.5 + i * 13, y + 2.5 + i * 13, 69 - i * 18, 69 - i * 18)
      .strokeWidth(5)
      .fill(false)
      .stroke(lineColor);

    grid.add(s, 1, 1);
  }
}

function squares3(x, y) {
  for (let i = 0; i < 4; i++) {
    let lineColor;
    if (i === 0) {
      lineColor = '#7f8c8d'; //colors go from darker to lighter
    } else if (i === 1) {
      lineColor = '#95a5a6';
    } else if (i === 2) {
      lineColor = '#bdc3c7';
    } else {
      lineColor = '#ecf0f1';
    }
    let s = r.rect(x + 2.5 + i * 13, y + 2.5 + i * 5, 69 - i * 18, 69 - i * 18)
      .strokeWidth(5)
      .fill(false)
      .stroke(lineColor);

    grid.add(s, 1, 2);
  }
}

function squares4(x, y) {
  for (let i = 0; i < 4; i++) {
    let lineColor;
    if (i === 0) {
      lineColor = '#7f8c8d'; //colors go from darker to lighter
    } else if (i === 1) {
      lineColor = '#95a5a6';
    } else if (i === 2) {
      lineColor = '#bdc3c7';
    } else {
      lineColor = '#ecf0f1';
    }
    let s = r.rect(x + 2.5 + i * 5, y + 2.5 + i * 13, 69 - i * 18, 69 - i * 18)
      .strokeWidth(5)
      .fill(false)
      .stroke(lineColor);

    grid.add(s, 2, 1);
  }
}


function makeSquares(loc) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (loc === "br") {
        squares1(j * 69 - j * 2, i * 69 - i * 2);
      } else if (loc === "tl") {
        squares2(j * 69 - j * 2, i * 69 - i * 2);
      } else if (loc === "bl") {
        squares3(j * 69 - j * 2, i * 69 - i * 2);
      } else if (loc === "tr") {
        squares4(j * 69 - j * 2, i * 69 - i * 2);
      }
    }
  }
}

makeSquares("br"); //bottom right design
makeSquares("tl"); //bottom right design
makeSquares("bl"); //bottom right design
makeSquares("tr"); //bottom right design

r.draw();