const team = {
    _players: [
      {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    }, {
      firstName: 'Caleb',
      lastname: 'asa',
      age: 13
    }, {
      firstName: 'phino',
      lastName: 'comlan',
      age: 15
    }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      }, {
        opponent: 'ameno',
        teamPoints: 74,
        opponentPoints: 15
      }, {
        opponent: 'gola',
        teamPoints: 23,
        opponentPoints: 62
      }
    ],
    get players () {
      return this._players
    },
    get games () {
      return this._games
    },
    addPlayer (firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age,
      };
      this._players.push(player);
    },
    addGame (opponent, teamPoints, opponentPoints) {
      let game = {
        opponent,
        teamPoints,
        opponentPoints,
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  team.addGame('arsenal', 79, 70);
  team.addGame('Manchester united', 67, 50);
  team.addGame('PSG', 89, 41);
  
  console.log(team.games);