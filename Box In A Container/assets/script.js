// HTML stuff
const box = document.getElementById('box')
const container = document.getElementsByClassName('container')[0]

// Box Css
box.style.width = "50px"
box.style.height = "50px"
box.style.backgroundColor = "tomato"
box.style.position = 'absolute'
box.style.bottom = '0'
box.style.left = '0'

// Container Css (other half is in html)
container.style.width = '500px'
container.style.height = '500px'

// Container Parametrs (for later use)
const conWidth = +container.style.width.replace('px', '')
const conHeight = +container.style.height.replace('px', '')

// Box parametrs (for later use)
const boxWidth = +box.style.width.replace('px', '')
const boxHeight = +box.style.height.replace('px', '')

// Borders
const upBorder = conHeight - boxHeight
const rightBorder = conWidth - boxWidth
const downBorder = 0
const leftBorder = 0

// How long is one step
const step = 10

// Keyboard setup
// no idea what it does but it doesn't move without this
document.onkeydown = checkKey;

// Function to recognize arrow keys
function checkKey(e) {

    e = e || window.event;

    // Player movement according to Y and X
    let boxY = +box.style.bottom.replace('px', '')
    let boxX = +box.style.left.replace('px', '')

    // up arrow keypress and top border
    if (e.keyCode === 38 && boxY < upBorder) {

        // Move Up
        box.style.bottom = (boxY + step) + 'px'
        console.log("From Bottom: " + boxY);
    }

    // down arrow keypress and bottom border
    else if (e.keyCode === 40 && boxY > downBorder) {

        // Move Down
        box.style.bottom = (boxY - step) + 'px'
        console.log("From Bottom: " + boxY);
    }

    // left arrow keypress and left border
    else if (e.keyCode === 37 && boxX > leftBorder) {

        // Move right
        box.style.left = (boxX - step) + 'px'
        console.log("From Left: " + boxX);

    }

    // right arrow keypress and right border
    else if (e.keyCode === 39 && boxX < rightBorder) {

        // Move left
        box.style.left = (boxX + step) + 'px'
        console.log("From Left: " + boxX);
    }
}


// Box in Container. The box can be moved by arrowkeys, it doesn't go outside of the Container