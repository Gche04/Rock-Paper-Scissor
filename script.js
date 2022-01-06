
function computerPlayer(){
    const pick = ["Rock", "Paper", "Scissors"];
    let randNum = Math.floor(Math.random() * 3);
    return pick[randNum]; 
}

function getResult(player, computer){
    if(!(player == "rock" || player == "paper" || player == "scissors")){
        return "x";
    }

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
    
    let player = playerSel.toLowerCase();
    let computer = computerSel.toLowerCase();
    let result = getResult(player, computer);

    if(result == "x"){
        return "error! check input";
    }

    if(result == "o"){
        return "Draw!, same selection";
    
        }else if(result){
            return "you Win! " + player + " beats " + computer;
        
        }else{
            return "you Lose! " + computer + " beats " + player;
        }
}

/*function rpsGame(playerSel, computerSel){
    
    let player = playerSel.toLowerCase();
    let computer = computerSel.toLowerCase();

    if (!(player == "rock" || player == "paper" || player == "scissors")){
        return "error! check input";
    }

    if (player == computer){
        return "Draw!, same selection";
    
        }else if(player == "scissors" && computer == "paper"){
            return "you Win! " + player + " beats " + computer;
        }
        else if(player == "paper" && computer == "rock"){
            return "you Win! " + player + " beats " + computer;
        }
        else if(player == "rock" && computer == "scissors"){
            return "you Win! " + player + " beats " + computer;
        }else{
            return "you Lose! " + computer + " beats " + player;
        }
}*/

function playerselection(){
    const sel = ["rock", "paper", "scissors"];
    let pick = parseInt(prompt("enter selection, 1, 2, 0r 3.\n 1- Rock.\n 2- Paper.\n 3- Scissors"));
    if(pick < 1 || pick > 3){
        return "eeeeeee";
    }
    return sel[pick -1];
}

function game(){
    let playerSc = 0;
    let compSc = 0;

    for(let i = 0; i < 6; i++){
        
        let p = playerselection();
        let c = computerPlayer();
        let outCome = rpsGame(p, c);

        console.log(outCome)

        if(outCome.includes("error")){
            i--;
        }else if(outCome.includes("Win")){
            playerSc++;
        }else if(outCome.includes("Lose")){
            compSc++;
        }
    }

    if(playerSc == compSc){
        console.log("its a DRAW!\nplayer total score = " + playerSc +"\n"+"computer total score = " + compSc)
    }else if(playerSc > compSc){
        console.log("you WIN!\nplayer total score = " + playerSc +"\n"+"computer total score = " + compSc)
    }else{
        console.log("you LOSE!\nplayer total score = " + playerSc +"\n"+"computer total score = " + compSc)
    }
}

game();
