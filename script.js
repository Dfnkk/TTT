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

let turnElement = document.getElementById('turn');
alert('red is player 1,');
alert('blue is player 2');

turnElement.innerHTML = "Player 1's turn";
let turn1;
turn1 = true

function changeTurn() {
  if (turn1 === true) {
    turn1 = false
  } else {
    turn1 = true
  }
}

const main = () => {
  if (turn1 === true) {
    sq1.onclick = () => {
      if (clicked === false) {
        sq1.style.backgroundColor = 'red';
        clicked = true;
      }
    }
    sq2.onclick = () => {
      if (clicked === false) {
        sq2.style.backgroundColor = 'red';
        clicked = true;
      }
    }
    sq3.onclick = () => {
      if (clicked === false) {
        sq3.style.backgroundColor = 'red';
        clicked = true;
      }
    }
    sq4.onclick = () => {
      if (clicked === false) {
        sq4.style.backgroundColor = 'red';
        clicked = true;
      }
    }
    sq5.onclick = () => {
      if (clicked === false) {
        sq5.style.backgroundColor = 'red';
        clicked = true;
      }
    }
    sq6.onclick = () => {
      if (clicked === false) {
        sq6.style.backgroundColor = 'red';
        clicked = true;
      }
    }
    
    sq7.onclick = () => {
      if (clicked === false) {
        sq7.style.backgroundColor = 'red';
        clicked = true;
      }
    }
    sq8.onclick = () => {
      if (clicked === false) {
        sq8.style.backgroundColor = 'red';
        clicked = true;
      }
    }
    sq9.onclick = () => {
      if (clicked === false) {
        sq9.style.backgroundColor = 'red';
        clicked = true;
      }
    }
  } else {
    sq1.onclick = () => {
      if (clicked === false) {
        sq1.style.backgroundColor = 'blue';
        clicked = true;
      }
    }
    sq2.onclick = () => {
      if (clicked === false) {
        sq2.style.backgroundColor = 'blue';
        clicked = true;
      }
    }
    sq3.onclick = () => {
      if (clicked === false) {
        sq3.style.backgroundColor = 'blue';
        clicked = true;
      }
    }
    
    
    sq4.onclick = () => {
      if (clicked === false) {
        sq4.style.backgroundColor = 'blue';
        clicked = true;
      }
    }
    sq5.onclick = () => {
      if (clicked === false) {
        sq5.style.backgroundColor = 'blue';
        clicked = true;
      }
    }
    sq6.onclick = () => {
      if (clicked === false) {
        sq6.style.backgroundColor = 'blue';
        clicked = true;
      }
    }
    
    sq7.onclick = () => {
      if (clicked === false) {
        sq7.style.backgroundColor = 'blue';
        clicked = true;
      }
    }
    sq8.onclick = () => {
      if (clicked === false) {
        sq8.style.backgroundColor = 'blue';
        clicked = true;
      }
    }
    sq9.onclick = () => {
      if (clicked === false) {
        sq9.style.backgroundColor = 'blue';
        clicked = true;
      }
    }
  }
};

setInterval(function () {
  main()
}, 10)