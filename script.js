'use strict';
const box = document.getElementById("box")
let boxTop = 200;
let boxLeft = 200;

function keyListener(event){
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);


    if(keyName === 'ArrowUp'){
        box.style.top = (boxTop - 10) + 'px';
        boxTop -= 10;
    }

    else if(keyName === 'ArrowDown'){
        box.style.top = (boxTop + 10) + 'px';
        boxTop += 10;
    }

    if(keyName === 'ArrowLeft'){
        box.style.left = (boxLeft - 10) + 'px';
        boxLeft -= 10;
    }

    else if(keyName === 'ArrowRight'){
        box.style.left = (boxLeft + 10) + 'px';
        boxLeft += 10;
    }
    
}

document.addEventListener('keydown', keyListener);