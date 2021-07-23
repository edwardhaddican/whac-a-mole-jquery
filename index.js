// state
let initialState;

function buildInitialState() {

}


let gameState = {
  grid: [ 
  ],
  points: 0,
  gridSize: 3,
}


function makeGridSize(){
  let numOfCells = gameState.gridSize * gameState.gridSize
  for(let i =0; i < numOfCells; i++){
    gameState.grid.push({ 
      isUp: false,
      isCivilian: false
    },)
  }
}


function makeGrid(){
  for(let i = 0; i < gameState.grid.length; i++){
    const newCell = $("<div></div>").addClass("cell");
    $(".grid").append(newCell);
  }
}
makeGridSize()
makeGrid()

// render
function renderState() {

}

// // maybe a dozen or so helper functions for tiny pieces of the interface

// // listeners
// function onBoardClick() {
//   // update state, maybe with another dozen or so helper functions...

//   renderState() // show the user the new state
// }

// $('.board').on('click', onBoardClick); // etc

// // add to above
// function tick() {
//   // this is an incremental change that happens to the state every time you update...

//   renderState()
// }

// setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible

// // now you might have things like
// $(window).on('keydown', function (event) {
//   // here you might read which key was pressed and update the state accordingly
// })