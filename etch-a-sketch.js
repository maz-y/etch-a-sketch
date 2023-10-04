let board = document.querySelector(".board")
let gridCount = 0

while (gridCount < 32){
  let square = document.createElement("div");
  square.style.backgroundColour = "blue";
  board.insertAdjacentElement("beforeend", square)


}