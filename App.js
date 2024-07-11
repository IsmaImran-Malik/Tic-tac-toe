let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new_game");
let msgContainer=document.querySelector(".msg_container");
let turnO=true;

const win_patterns=[
    [0,1,2],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if (turnO){ //playerO's turn
            box.innerHTML="O";
            turnO=false;
        }
        else{ //playerX's turn
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled =true;
        checkWinner();
    })
});

const resetGame = () => {
    turnO = true;
    enable_boxes();
    msgContainer.classList.add("hide");
}

const enable_boxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disable_boxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const show_winner = (winner) => {
    msgContainer.innerText = `Congratulations! winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable_boxes();
};

const checkWinner = () => {
    for(let pattern of win_patterns){
        let position1value = boxes[pattern[0]].innerText;
        let position2value = boxes[pattern[1]].innerText;
        let position3value = boxes[pattern[2]].innerText;

        if (position1value != "" && position2value != "" && position3value != ""){
            if (position1value === position2value && position2value === position3value ){
                show_winner(position1value);
            }
        }
        
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);