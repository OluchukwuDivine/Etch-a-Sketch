let color= "black";

document.addEventListener("DOMContentLoaded", function(){
    drawGrid(16);

    let sizeBtn= document.getElementById("get-size");
sizeBtn.addEventListener("click", function(){
    let size= getSize();
    drawGrid(size);
})
})


function drawGrid(size){
    let board= document.getElementById("grid-container");

    board.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows= `repeat(${size}, 1fr)`;

    let allGrids= size * size;

    for(let i = 0; i < allGrids; i++){
        let div= document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);

    }

}
    function getSize(){
        let input= prompt("Input grid size");
        if (input =="" || input > 100 || input < 1){
            prompt("Size should be between 1 and 100");
        }
        else{
            return input;
        }
    }

function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else if (color == "gray"){
        this.style.backgroundColor = "gray"
    }
    else{
        this.style.backgroundColor= 'black'
    }
}
function setColor(colorChoice){
    color= colorChoice;
}
function resetBoard(){
    let divs= document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor= "white");
}

