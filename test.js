function findChampions(players) {
  const sort = players.sort((a, b) => a.age - b.age || b.elo - a.elo);
  //console.log(sort);
  const champions = [];
  let maxElo = 0;

  for (const player of players) {
    if (player.elo > maxElo) {
      champions.push(player);
      maxElo = player.elo;
    } else if (
      champions.length > 0 &&
      champions[champions.length - 1].age === player.age &&
      champions[champions.length - 1].elo === player.elo
    ) {
      champions.push(player);
    }
  }

  return champions;
}

const players = [
  { name: "Player1", age: 50, elo: 2800 },
  { name: "Player2", age: 30, elo: 2600 },
  { name: "Player3", age: 18, elo: 260 },
  { name: "Player4", age: 22, elo: 2400 },
  { name: "Player5", age: 19, elo: 2500 },
  { name: "Player6", age: 30, elo: 2400 },
  { name: "Player7", age: 25, elo: 2600 },
  { name: "Player8", age: 21, elo: 2550 },
  { name: "Player9", age: 20, elo: 2600 },
  { name: "Player10", age: 35, elo: 2700 },
  { name: "Player11", age: 24, elo: 2600 },
  { name: "Player12", age: 25, elo: 2600 },
  { name: "Player13", age: 40, elo: 2000 },
  { name: "Player14", age: 18, elo: 2200 },
  { name: "Player15", age: 23, elo: 2300 },
  { name: "Player16", age: 40, elo: 2600 },
  { name: "Player17", age: 40, elo: 2700 },
  { name: "Player18", age: 20, elo: 2600 },
  { name: "Player19", age: 25, elo: 2600 },
  { name: "Player20", age: 30, elo: 2500 },
];
console.log(findChampions(players));
