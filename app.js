var scores, activePlayer, roundScore, gamePlaying, lastDice, winScore, winningScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function()
{           // anonymous function :- a func which do not have a name and can be called only once
      if (gamePlaying){
        //1.Random number
         var dice1 = Math.floor(Math.random() * 6)+1;
         var dice2 = Math.floor(Math.random() * 6)+1;
   
        //2.display the result 
        document.getElementById('dice-1').style.display="block"; 
        document.getElementById('dice-2').style.display="block";  // making a variable to not to write it again
        document.getElementById('dice-1').src = 'dice-'+ dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-'+ dice2 + '.png';
 
 
        //3. Update the round score i f it is not 0
   
        /* if(dice === 6 && lastDice === 6){
           scores[activePlayer]=0;
           document.querySelector("#score-" + activePlayer).textContent = 0;
           nextPlayer();
           }
         else if ( dice !== 1){
         //add score
           roundScore += dice;
           document.querySelector('#current-'+ activePlayer).textContent = roundScore;
         } else {
         //Next Player
          nextPlayer();
         }
      
         lastDice = dice;
       */
      if ( dice1 !== 1 && dice2 !== 1){
        //add score
          roundScore += dice1;
          roundScore += dice2;
          document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        } else {
        //Next Player
         nextPlayer();
        }
      }
   
});

document.querySelector('.btn-hold').addEventListener('click', function(){
      if(gamePlaying){
      // Add current score to global score
      
      scores [activePlayer] += roundScore;
    
      // Update the UI
      document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
      
      winScore=document.querySelector('.final-score').value;
      //undefined 0 null or " " are coerced to false
      //anything else are coerced to true
      if(winScore){
          winningScore= winScore;
      }else{
        winningScore=100;
      }
   
      //Check if the player won?
      if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = "!WINNER!"
        hideDice();
        //document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
        gamePlaying=false;
        }
       else{
            //next Player
             nextPlayer(); 
       } 
    }
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
    roundScore = 0 ;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    
    //document.querySelector('.dice').style.display='none';  
    hideDice();
}


document.querySelector('.btn-new').addEventListener('click',init);


function init() {

gamePlaying=true;  
scores = [0,0];
roundScore = 0;
activePlayer = 0;
//document.querySelector('.dice').style.display = 'none'; // use of querrySelector to change the css property

hideDice();
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent = "player 1";
document.getElementById('name-1').textContent = "player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

}

function hideDice(){
  document.getElementById('dice-1').style.display="none"; 
  document.getElementById('dice-2').style.display="none"; 
}
alert("Game Rules:- 1.On a turn, a player rolls the die repeatedly. The goal is to accumulate as many points as possible, adding up the numbers rolled on the die. 2.However, if a player rolls a 1, the player's turn is over and any points they have accumulated during this turn are forfeited. Rolling a 1 doesn't wipe out your entire score from previous turns, just the total earned during that particular roll. 3. A player can also choose to hold (stop rolling the die) if they do not want to take a chance of rolling a 1 and losing all of their points from this turn. If the player chooses to hold, all of the points rolled during that turn are added to his or her score. 4. When a player reaches a total of Win-Score or more points, the game ends and that player is the winner.");

/*
//dice = Math.floor(Math.random() * 6)+1;
//console.log(dice);

//document.querySelector('#current-'+ activePlayer).textContent = dice;  // setter
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';
*/
/*
// textContent also read data .
//var x = document.querySelector('#score-0').textContent; // getter
//alert(x);

//var y =document.querySelector('#score-0').innerHTML ; //getter
//alert(y);

*/

//function btn(){
//}

//btn(); // to call by us
//btn // to be called by eventListener