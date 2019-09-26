const  map = [  
    "  WWWWW ",  
    "WWW   W ",  
    "WO B  W ",  
    "WWW BOW ",  
    "WOWWB W ",  
    "W W O WW",  
    "WB OBBOW",  
    "W   O  W",  
    "WWWWWWWW"  
  ];

createRows();
let playerRow = 2;
let playerColumn = 2;
createPiece(playerRow,playerColumn,"player");
let box1Row = 2;
let box1Column = 3;
createPiece(box1Row,box1Column,"box1");
let box2Row = 3;
let box2Column = 4;
createPiece(box2Row,box2Column,"box2");
let box3Row = 6;
let box3Column = 1;
createPiece(box3Row,box3Column,"box3");
let box4Row = 6;
let box4Column = 3;
createPiece(box4Row,box4Column,"box4");
let box5Row = 6;
let box5Column = 4;
createPiece(box5Row,box5Column,"box5");
let box6Row = 6;
let box6Column = 5;
createPiece(box6Row,box6Column,"box6");


document.addEventListener('keydown', playerDirections)

function createRows(){
    for(let rowCounter = 0; rowCounter < map.length; rowCounter ++) {
        let divId = "row" + rowCounter;
      createDivElement(divId, "row"," ", "whereTheMapGoes")
      createCellValues(rowCounter, divId);
    }
}
function createCellValues(rowCounter, divId) {
    for(let cellCounter = 0; cellCounter < map[rowCounter].length; cellCounter++)   {
        let divCoordinates = "Row" + rowCounter +" " + "Cell" + cellCounter;
        let className2 = map[rowCounter].charAt(cellCounter);
        createDivElement(divCoordinates, "mazeCell", className2, divId)
    }
}

function createDivElement(divCoordinates, className, className2, parentDivId) {
    let divElement = document.createElement("div");
    divElement.id = divCoordinates;
    divElement.className = className +" "+ className2
    divElement.innerHTML = "";
    document.getElementById(parentDivId).appendChild(divElement);
    
    }

function createPiece(horizontal, vertical, pieceType) {
    let divId = "Row" + horizontal + " " + "Cell" + vertical;
    divElement = document.createElement("div");
    pieceName = pieceType + "Token"
    divElement.id = pieceName
    divElement.className = pieceName
    divElement.innerHTML = pieceName
    document.getElementById(divId).appendChild(divElement);


}



function playerDirections(e) {
    if ( e.code === "ArrowDown")    {
        console.log("down",playerRow,playerColumn)
        let playerRowCheck = playerRow+1;
        let playerColumnCheck = playerColumn;
        movePlayer(playerRowCheck, playerColumnCheck)}
    else if ( e.code === "ArrowUp")    {
        console.log("up",playerRow,playerColumn)
        let playerRowCheck = playerRow-1;
        let playerColumnCheck = playerColumn;
        movePlayer(playerRowCheck, playerColumnCheck)}
    else if ( e.code === "ArrowLeft")    {
        console.log("left",playerRow,playerColumn)
        let playerRowCheck = playerRow;
        let playerColumnCheck = playerColumn-1;
        movePlayer(playerRowCheck, playerColumnCheck)}
    else if ( e.code === "ArrowRight")    {
        console.log("right",playerRow,playerColumn)
        let playerRowCheck = playerRow;
        let playerColumnCheck = playerColumn+1;
        movePlayer(playerRowCheck, playerColumnCheck)
    }
}


function movePlayer(playerRowCheck, playerColumnCheck){
    if(checkForWallWin(playerRowCheck,playerColumnCheck) === "")   {
        playerRow = playerRowCheck;
        playerColumn = playerColumnCheck
        movePiece (playerRow, playerColumn, "player");
    }

}



let wallWinChecker = "";
function checkForWallWin(playerRowCheck, playerColumnCheck) {
    wallWinChecker = map[playerRowCheck].charAt(playerColumnCheck);
    console.log(wallWinChecker)
   if (wallWinChecker === "W" || wallWinChecker === "S") {
       alert("Oof.")
       return wallWinChecker;
   }
   else if(wallWinChecker === "F") {
       alert("You figured it out! Congratulations, you made it out of the maze! Click OK to start again!")
       window.location.reload()
   }
   else {
       wallWinChecker = "";
       return wallWinChecker;
   }
}

function movePiece(horizontal, vertical, pieceName)   {
    let divId = "Row" + horizontal + " " + "Cell" + vertical;
    let pieceNameToken = pieceName + "Token"
    let piece = document.getElementById(pieceNameToken);
    document.getElementById(divId).appendChild(piece);

}