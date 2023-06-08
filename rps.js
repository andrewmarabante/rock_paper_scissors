const choices= {rock:'rock',paper:'paper',scissors:'scissors'}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
    currentDate = Date.now();
    } while (currentDate - date < milliseconds);}
function game()
{
let wins=0,losses=0
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
else{console.log('Invalid Entry! Try Again!')}}
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
console.log(game())