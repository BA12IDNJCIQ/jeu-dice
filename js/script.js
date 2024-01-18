// globals variables
var global , round , playing , activePlayer ;


// 1 : la fonction pour initialiser le jeu
init()

function init()
{
    round = 0 ;
    global = [0 , 0] ;
    activePlayer = 0;
    playing = true ;
    document.getElementById('global-0').textContent = '0';
    document.getElementById('global-1').textContent = '0';
    document.getElementById('round-0').textContent = '0';
    document.getElementById('round-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#player-1').classList.add('active');
    

}


 
document.querySelector('.new').addEventListener("click" ,init);


// Roll dice
document.getElementById('roll').addEventListener("click" ,function() {
    if(playing){

   

    dice = Math.floor(Math.random() * 6) + 1;
    diceHTML = document.querySelector('.dice');
    diceHTML.src = 'imgs/dice-' + dice + '.png';
    diceHTML.style.display = 'block';

// add result to round score

    if (dice !== 1){
       round += dice; 
       document.querySelector('#round-' + activePlayer).textContent = round;


    }
    else {
       
        nextPlayer();
    }
}
});




// add the round score to global score
document.querySelector('#hold').addEventListener("click" , function() {
    if (playing)
{
    global[activePlayer] += round;
    document.querySelector('#global-' + activePlayer).textContent = global[activePlayer];
    document.querySelector('#round-' + activePlayer).textContent = '0';
    // mark the winner player after 100 points .
    if (global[activePlayer] >= 100)
    {
        document.querySelector(".player-name").textContent = 'WINNER';
        document.querySelector("#player-" + activePlayer).classList.add('winner');
        document.getElementById('round-0').textContent = '0';
        document.getElementById('round-1').textContent = '0';
        document.querySelector("#player-" + activePlayer).classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
        playing = false;

        init();


    }else {
        nextPlayer();
    }
    

}

});
function nextPlayer() {
    if (activePlayer === 0){
        activePlayer === 1;
    }
    else {
        activePlayer === 0;
    }
        round = 0;
        document.getElementById('round-0').textContent = '0';
        document.getElementById('round-1').textContent = '0';
        document.querySelector('.dice').style.display = 'none';
        // document.querySelector('.player-0').classList.toggle('active');
        // document.querySelector('.player-1').classList.toggle('active');

}




