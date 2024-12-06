
var winner = "Вы победили!";
var looser = "Проигрыш(";
var draw = "Ничья";
var playerWins = 0;
var computerWins = 0;

function getComputerChoice() {
    const massiv = ["камень", "ножницы", "бумага"];
    const random = Math.floor(Math.random() * massiv.length);
    const word = massiv[random];
    return(word);
}

function game(playerSelection, computerSelection) {
    if (playerSelection === "камень" && computerSelection === "ножницы") {
        playerWins++;
        return winner;
    }
    else if (playerSelection === "бумага" && computerSelection === "камень") {
        playerWins++;
        return winner;
    }
    else if (playerSelection === "ножницы" && computerSelection === "бумага") {
        playerWins++;
        return winner;
    }
    else if (playerSelection === computerSelection) {
        return draw;
    }
    else {
        computerWins++;
        return looser;
    }
}

function score() {
    document.getElementById('player').innerHTML = playerWins;
    document.getElementById('computer').innerHTML = computerWins;
}

// for(let i = 1; i < 5; i++){
const playerSelection = prompt("Введите свое значение");
const computerSelection = getComputerChoice();
const result = game(playerSelection, computerSelection);

const info = document.getElementById('info1');
info.innerHTML = result;



score();
// }

// const rock = document.getElementById('rock')
// const scis = document.getElementById('scis')
// const wrap = document.getElementById('wrapper')

// rock.addEventListener('click');
// scis.addEventListener('click');
// wrap.addEventListener('click');

// function getClick() {
//     if (rock === "ножницы") {
//         return playerSelection

//     }else if (scis === "ножницы"){
//         return playerSelection

//     }else if (wrap === "бумага"){
//         return playerSelection
//     } 
// }