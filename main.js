var currentTurn = "X";
var x = [];
var o = [];
var xWins = 0;
var oWins = 0;

function restartGame() {
  $(".box").removeClass("O");
  $(".box").removeClass("X");
  $(".box").empty();
}

function checkForWin(currentPlayer) {
  if (
    $(".row1").children("." + currentPlayer).length === 3 ||
    $(".row2").children("." + currentPlayer).length === 3 ||
    $(".row3").children("." + currentPlayer).length === 3 ||
    $(".col1." + currentPlayer).length === 3 ||
    $(".col2." + currentPlayer).length === 3 ||
    $(".col3." + currentPlayer).length === 3 ||
    ($(".row1")
      .children(".col1")
      .hasClass(currentPlayer) &&
      $(".row2")
        .children(".col2")
        .hasClass(currentPlayer) &&
      $(".row3")
        .children(".col3")
        .hasClass(currentPlayer)) ||
    ($(".row1")
      .children(".col3")
      .hasClass(currentPlayer) &&
      $(".row2")
        .children(".col2")
        .hasClass(currentPlayer) &&
      $(".row3")
        .children(".col1")
        .hasClass(currentPlayer))
  ) {
    alert(currentPlayer + " wins");
    if (currentPlayer === "X") {
      xWins++;
      $("#x-wins-text").text(xWins);
    } else {
      oWins++;
      $("#o-wins-text").text(oWins);
    }
    restartGame();
  } else if (
    $(".row").children(".X").length + $(".row").children(".O").length ===
    9
  ) {
    restartGame();
  }
}

$(".box").click(function() {
  if (!$(this).text()) {
    $(this).text(currentTurn);
    $(this).addClass(currentTurn);
    if (currentTurn === "X") {
      x.push($(this).attr("data-box"));
      checkForWin(currentTurn);
      currentTurn = "O";
    } else {
      o.push($(this).attr("data-box"));
      checkForWin(currentTurn);
      currentTurn = "X";
    }
    $("#player").text(currentTurn);
  }
});

$("#restart").on("click", restartGame);
