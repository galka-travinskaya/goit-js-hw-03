'use strict'

//https://github.com/Venikeee1/group-23/tree/master/lesson-2

/* Mortal combat game */

/*
1) run() - запускает игру
2) fight() - игроки дерутся
3) greetWinner() - попреветствовать победителя
4) logPlayersHit() - показывать обмен ударами
*/

const audio = document.querySelector('audio');

const playerFactory = (characterName) => {
  // массив персонажей мортал комбата
  const mortalCombatCharacters = [
    {
      name: 'Motaro',
      damage: 95,
      health: 500,
      icon: '👿',
      missChance: 0.05,
    },
    {
      name: 'Liu Kang',
      damage: 85,
      health: 400,
      icon: '👦',
      missChance: 0.35,
    },
    {
      name: 'Raiden',
      damage: 100,
      health: 550,
      icon: '👨‍🦳',
      missChance: 0.15,
    },
    {
      name: 'Sindel',
      damage: 90,
      health: 520,
      icon: '👩‍🦳',
      missChance: 0.25,
    },
    {
      name: 'Subzero',
      damage: 100,
      health: 540,
      icon: '🥶',
      missChance: 0.15,
    },
  ]

  let result;

  for (let character of mortalCombatCharacters) {
    if(character.name === characterName) {
      result = character;
      return result;
    }
  }
  // более короткая запись нахождения персонажа по имени
  // return mortalCombatCharacters.find(character => character.name === characterName);
}

const game = {
  firstPlayer: null,
  secondPlayer: null,
  addFirstPlayer(player) {
    this.firstPlayer = player;
  },

  addSecondPlayer(player) {
    this.secondPlayer = player;
  },

  fight() {
    let {
      health: firstPlayerHealth,
      damage: firstPlayerDamage
    } = this.firstPlayer;
    // аналог
    // let firstPlayerHealth = this.firstPlayer.health;
    // let firstPlayerDamage = this.firstPlayer.damage;

    let { health, damage } = this.firstPlayer;
    // аналог
    // let health = this.firstPlayer.health;
    // let damage = this.firstPlayer.damage;

    let {
      health: secondPlayerHealth,
      damage: secondPlayerDamage
    } = this.secondPlayer;

    while(firstPlayerHealth > 0 && secondPlayerHealth > 0) {
      firstPlayerHealth = firstPlayerHealth - secondPlayerDamage;
      secondPlayerHealth = secondPlayerHealth - firstPlayerDamage;

      this.logPlayersHit({
        damage: firstPlayerDamage,
        health: secondPlayerHealth,
        icon: this.firstPlayer.icon,
        name: this.firstPlayer.name
      })

      this.logPlayersHit({
        damage: secondPlayerDamage,
        health: firstPlayerHealth,
        icon: this.secondPlayer.icon,
        name: this.secondPlayer.name
      })

      if(firstPlayerHealth <= 0) {
        this.greetWinner(this.secondPlayer);
      }

      if(secondPlayerHealth <= 0) {
        this.greetWinner(this.firstPlayer);
      }
    }
  },

  greetWinner(player) {
    const { icon, name} = player;
    console.log(`🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈`);
    console.log(`⭐🎈🏆  ${icon} ${name} wins  🏆🎈⭐`);
    console.log(`🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈`);
  },

  logPlayersHit({ name, health, icon, damage}) {
    console.log(`Игрок ${icon}${name} 🤜💨(${damage}). У противника осталось %c${health}`, 'color: red;');
  },

  run() {
    // стандартный подход
    // this.fight();

    // С озвучкой
    audio.play();
    setTimeout(() => {
      this.fight();
    }, 1200);
  },
}

// const firstPlayerCharacterName = prompt('введите имя первого персонажа');
// const secondPlayerCharacterName = prompt('введите имя второго персонажа');

// const firstPlayer = playerFactory(firstPlayerCharacterName);
// const secondPlayer = playerFactory(firstPlayerCharacterName);
const firstPlayer = playerFactory('Motaro');
const secondPlayer = playerFactory('Subzero');

game.addFirstPlayer(firstPlayer);
game.addSecondPlayer(secondPlayer);
game.run();