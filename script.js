let btn = document.querySelectorAll(".btn");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function reset() {
    turnO = true;
    result.innerHTML = "";

    btn.forEach((box) => {
        box.innerHTML = ""
        box.disabled = false
    })
}

btn.forEach((box) => {          
    box.addEventListener('click', () => {
        if(turnO === true) {
            box.innerHTML = "O"
            turnO = false;
        } else if(turnO === false) {
            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner()
    })
});

function checkWinner() {
    for(let pattern of winPatterns) {
        let val1 = btn[pattern[0]].innerHTML;
        let val2 = btn[pattern[1]].innerHTML;
        let val3 = btn[pattern[2]].innerHTML;

        if(val1 != "" && val2 != "" && val3 != "") {
            if(val1 === val2 && val2 === val3) {
                btn.forEach((box) => { box.disabled = true})
                if (result) {
                    result.innerHTML = `Congratulations, Winner is ${val1}`;
                }
                return;
            }
        }
    }
}

