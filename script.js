averageScore = (Score1, score2, score3) => (Score1 + score2 + score3) / 3;
//Test 1
DolphinsScore = averageScore(44, 23, 71);
KoalasScore = averageScore(65, 54, 49);
checkWinner = (DolphinAvgScore, KoalasAvgScore) => {
  if (
    DolphinAvgScore > KoalasAvgScore &&
    DolphinAvgScore >= KoalasAvgScore * 2
  ) {
    console.log(`Dolphin wins (${DolphinAvgScore}) vs (${KoalasAvgScore})`);
  } else if (
    KoalasAvgScore > DolphinAvgScore &&
    KoalasAvgScore >= DolphinAvgScore * 2
  ) {
    console.log(`Koalas wins (${KoalasAvgScore}) vs (${DolphinAvgScore})`);
  } else {
    console.log("no team wins");
  }
};
checkWinner(DolphinsScore, KoalasScore);
checkWinner(576, 111);

//Test 2
DolphinsScore = averageScore(85, 54, 41);
KoalasScore = averageScore(23, 34, 27);
checkWinner(DolphinsScore, KoalasScore);
