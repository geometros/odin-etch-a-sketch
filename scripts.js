const GRID = 10
const GRIDSIZE = GRID*GRID;

const container = document.createElement('div');
container.setAttribute('id','container')

for  (i=0;i<GRIDSIZE;i++){
    const div = document.createElement('div');
    div.setAttribute('style','background-color:blue')
    div.classList.add('gridItem')
    container.appendChild(div)
}

document.body.appendChild(container)

addEventListener("mouseover", (event) => {
    if(event.target.classList.contains('gridItem')){
         event.target.style.backgroundColor = "red";
    }
})

const button = document.getElementById('Resize')
button.addEventListener("click", () => {refresh(prompt('Enter grid width, for example 25 for 25 x 25 grid:'))})
//issue: grid resize only halves grid size each time

function refresh(SIZE) {
    const divs = document.getElementsByClassName('gridItem');
    while (divs.length > 0) { //remember this! all ideas with incrementing index or for..as did not work
        divs[0].remove();
    }
    const parent = document.getElementById('container');
    console.log(SIZE)
    for (i=0;i<SIZE*SIZE;i++){
        const div = document.createElement('div');
        div.setAttribute('style','background-color:blue')
        //div.textContent = 'Hello';
        div.classList.add('gridItem')
        parent.appendChild(div)
    }
}
