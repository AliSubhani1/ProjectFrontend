let ScoreDolphinA = 96;
let ScoreDolphinB = 108;
let ScoreDolphinC = 89;
let ScoreKoalasA = 88;
let ScoreKoalasB = 91;
let ScoreKoalasC = 110;

let dolphinAvg = (ScoreDolphinA + ScoreDolphinB + ScoreDolphinC) / 3;
let KoalasAvg = (ScoreKoalasA + ScoreKoalasB + ScoreKoalasC) / 3;
if (dolphinAvg === KoalasAvg && dolphinAvg > 100) {
  console.log("It is a draw");
} else if (dolphinAvg > KoalasAvg && dolphinAvg > 100) {
  console.log("Dolphin is winner");
} else if (KoalasAvg > dolphinAvg && KoalasAvg > 100) {
  console.log("Koalas is winner.");
} else {
  console.log("score is less than 100");
}
