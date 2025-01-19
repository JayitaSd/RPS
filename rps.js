let score ={
  wins:0,
  losses:0,
  ties:0
};

const savedscore = JSON.parse(localStorage.getItem('score'));
if(savedscore){
  score = savedscore;
}
updatescore();

function move(playermove){
  const computermove = cmpmove();
  const resultele = document.querySelector('.js-result');

  if(playermove === computermove){
    resultele.innerHTML = 'Tie';
    score.ties+=1;
  }
  else if(
    (playermove === 'rock' && computermove === 'scissors') ||
    (playermove === 'paper' && computermove === 'rock') ||
    (playermove === 'scissors' && computermove === 'paper')
  ){
    resultele.innerHTML = 'You Win';
    score.wins+=1;
  }
  else{
    resultele.innerHTML = 'You Lose';
    score.losses+=1;
  }

  const movesele = document.querySelector('.js-moves-chosen');
  movesele.innerHTML = `
    You
    <img src ="img/${playermove}-emoji.png" class="playmove">
    <img src ="img/${computermove}-emoji.png" class="playmove">
    Computer
  `;

  updatescore();
  localStorage.setItem('score', JSON.stringify(score));

}
function resetscore(){
  score ={
    wins: 0,
    losses: 0,
    ties: 0
  };
  updatescore();
  localStorage.removeItem('score');
}
function cmpmove(){
  const random = Math.random();
  let computermove;
  if(random<(1/3)){
    computermove = 'rock';
  }
  else if(random<(2/3)){
    computermove = 'paper';
  }
  else{
    computermove = 'scissors';
  }
  return computermove;
}

function updatescore(){
  document.querySelector('.js-score').
  innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
