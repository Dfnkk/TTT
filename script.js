/* 
let sq1 = document.querySelector('.top-left');
let sq2 = document.querySelector('.top-middle');
let sq3 = document.querySelector('.top-right');


let sq4 = document.querySelector('.middle-left');
let sq5 = document.querySelector('.middle-middle');
let sq6 = document.querySelector('.middle-right');

let sq7 = document.querySelector('.bottom-left');
let sq8 = document.querySelector('.bottom-middle');
let sq9 = document.querySelector('.bottom-right');

sq1.onclick = () => {
  sq1.style.backgroundColor = 'red';
}
sq2.onclick = () => {
  sq2.style.backgroundColor = 'red';
}
sq3.onclick = () => {
  sq3.style.backgroundColor = 'red';
}


sq4.onclick = () => {
  sq4.style.backgroundColor = 'red';
}
sq5.onclick = () => {
  sq5.style.backgroundColor = 'red';
}
sq6.onclick = () => {
  sq6.style.backgroundColor = 'red';
}

sq7.onclick = () => {
  sq7.style.backgroundColor = 'red';
}
sq8.onclick = () => {
  sq8.style.backgroundColor = 'red';
}
sq9.onclick = () => {
  sq9.style.backgroundColor = 'red';
} */


// get squares

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
      sq1.style.backgroundColor = 'red';
    }
    sq2.onclick = () => {
      sq2.style.backgroundColor = 'red';
    }
    sq3.onclick = () => {
      sq3.style.backgroundColor = 'red';
    }
    
    
    sq4.onclick = () => {
      sq4.style.backgroundColor = 'red';
    }
    sq5.onclick = () => {
      sq5.style.backgroundColor = 'red';
    }
    sq6.onclick = () => {
      sq6.style.backgroundColor = 'red';
    }
    
    sq7.onclick = () => {
      sq7.style.backgroundColor = 'red';
    }
    sq8.onclick = () => {
      sq8.style.backgroundColor = 'red';
    }
    sq9.onclick = () => {
      sq9.style.backgroundColor = 'red';
    }
  } else {
    sq1.onclick = () => {
      sq1.style.backgroundColor = 'blue';
    }
    sq2.onclick = () => {
      sq2.style.backgroundColor = 'blue';
    }
    sq3.onclick = () => {
      sq3.style.backgroundColor = 'blue';
    }
    
    
    sq4.onclick = () => {
      sq4.style.backgroundColor = 'blue';
    }
    sq5.onclick = () => {
      sq5.style.backgroundColor = 'blue';
    }
    sq6.onclick = () => {
      sq6.style.backgroundColor = 'blue';
    }
    
    sq7.onclick = () => {
      sq7.style.backgroundColor = 'blue';
    }
    sq8.onclick = () => {
      sq8.style.backgroundColor = 'blue';
    }
    sq9.onclick = () => {
      sq9.style.backgroundColor = 'blue';
    }
  }
};

let wl = true
while (wl === true) {
  main();
}