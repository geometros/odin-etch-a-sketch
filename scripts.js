const GRID = 100
const GRIDSIZE = GRID*GRID;

const container = document.createElement('div');
container.setAttribute('id','container')

for  (i=0;i<GRIDSIZE;i++){
    const div = document.createElement('div');
    div.setAttribute('style','background-color:blue; height:50px; width:50px')
    //div.textContent = 'Hello';
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
button.addEventListener("click", () => {GRID = prompt('Enter grid width, for example 25 for 25 x 25 grid:')})
//alerts but does not resize grid
