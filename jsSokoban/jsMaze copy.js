// const  map = [  
//     "  WWWWW ",  //0
//     "WWW   W ",  //1
//     "WO B  W ",  //2
//     "WWW BOW ",  //3
//     "WOWWB W ",  //4
//     "W W O WW",  //5
//     "WB XBBOW",  //6
//     "W   O  W",  //7
//     "WWWWWWWW"  //8
//   ];

const  map = [  
    "  WWWWW ",  //0
    "WWW   W ",  //1
    "WO    W ",  //2
    "WWW  OW ",  //3
    "WOWW  W ",  //4
    "W W O WW",  //5
    "W  O  OW",  //6
    "W   O  W",  //7
    "WWWWWWWW"  //8
  ];


let playerRow = 2;
let playerColumn = 2;
let playerImage = "images/chipdown.png";
let boxImage = "images/box.png"
let box0Row = 2;
let box0Column = 3;
let box1Row = 3;
let box1Column = 4;
let box2Row = 4;
let box2Column = 4;
let box3Row = 6;
let box3Column = 1;
let box4Row = 6;
let box4Column = 3;
let box5Row = 6;
let box5Column = 4;
let box6Row = 6;
let box6Column = 5;

createRows();
createPlayer(playerRow,playerColumn);
createBox(box0Row,box0Column,0);
createBox(box1Row,box1Column,1);
createBox(box2Row,box2Column,2);
createBox(box3Row,box3Column,3);
createBox(box4Row,box4Column,4);
createBox(box5Row,box5Column,5);
createBox(box6Row,box6Column,6);


document.addEventListener('keydown', playerDirections)
let mapPlace = document.getElementById("whereTheMapGoes")
let reset = document.getElementById("Reset")
reset.addEventListener("click", function reload(){
    window.location.reload()})

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

function createPlayer(horizontal, vertical) {
    let divId = "Row" + horizontal + " " + "Cell" + vertical;
    divElement = document.createElement("img");
    divElement.id = "playerToken";
    divElement.className = "playerToken";
    divElement.src = playerImage
    document.getElementById(divId).appendChild(divElement);


}

function createBox(horizontal, vertical, boxNumber) {
    let divId = "Row" + horizontal + " " + "Cell" + vertical;
    console.log(divId)
    divElement = document.createElement("img");
    let boxToken = "boxToken"+boxNumber
    divElement.id = boxToken;
    divElement.className = "boxToken";
    divElement.src = boxImage;
    document.getElementById(divId).appendChild(divElement);


}



function playerDirections(e) {
    if(e.code === "ArrowDown"||e.code === "ArrowUp"||e.code === "ArrowLeft"||e.code === "ArrowRight"){
        if ( e.code === "ArrowDown")    {
            console.log("down",playerRow,playerColumn)
            playerDown()}
        else if ( e.code === "ArrowUp")    {
            console.log("up",playerRow,playerColumn)
            playerUp()}
        else if ( e.code === "ArrowLeft")    {
            console.log("left",playerRow,playerColumn)
            playerLeft();}
        else if ( e.code === "ArrowRight")    {
            console.log("right",playerRow,playerColumn)
            playerRight()
        }}
        checkForWin()
}


function playerDown(){
    let playerRowCheck = playerRow+1;
    let playerColumnCheck = playerColumn;
    let blockRowCheck = playerRowCheck +1;
    let blockColumnCheck = playerColumnCheck;
    checkForObstaclesAndMove(playerRowCheck, playerColumnCheck,blockRowCheck,blockColumnCheck)
}
    



function playerUp(){
    let playerRowCheck = playerRow-1;
    let playerColumnCheck = playerColumn;
    let blockRowCheck = playerRowCheck -1;
    let blockColumnCheck = playerColumnCheck;
    checkForObstaclesAndMove(playerRowCheck, playerColumnCheck,blockRowCheck,blockColumnCheck)

}

function playerLeft(){
    let playerRowCheck = playerRow;
    let playerColumnCheck = playerColumn-1;
    let blockRowCheck = playerRowCheck;
    let blockColumnCheck = playerColumnCheck -1;
    checkForObstaclesAndMove(playerRowCheck, playerColumnCheck,blockRowCheck,blockColumnCheck)
}
function playerRight(){
    let playerRowCheck = playerRow;
    let playerColumnCheck = playerColumn+1;
    let blockRowCheck = playerRowCheck;
    let blockColumnCheck = playerColumnCheck +1;
    checkForObstaclesAndMove(playerRowCheck, playerColumnCheck,blockRowCheck,blockColumnCheck)
}
let wallChecker = "";
function checkForWall(playerRowCheck, playerColumnCheck) {
    wallChecker = map[playerRowCheck].charAt(playerColumnCheck);
    console.log(wallChecker)
   if (wallChecker === "W") {
       alert("Oof.")
       return wallChecker;
   }
   else {
       return wallChecker;
   }
}

function movePlayer(horizontal, vertical)   {
    let divId = "Row" + horizontal + " " + "Cell" + vertical;
    let player = document.getElementById("playerToken");
    document.getElementById(divId).appendChild(player);

}

function moveBox(boxToken, horizontal, vertical){
    let divId = "Row" + horizontal + " " + "Cell" + vertical;
    console.log(divId,boxToken)
    boxToken = document.getElementById(boxToken);
    document.getElementById(divId).appendChild(boxToken);
}

function checkForObstaclesAndMove(playerRowCheck, playerColumnCheck,blockRowCheck,blockColumnCheck){
    let playerCheckId = "Row" + playerRowCheck + " " + "Cell" + playerColumnCheck;
    let blockCheckId = "Row" + blockRowCheck + " " + "Cell" + blockColumnCheck;
    if(checkForWall(playerRowCheck,playerColumnCheck) === "W")   {
        return
    }
    else if(document.getElementById(playerCheckId).childElementCount === 1){
        if(checkForWall(blockRowCheck,blockColumnCheck) === "W"){
            console.log("wall")
            return
        }
        else if(document.getElementById(blockCheckId).childElementCount === 1)  {
            alert("Oof. Chip can't push two boxes at once.")
            return
        }
        else {let boxHere = (document.getElementById(playerCheckId).childNodes[0].id);
            console.log(boxHere)
            console.log(blockRowCheck,blockColumnCheck)
            moveBox(boxHere, blockRowCheck,blockColumnCheck)
        }

    }
    console.log("moving player")
    playerRow = playerRowCheck;
    playerColumn = playerColumnCheck
    movePlayer (playerRow, playerColumn);
}

const buttonArray =[
    "Row2 Cell1",
    "Row3 Cell5",
    "Row4 Cell1",
    "Row5 Cell4",
    "Row6 Cell3",
    "Row6 Cell6",
    "Row7 Cell4"
]

function checkForWin(){
    let winnerCount = 0;
    for(let i = 0; i < buttonArray.length; i++){
        if(document.getElementById(buttonArray[i]).childElementCount === 1 && document.getElementById(buttonArray[i]).childNodes[0].id !=="playerToken") {
            winnerCount ++;
        }
    }
    console.log("winnerCount is" + winnerCount)
    if(winnerCount === 7)    {
        alert("You Win!!! Play Again?")
        window.location.reload();
    }
}