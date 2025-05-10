let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newbtn = document.querySelector('#new');
let msgContainer = document.querySelector('.msg');
let msg = document.querySelector('#msg')
let turn = true//playerX
const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
function resetBtn() {
    turn = true;
    enableB();
    msgContainer.classList.add('hide');

}
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box was clicked');

        if (turn) {
            box.innerText = 'X';
            box.style.color = "gold";
            turn = false;
        } else {
            box.innerText = 'O';
            turn = true;
        }
        box.disabled = true;//after clicking once,can't be changed)
        check();
    })
})
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableB = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxes();
}
let check = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log('Winner is', pos1);
                showWinner(pos1);
                alert(pos1 + ' is the Winner');
            }
        }
    }
}

newBtn.addEventListener('click', resetBtn);
reset.addEventListener('click', resetBtn);