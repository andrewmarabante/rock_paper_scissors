let playerchoice;
const choices= {rock:'rock',paper:'paper',scissors:'scissors'};
let wins=0,losses=0;
document.getElementById('rock').addEventListener('click', chooserock)
function chooserock(e)
{
    playerchoice = 'rock';
    compchoice=computerchoice(choices);
    document.getElementById('roundresult').innerHTML=round(playerchoice,compchoice)
    document.getElementById('playerscore').innerHTML=wins;
    document.getElementById('computerscore').innerHTML=losses;
    if(wins===5)
    {
        document.getElementById('game').innerHTML='You Win! Click to play again!'
        document.getElementById('game').style.color = 'blue'
        wins=0,losses=0;  
    }
    if(losses===5)
    {
        document.getElementById('game').innerHTML='You Lose! Click to play again!'
        document.getElementById('game').style.color = 'red'
        wins=0,losses=0;
    }
    if(losses===1 || wins===1){document.getElementById('game').innerHTML='First to 5 Wins!'}
}
document.getElementById('paper').addEventListener('click', choosepaper)
function choosepaper(e)
{
    playerchoice = 'paper';
    compchoice=computerchoice(choices);
    document.getElementById('roundresult').innerHTML=round(playerchoice,compchoice);
    document.getElementById('playerscore').innerHTML=wins;
    document.getElementById('computerscore').innerHTML=losses;
    if(wins===5)
    {
        document.getElementById('game').innerHTML='You Win! Click to play again!'
        document.getElementById('game').style.color = 'blue'
        wins=0,losses=0;  
    }
    if(losses===5)
    {
        document.getElementById('game').innerHTML='You Lose! Click to play again!'
        document.getElementById('game').style.color = 'red'
        wins=0,losses=0;
    }
    if(losses===1 || wins===1){document.getElementById('game').innerHTML='First to 5 Wins!'}
}
document.getElementById('scissors').addEventListener('click', choosescissors)

function choosescissors(e)
{
    playerchoice = 'scissors';
    compchoice=computerchoice(choices);
    document.getElementById('roundresult').innerHTML=round(playerchoice,compchoice)
    document.getElementById('playerscore').innerHTML=wins;
    document.getElementById('computerscore').innerHTML=losses;
    if(wins===5)
    {
        document.getElementById('game').innerHTML='You Win! Click to play again!'
        document.getElementById('game').style.color = 'blue'
        wins=0,losses=0;  
    }
    if(losses===5)
    {
        document.getElementById('game').innerHTML='You Lose! Click to play again!'
        document.getElementById('game').style.color = 'red'
        wins=0,losses=0;
    }
    if(losses===1 || wins===1){document.getElementById('game').innerHTML='First to 5 Wins!'}
}  

function computerchoice(choices)
{
    const keys=Object.keys(choices)
    return keys[Math.floor(Math.random() * keys.length)];
}
function round (playchoice, compchoice) 
    {
     if (playchoice === compchoice){return('Tie!')}
     else if (playchoice === 'rock'){
                                        if (compchoice === 'scissors'){wins++; return('Rock Beats Scissors!: You Win!')}
                                        else{losses++;return('Paper Beats Rock! You Lose!')}
                                    }
     else if(playchoice === 'paper'){
                                        if(compchoice === 'rock'){wins++;return('Paper Beats Rock! You Win')}
                                        else{losses++;return('Scissors Beats Paper! You Lose! ')}
                                    }
    else if(playchoice === 'scissors'){
                                        if (compchoice === 'paper'){wins++;return('Scissors Beats Paper! You Win!')}
                                        else{losses++;return('Rock Beats Scissors! You Lose!')}
                                    }
    else{return('Invalid Entry! Try Again!')}
    }
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
        currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
/*
const choices= {rock:'rock',paper:'paper',scissors:'scissors'}
let wins=0,losses=0;
 function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
    currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

    function round (playchoice, compchoice) 
    {
     if (playchoice === compchoice){console.log('Tie! :'+wins+' Wins, '+losses+'Losses')}
     else if (playchoice === 'rock'){
                                        if (compchoice === 'scissors'){wins++; console.log('Rock Beats Scissors!: '+wins+' Wins, '+losses+'Losses')}
                                        else{losses++;console.log('Paper Beats Rock!: '+wins+' Wins, '+losses+'Losses')}
                                    }
     else if(playchoice === 'paper'){
                                        if(compchoice === 'rock'){wins++;console.log('Paper Beats Rock!: '+wins+' Wins, '+losses+'Losses')}
                                        else{losses++;console.log('Scissors Beats Paper!: '+wins+' Wins, '+losses+'Losses')}
                                    }
    else if(playchoice === 'scissors'){
                                        if (compchoice === 'paper'){wins++;console.log('Scissors Beats Paper!: '+wins+' Wins, '+losses+'Losses')}
                                        else{losses++;console.log('Rock Beats Scissors!: '+wins+' Wins, '+losses+'Losses')}
                                    }
    else{console.log('Invalid Entry! Try Again!')}
    }
    function game()
{
do{
    let playerchoice= prompt('Choose Rock, Paper, or Scissors').toLowerCase()
    function computerchoice(choices)
{
    const keys=Object.keys(choices)
    return keys[Math.floor(Math.random() * keys.length)];
//Understanding the code:
//So, I created 3 choices of rock, paper, or scissors. 
//This then gets put into the function 'getcomputer choice'
//random() generates a #between 0 and 1 somewhat uniformly 
//we multiply this by the amt of keys we have.. in this case 3
//Thus: we will be returned a number from 0-3 somewhat uniformly
//taking the floor of this will give us 0,1,or 2
//which correlate to the index of the keys! hencekeys[]
} 
    round(playerchoice, computerchoice(choices))
    sleep(3000)
}while(wins<3 && losses<3)
if(wins === 3){return 'You Win!'}
else{return 'You Lose!'}
}

*/
