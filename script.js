
const body = document.querySelector('body');
const gameUi = document.querySelector('#gameUi');
const intro = document.querySelector('#intro');

body.removeChild(gameUi);

const startButton = document.querySelector('.startButton');

startButton.addEventListener('click', e => {
    intro.classList.add('close');
    document.querySelector('.close').addEventListener('animationend', e => {
        body.removeChild(intro);
        body.appendChild(gameUi);

        game();
    })
})

function game(){
    const quit = document.querySelector('.quit');
    quit.addEventListener('click', e => {
        quitPrompt();
    })
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton = document.querySelector('.scissors');

    rockButton.addEventListener('click', selection);
    paperButton.addEventListener('click', selection);
    scissorsButton.addEventListener('click', selection);
}

function quitPrompt(){
    const html = `<div id="quitPrompt">
    <div class="quit-items">
        <p class="quitMessage">The game will restart</p>
        
        <div class="quitOptions">
            <button class="ok">Ok</button>
            <button class="cancel">Cancel</button>
        </div>
    </div>
</div>`;

    const holdBody = document.body.innerHTML;
    document.body.innerHTML = html + holdBody;

    document.querySelector(".ok").addEventListener('click', e => {
        document.querySelector('#quitPrompt').classList.toggle('close');
        
        document.querySelector('.close').addEventListener('animationend', e => {
            location.reload();
        })
    })

    document.querySelector(".cancel").addEventListener('click', e => {
        document.querySelector('#quitPrompt').classList.toggle('close');
        
        document.querySelector('.close').addEventListener('animationend', e => {
            document.body.removeChild(document.querySelector('#quitPrompt'));
            game();
        })
    })
}

function selection(button){
    let p = button.srcElement.alt;
    let c = computerSelection();

    document.querySelector('.compSel').src = imageSelection(p);
    document.querySelector('.playerSel').src = imageSelection(c);

    let outCome = rpsGame(p, c);
    document.querySelector('.choiceInfo').textContent = outCome;

    if(outCome.includes("Win")){
        document.querySelector('.playerScore').src = score(document.querySelector('.playerScore').alt);
        document.querySelector('.playerScore').alt = altForScore(score(document.querySelector('.playerScore').alt));
    }else if(outCome.includes("Lose")){
        document.querySelector('.compScore').src = score(document.querySelector('.compScore').alt);
        document.querySelector('.compScore').alt = altForScore(score(document.querySelector('.compScore').alt));
    }
    
    aWinner(parseInt(document.querySelector('.playerScore').alt), parseInt(document.querySelector('.compScore').alt)) 

}

function aWinner(pNumber, cNumber){
    if(pNumber == 5 || cNumber == 5){
        let question = `You lose!
        Retry?`;
        let btnTxt = 'Retry';
        if(pNumber > cNumber){
            question = `You Win!
            PlayAgain?`;

            btnTxt = 'Again'
        }

        const html = `<div id="end">
        <div class="end-items">
            <div class="endMessage">
                <p class="cause">${question}</p>
            </div>

            <div>
                <button class="playAgain">${btnTxt}</button>
            </div>
        </div>
    </div>`;

        const holdBody = document.body.innerHTML;
        document.body.innerHTML = html + holdBody;

        document.querySelector(".playAgain").addEventListener('click', e => {
            
            document.querySelector('#end').classList.toggle('close');
            document.querySelector('.close').addEventListener('animationend', e => {

                document.body.removeChild(document.querySelector('#end'));

                document.querySelector('.compSel').src = '';
                document.querySelector('.playerSel').src = '';

                document.querySelector('.choiceInfo').textContent = 'PICK A SIGN';

                document.querySelector('.playerScore').src = "./image/0.png";
                document.querySelector('.playerScore').alt = '0';

                document.querySelector('.compScore').src = "./image/0.png";
                document.querySelector('.compScore').alt = '0';

                game();
            })

        })
    }
}

function score(string){
    let number = parseInt(string);
    number++;
    if(number == 1){
        return "./image/1.png";
    }else if(number == 2){
        return "./image/2.png";
    }else if(number == 3){
        return "./image/3.png";
    }else if(number == 4){
        return "./image/4.png";
    }
    return "./image/5.png"; 
}

function altForScore(string){
    if(string.includes('1')){
        return '1';
    }else if(string.includes('2')){
        return '2';
    }else if(string.includes('3')){
        return '3';
    }else if(string.includes('4')){
        return '4';
    }
    return '5';
}

function computerSelection(){
    const pick = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random() * 3);
    return pick[randNum]; 
}

function imageSelection(signSelection){
    
    if(signSelection == "rock"){
        return './image/rock.png';
    
    }else if(signSelection == "paper"){
        return './image/paper.png';
    
    }else{return './image/scissors.png';}
}

function getResult(player, computer){
    if(player == computer){
        return "o";
    
        }else if(player == "scissors" && computer == "paper"){
            return true;
        }
        else if(player == "paper" && computer == "rock"){
            return true;
        }
        else if(player == "rock" && computer == "scissors"){
            return true;
        }else{
            return false;
        }
}

function rpsGame(playerSel, computerSel){
    let result = getResult(playerSel, computerSel);

    if(result == "o"){
        return "Draw!, same selection";
    
    }else if(result){
        return "you Win! " + playerSel + " beats " + computerSel;
        
    }else{
        return "you Lose! " + computerSel + " beats " + playerSel;
    }
}