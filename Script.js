let boxes = document.querySelectorAll(".box");
let heading = document.querySelector(".Winner");
let btn = document.querySelector(".reset");
let mess = document.getElementById("msg"); 
let turn0 = true;

const WinningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        } else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (pattern of WinningPattern) {
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                message(pos1val); // ✅ pass winner symbol
            }
        }
    }
};

btn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
    mess.innerHTML = ""; // ✅ clear message on reset
    turn0 = true;
    console.log("Game Reset");
});

const message = (Winner) => {
    mess.innerHTML = `🎉 Player ${Winner} Wins The Game!`; // ✅ fixed variable name
};
