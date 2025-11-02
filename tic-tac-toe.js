const boxes = document.querySelectorAll('.box');
const reset = document.querySelector('.reset');
const newGame = document.querySelector('.newGame');
const msgcotn = document.querySelector('.msg-cotn');
const msg = document.querySelector('.msg');

let turnX = true;
let count = 0;

const winningPatterns  = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () =>{
        turnX = true;
        count = 0;
        
        boxes.forEach(box => {
            box.innerText = '';
            box.disabled = false;
            box.style.backgroundColor ='';
        });
        msgcotn.classList.add("hide");
};
    

boxes.forEach((boxes) => {
    boxes.addEventListener('click',() =>{ 
        if(turnX){
            boxes.innerText = "X";
            boxes.style.color = "#820263";
            turnX = false;
        }else{
            boxes.innerText = "O";
            boxes.style.color = "#231942";
            turnX = true;
        }
         boxes.disabled = true;   
         count++;

         checkWinner();

         if(count === 9 && msgcotn.classList.contains("hide")){
                msg.innerText = `Match Draw! `;
                msgcotn.classList.remove("hide");
         }
    });
});


const checkWinner = () =>{
    for(let i = 0 ; i < winningPatterns.length ; i++){
        const pattern = winningPatterns[i];

        const a = pattern[0];
        const b = pattern[1];
        const c = pattern[2];

        let val1 = boxes[a].innerText;
        let val2 = boxes[b].innerText;
        let val3 = boxes[c].innerText;


        if (val1 !== "" && val1 === val2 && val2 === val3) {
                boxes[a].style.backgroundColor = "#90ee90";
                boxes[b].style.backgroundColor = "#90ee90";
                boxes[c].style.backgroundColor = "#90ee90";

                boxes.forEach(box => box.disabled = true);

                msg.innerText = `Congratulations , Winner is ${val1} `;
                msgcotn.classList.remove("hide");
            return;
        }
    }
};



reset.addEventListener('click', resetGame);
newGame.addEventListener('click', resetGame);