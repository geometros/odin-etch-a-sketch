const GRID = 10
const MARGIN = 1
let WIDTH = (window.innerWidth - 2 * GRID * MARGIN) / GRID
const GRIDSIZE = GRID*GRID;

const container = document.createElement('div');
container.setAttribute('id','container')

for  (i=0;i<GRIDSIZE;i++){
    const div = document.createElement('div');
    div.setAttribute('style',`margin:${MARGIN}px; width: ${WIDTH}px; height: ${WIDTH}px`)
    div.classList.add('gridItem')
    container.appendChild(div)
}

document.body.appendChild(container)

addEventListener("mouseover", (event) => {
    if(event.target.classList.contains('gridItem')){
         event.target.style.backgroundColor = "#222";
    }
})

const button = document.getElementById('Resize')
button.addEventListener("click", () => {refresh(prompt('Enter grid width, for example 25 for 25 x 25 grid:'))})

function refresh(SIZE) {
    
    const divs = document.getElementsByClassName('gridItem');
    
    while (divs.length > 0) { //remember this! all ideas with incrementing index or for..as did not work
        divs[0].remove();
    }

    const parent = document.getElementById('container');

    for (i=0;i<SIZE*SIZE;i++){
        const div = document.createElement('div');
        WIDTH = (window.innerWidth/SIZE) - 2*MARGIN
        div.setAttribute('style',`margin:${MARGIN}px; width: ${WIDTH}px; height: ${WIDTH}px`)
        div.classList.add('gridItem')
        parent.appendChild(div)
    }
}
