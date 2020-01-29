const randomDamage = _ => Math.floor(Math.random() * 10) + 1;
console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

// console.log(chooseOption("opt1", "opt2"));

const attackPlayer = function(health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}.`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}.`);
};

const isDead = health => {
  return health <= 0 ? true : false;
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      playerHealth = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(playerHealth)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Roniya", "Grant", 100, 100);
