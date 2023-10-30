function drag(e) {
    e.dataTransfer.setData('text', e.target.id)
}

function allowDrop(e) {
    e.preventDefault()
}

function drop(e) {
    e.preventDefault()

    let data = dataTransfer.getData('text')
    e.target.appendChild(document.getElementById(data))
}

document.getElementById('drag').addEventListener('dragstart',drag)

let dragArea = ['box1','box2','box3','box4']

dragArea.forEach((id) => {
    let element = document.getElementById(id)
    element.addEventListener('drop', drop)
    element.addEventListener('dragover', allowDrop)
});


