// get squares

let clicked = false;

let sq1 = document.querySelector('.top-left');
let sq2 = document.querySelector('.top-middle');
let sq3 = document.querySelector('.top-right');


let sq4 = document.querySelector('.middle-left');
let sq5 = document.querySelector('.middle-middle');
let sq6 = document.querySelector('.middle-right');

let sq7 = document.querySelector('.bottom-left');
let sq8 = document.querySelector('.bottom-middle');
let sq9 = document.querySelector('.bottom-right');

let sq1C = null;
let sq2C = null;
let sq3C = null;

let sq4C = null;
let sq5C = null;
let sq6C = null;

let sq7C = null;
let sq8C = null;
let sq9C = null;

let turnElement = document.getElementById('turn');
alert('red is player 1,');
alert('blue is player 2');

turnElement.innerHTML = "Player 1's turn";
let turn1;
turn1 = true

function changeTurn() {
  if (clicked != false) {
    if (turn1 === true) {
      turn1 = false
      turnElement.innerHTML = "Player 2's turn";
      clicked = false;
    } else {
      turnElement.innerHTML = "Player 1's turn";
      turn1 = true
      clicked = false;
    } 
  } else {
    alert('Please click a square')
  }
}

function checkWinonSquare(sq, ssqq, sqq, color) {
  if (sq === color && ssqq === color && sqq === color) {
    alert(color + ' Win!');
  }
}

function checkWincol(color) {
  // row check
  checkWinonSquare(sq1C, sq2C, sq3C, color);
  checkWinonSquare(sq4C, sq5C, sq6C, color);
  checkWinonSquare(sq7C, sq8C, sq9C, color);

  // col check
  checkWinonSquare(sq1C, sq4C, sq7C, color);
  checkWinonSquare(sq2C, sq5C, sq8C, color);
  checkWinonSquare(sq3C,sq6C, sq9C, color);

  // diga check
  checkWinonSquare(sq1C, sq5C, sq9C, color);
  checkWinonSquare(sq3C, sq5C, sq7C, color);
}

function checkWin() {
  checkWincol('red');
  checkWincol('blue');
}

const main = () => {
  if (turn1 === true) {
    sq1.onclick = () => {
      if (sq1C === null) {
        if (clicked === false) {
          sq1.style.backgroundColor = 'red';
          clicked = true;
          sq1C = 'red';
          checkWin();
          changeTurn() 
        }
      }
    }
    sq2.onclick = () => {
      if (sq2C === null) {
        if (clicked === false) {
          sq2.style.backgroundColor = 'red';
          clicked = true;
          sq1C = 'red';
          checkWin();
          changeTurn()
        }
      }
    }
    sq3.onclick = () => {
      if (sq3C === null) {
        if (clicked === false) {
          sq3.style.backgroundColor = 'red';
          clicked = true;
          sq3C = 'red';
          checkWin();
          changeTurn()
        }
      }
    }
    sq4.onclick = () => {
      if (sq4C === null) {
        if (clicked === false) {
          sq4.style.backgroundColor = 'red';
          clicked = true;
          sq4C = 'red';
          checkWin();
          changeTurn()
        }
      }
    }
    sq5.onclick = () => {
      if (sq5C === null) {
        if (clicked === false) {
          sq5.style.backgroundColor = 'red';
          clicked = true;
          sq5C = 'red';
          checkWin();
          changeTurn()
        }
      }
    }
    sq6.onclick = () => {
      if (sq6C === null) {
        if (clicked === false) {
          sq6.style.backgroundColor = 'red';
          clicked = true;
          sq6C = 'red';
          checkWin();
          changeTurn()
        }
      }
    }
    
    sq7.onclick = () => {
      if (sq7C === null) {
        if (clicked === false) {
          sq7.style.backgroundColor = 'red';
          clicked = true;
          sq7C = 'red';
          checkWin();
          changeTurn()
        }
      }
    }
    sq8.onclick = () => {
      if (sq8C === null) {
        if (clicked === false) {
          sq8.style.backgroundColor = 'red';
          clicked = true;
          sq8C = 'red';
          checkWin();
          changeTurn()
        }
      }
    }
    sq9.onclick = () => {
      if (sq9C === null) {
        if (clicked === false) {
          sq9.style.backgroundColor = 'red';
          clicked = true;
          sq9C = 'red';
          checkWin();
          changeTurn()
        }
      }
    }
  } else {
    sq1.onclick = () => {
      if (sq1C === null) {
        if (clicked === false) {
          sq1.style.backgroundColor = 'blue';
          clicked = true;
          sq1C = 'blue';
          checkWin();
          changeTurn()
        }
      }
    }
    sq2.onclick = () => {
      if (sq2C === null) {
        if (clicked === false) {
          sq2.style.backgroundColor = 'blue';
          clicked = true;
          sq2C = 'blue';
          checkWin();
          changeTurn()
        }
      }
    }
    sq3.onclick = () => {
      if (sq3C === null) {
        if (clicked === false) {
          sq3.style.backgroundColor = 'blue';
          clicked = true;
          sq3C = 'blue';
          checkWin();
          changeTurn()
        }
      }
    }
    
    
    sq4.onclick = () => {
      if (sq4C === null) {
        if (clicked === false) {
          sq4.style.backgroundColor = 'blue';
          clicked = true;
          sq4C = 'blue';
          checkWin();
          changeTurn()
        }
      }
    }
    sq5.onclick = () => {
      if (sq5C === null) {
        if (clicked === false) {
          sq5.style.backgroundColor = 'blue';
          clicked = true;
          sq5C = 'blue';
          checkWin();
          changeTurn()
        }
      }
    }
    sq6.onclick = () => {
      if (sq6C === null) {
        if (clicked === false) {
          sq6.style.backgroundColor = 'blue';
          clicked = true;
          sq6C = 'blue';
          checkWin();
          changeTurn()
        }
      }
    }
    
    sq7.onclick = () => {
      if (sq7C === null) {
        if (clicked === false) {
          sq7.style.backgroundColor = 'blue';
          clicked = true;
          sq7C = 'blue';
          checkWin();
          changeTurn()
        }
      }
    }
    sq8.onclick = () => {
      if (sq8C === null) {
        if (clicked === false) {
          sq8.style.backgroundColor = 'blue';
          clicked = true;
          sq8C = 'blue';
          checkWin();
          changeTurn()
        }
      }
    }
    sq9.onclick = () => {
      if (sq9C === null) {
        if (clicked === false) {
          sq9.style.backgroundColor = 'blue';
          clicked = true;
          sq9C = 'blue';
          checkWin();
          changeTurn()
        }
      }
    }
  }

  checkWin('red');
  checkWin('blue');

};

setInterval(function () {
  main()
}, 10)

// you can also use getEventListner (not spelled correctly)