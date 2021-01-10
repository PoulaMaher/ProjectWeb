//HTML Elements

const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

// Game Variables

let gameIsLive = true;
let xIsNext = true;
//functions
const handleWin = (letter) => {
    gameIsLive = false;
    if(letter === 'x'){
        statusDiv.innerHTML = `Player ${letter} has won!`;
    }else{
        statusDiv.innerHTML = `<span>Player ${letter} has won! </span>`;
    }
};
const checkGameStatus = () =>{
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];
   
    // check winner

    if(topLeft && topLeft === topMiddle && topRight === topMiddle){
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    }
    else if(middleLeft && middleLeft === middleMiddle && middleRight === middleMiddle){
        handleWin(middleLeft);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    }
    else if(bottomLeft && bottomLeft === bottomMiddle && bottomRight === bottomMiddle){
        handleWin(bottomLeft);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if(topLeft && topLeft === middleLeft && bottomLeft === middleLeft){
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    }
    else if(topMiddle && topMiddle === middleMiddle && bottomMiddle === middleMiddle){
        handleWin(topMiddle);
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    }
    else if(topRight && topRight === middleRight && bottomRight === middleRight){
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if(topLeft && topLeft === middleMiddle && bottomRight === middleMiddle){
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if(topRight && topRight === middleMiddle && bottomLeft === middleMiddle){
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    }
    else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight){
        gameIsLive = false;
        statusDiv.innerHTML = "No Player had won!";
    }
    else{
        xIsNext = !xIsNext;
        if(xIsNext){
            statusDiv.innerHTML = "x Is Next";
        }
        else{
            statusDiv.innerHTML = "<span>o Is Next</span>";
        }
    }
};

// Event Handlers

const handleReset = () =>{
    xIsNext = true;
    gameIsLive = true;
    statusDiv.innerHTML = "x Is Next";
    for(const cellDiv of cellDivs){
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
};

const handleCellClick = (e) =>{
    const classList = e.target.classList;
    if(!gameIsLive || classList[1] === 'x' || classList[1] === 'o'){
        return;
    }
    if(xIsNext){
        classList.add('x');
        checkGameStatus();

    }
    else{
        classList.add('o');
        checkGameStatus();  
    }
};

//Event Listeners

resetDiv.addEventListener('click',handleReset);

for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click',handleCellClick)
}