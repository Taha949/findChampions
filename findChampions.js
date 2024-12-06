import { testCases } from "./testCases.js";

function findChampions(players) {
  players.sort((a, b) => a.age - b.age || b.elo - a.elo);
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
console.log(findChampions(testCases));
