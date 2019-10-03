
//{coordinates: [,], floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0},
const playerToken = document.createElement("img")
playerToken.src = 'images/chipdown.png'
const boxToken1 = document.createElement("img")
boxToken1.src = 'images/box.png'
const boxToken7 = document.createElement("img")
boxToken7.src = 'images/box.png'
const boxToken2 = document.createElement("img")
boxToken2.src = 'images/box.png'
const boxToken3 = document.createElement("img")
boxToken3.src = 'images/box.png'
const boxToken4 = document.createElement("img")
boxToken4.src = 'images/box.png'
const boxToken5 = document.createElement("img")
boxToken5.src = 'images/box.png'
const boxToken6 = document.createElement("img")
boxToken6.src = 'images/box.png'

let playerRow = ""
let playerColumn = ""
let playerCoordinates = ""

const row0column0 = { //    "  WWWWW ",
    rowCoordinate: 0, columnCoordinate: 0, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0, type: 0,
}
const row0column1 = {//" WWWWW "
    rowCoordinate: 0, columnCoordinate: 1, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row0column2 = {//"WWWWW "
    rowCoordinate: 0, columnCoordinate: 2, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row0column3 = {//"WWWW "
    rowCoordinate: 0, columnCoordinate: 3, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row0column4 = {//"WWW "
    rowCoordinate: 0, columnCoordinate: 4, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row0column5 = {//"WW "
    rowCoordinate: 0, columnCoordinate: 5, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row0column6 = {//"W "
    rowCoordinate: 0, columnCoordinate: 6, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row0column7 = {//" "
    rowCoordinate: 0, columnCoordinate: 7, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}

const row1column0 = { //    "WWW   W ",
    rowCoordinate: 1, columnCoordinate: 0, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row1column1 = {//    "WW   W "
    rowCoordinate: 0, columnCoordinate: 1, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row1column2 = {//    "W   W "
    rowCoordinate: 1, columnCoordinate: 2, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row1column3 = {//    "   W "
    rowCoordinate: 1, columnCoordinate: 3, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row1column4 = {//    "  W "
    rowCoordinate: 1, columnCoordinate: 4, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row1column5 = {//    " W "
    rowCoordinate: 1, columnCoordinate: 5, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row1column6 = {//    "W "
    rowCoordinate: 0, columnCoordinate: 6, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row1column7 = {//    " "
    rowCoordinate: 1, columnCoordinate: 7, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}


const row2column0 = {//    "WOSB  W ",  //2
    rowCoordinate: 2, columnCoordinate: 0, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row2column1 = {//OSB  W "
    rowCoordinate: 2, columnCoordinate: 1, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 1,type: 0,
}
const row2column2 = {//SB  W "
    rowCoordinate: 2, columnCoordinate: 2, floorOrWall: 0, isPlayer: 1, isBox: 0, isButton: 0,type: 0,
}
const row2column3 = {//B  W "
    rowCoordinate: 2, columnCoordinate: 3, floorOrWall: 0, isPlayer: 0, isBox: 1, isButton: 0,type: 0,
}
const row2column4 = {//  W "
    rowCoordinate: 2, columnCoordinate: 4, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row2column5 = {// W "
    rowCoordinate: 2, columnCoordinate: 5, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row2column6 = {//W "
    rowCoordinate: 2, columnCoordinate: 6, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row2column7 = {// "
    rowCoordinate: 2, columnCoordinate: 7, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}

const row3column0 = {//    "WWW BOW ",  //3
    rowCoordinate: 3, columnCoordinate: 0, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row3column1 = {//WW BOW "
    rowCoordinate: 3, columnCoordinate: 1, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row3column2 = {//W BOW "
    rowCoordinate: 3, columnCoordinate: 2, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row3column3 = {// BOW "
    rowCoordinate: 3, columnCoordinate: 3, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row3column4 = {//BOW "
    rowCoordinate: 3, columnCoordinate: 4, floorOrWall: 0, isPlayer: 0, isBox: 2, isButton: 0,type: 0,
}
const row3column5 = {//OW "
    rowCoordinate: 3, columnCoordinate: 5, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 1,type: 0,
}
const row3column6 = {//W "
    rowCoordinate: 3, columnCoordinate: 6, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row3column7 = {// "
    rowCoordinate: 3, columnCoordinate: 7, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}

const row4column0 = {//    "WOWWB W ",  //4
    rowCoordinate: 4, columnCoordinate: 0, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row4column1 = {//OWWB W "
    rowCoordinate: 4, columnCoordinate: 1, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 1,type: 0,
}
const row4column2 = {//WWB W "
    rowCoordinate: 4, columnCoordinate: 2, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row4column3 = {//WB W "
    rowCoordinate: 4, columnCoordinate: 3, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row4column4 = {//B W "
    rowCoordinate: 4, columnCoordinate: 4, floorOrWall: 0, isPlayer: 0, isBox: 3, isButton: 0,type: 0,
}
const row4column5 = {// W "
    rowCoordinate: 4, columnCoordinate: 5, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row4column6 = {//W "
    rowCoordinate: 4, columnCoordinate: 6, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row4column7 = {// "
    rowCoordinate: 4, columnCoordinate: 7, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}

const row5column0 = {//    "W W O WW",  //5
    rowCoordinate: 5, columnCoordinate: 0, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row5column1 = {// W O WW"
    rowCoordinate: 5, columnCoordinate: 1, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row5column2 = {//W O WW"
    rowCoordinate: 5, columnCoordinate: 2, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row5column3 = {// O WW"
    rowCoordinate: 5, columnCoordinate: 3, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row5column4 = {//O WW"
    rowCoordinate: 5, columnCoordinate: 4, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 1,type: 0,
}
const row5column5 = {// WW"
    rowCoordinate: 5, columnCoordinate: 5, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row5column6 = {//WW"
    rowCoordinate: 5, columnCoordinate: 6, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row5column7 = {//W"
    rowCoordinate: 5, columnCoordinate: 7, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}

const row6column0 = {//    "WB XBBOW",  //6
    rowCoordinate: 6, columnCoordinate: 0, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row6column1 = {//B XBBOW"
    rowCoordinate: 6, columnCoordinate: 1, floorOrWall: 0, isPlayer: 0, isBox: 4, isButton: 0,type: 0,
}
const row6column2 = {// XBBOW"
    rowCoordinate: 6, columnCoordinate: 2, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row6column3 = {//XBBOW"
    rowCoordinate: 6, columnCoordinate: 3, floorOrWall: 0, isPlayer: 0, isBox: 5, isButton: 1,type: 0,
}
const row6column4 = {//BBOW"
    rowCoordinate: 6, columnCoordinate: 4, floorOrWall: 0, isPlayer: 0, isBox: 6, isButton: 0,type: 0,
}
const row6column5 = {//BOW"
    rowCoordinate: 6, columnCoordinate: 5, floorOrWall: 0, isPlayer: 0, isBox: 7, isButton: 0,type: 0,
}
const row6column6 = {//OW"
    rowCoordinate: 6, columnCoordinate: 6, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 1,type: 0,
}
const row6column7 = {//W"
    rowCoordinate: 6, columnCoordinate: 7, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}

const row7column0 = {//    "W   O  W",
    rowCoordinate: 7, columnCoordinate: 0, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row7column1 = {//   O  W"
    rowCoordinate: 7, columnCoordinate: 1, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row7column2 = {//  O  W"
    rowCoordinate: 7, columnCoordinate: 2, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row7column3 = {// O  W"
    rowCoordinate: 7, columnCoordinate: 3, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row7column4 = {//O  W"
    rowCoordinate: 7, columnCoordinate: 4, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 1,type: 0,
}
const row7column5 = {//  W"
    rowCoordinate: 7, columnCoordinate: 5, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row7column6 = {// W"
    rowCoordinate: 7, columnCoordinate: 6, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row7column7 = {//W"
    rowCoordinate: 7, columnCoordinate: 7, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}

const row8column0 = {//"WWWWWWWW"
    rowCoordinate: 8, columnCoordinate: 0, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row8column1 = {//WWWWWWW"
    rowCoordinate: 8, columnCoordinate: 1, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row8column2 = {//WWWWWW"
    rowCoordinate: 8, columnCoordinate: 2, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row8column3 = {//WWWWW"
    rowCoordinate: 8, columnCoordinate: 3, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row8column4 = {//WWWW"
    rowCoordinate: 8, columnCoordinate: 4, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row8column5 = {//WWW"
    rowCoordinate: 8, columnCoordinate: 5, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row8column6 = {//WW"
    rowCoordinate: 8, columnCoordinate: 6, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row8column7 = {//W"
    rowCoordinate: 8, columnCoordinate: 7, floorOrWall: 1, isPlayer: 0, isBox: 0, isButton: 0,type: 0,
}
const row9column0 = {
    rowCoordinate: 9, columnCoordinate: 0, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 1,power:0,
}
const row9column1 = {
    rowCoordinate: 9, columnCoordinate: 1, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 1,power:0,
}
const row9column2 = {
    rowCoordinate: 9, columnCoordinate: 2, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 1,power:0,
}
const row9column3 = {
    rowCoordinate: 9, columnCoordinate: 3, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 1,power:0,
}
const row9column4 = {
    rowCoordinate: 9, columnCoordinate: 4, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 1,power:0,
}
const row9column5 = {
    rowCoordinate: 9, columnCoordinate: 5, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 1,power:0,
}
const row9column6 = {
    rowCoordinate: 9, columnCoordinate: 6, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,type: 1,power:0,
}

const row0 = [
    row0column0,
    row0column1,
    row0column2,
    row0column3,
    row0column4,
    row0column5,
    row0column6,
    row0column7]
const row1 = [
       row1column0,
        row1column1,
        row1column2,
        row1column3,
        row1column4,
        row1column5,
        row1column6,
        row1column7

    ]
const row2 = [
    row2column0,
    row2column1,
    row2column2,
    row2column3,
    row2column4,
    row2column5,
    row2column6,
    row2column7,
]
const row3 = [
    
        row3column0,
        row3column1,
        row3column2,
        row3column3,
        row3column4,
        row3column5,
        row3column6,
        row3column7,
    
    
]
const row4 = [
    
        row4column0,
        row4column1,
        row4column2,
        row4column3,
        row4column4,
        row4column5,
        row4column6,
        row4column7,
    
]
const row5 = [
    
        row5column0,
        row5column1,
        row5column2,
        row5column3,
        row5column4,
        row5column5,
        row5column6,
        row5column7,
    
    
]
const row6 = [
    
        row6column0,
        row6column1,
        row6column2,
        row6column3,
        row6column4,
        row6column5,
        row6column6,
        row6column7,
    
    
]
const row7 = [
    
        row7column0,
        row7column1,
        row7column2,
        row7column3,
        row7column4,
        row7column5,
        row7column6,
        row7column7,
    
    
]
const row8 = [
    
        row8column0,
        row8column1,
        row8column2,
        row8column3,
        row8column4,
        row8column5,
        row8column6,
        row8column7
]
const row9 =  [   
    row9column0,
    row9column1,
    row9column2,
    row9column3,
    row9column4,
    row9column5,
    row9column6]

const mapConversion = [
        row0,
        row1,
        row2,
        row3,
        row4,
        row5,
        row6,
        row7,
        row8,
        row9,
]
console.log(mapConversion)

const  map = [  
    "  WWWWW ",  //0
    "WWW   W ",  //1
    "WOSB  W ",  //2
    "WWW BOW ",  //3
    "WOWWB W ",  //4
    "W W O WW",  //5
    "WB XBBOW",  //6
    "W   O  W",  //7
    "WWWWWWWW"  //8
  ];

  function transcribeMap(){
    let numberOfLights = 0;
    for(let rowIndex = 0; rowIndex < mapConversion.length; rowIndex ++) {
        let rowNumber = "row" + rowIndex;
        let rowDiv = document.createElement("div");
        rowDiv.id = rowNumber;
        rowDiv.className = "row";
        document.getElementById("whereTheMapGoes").appendChild(rowDiv);
        
        for(let columnIndex = 0; columnIndex < mapConversion[rowIndex].length; columnIndex++){
            let cellNumber = rowIndex +"." + columnIndex;
            let cellDiv = document.createElement("div");
            cellDiv.id = cellNumber;
            buildingClassName = "mazeCell"
            if(mapConversion[rowIndex][columnIndex].floorOrWall === 1)  {
                buildingClassName = buildingClassName + " W"
            }
            if(mapConversion[rowIndex][columnIndex].isButton === 1)  {
                buildingClassName = buildingClassName + " O"
            }
            
            if(mapConversion[rowIndex][columnIndex].type === 1) {
                buildingClassName = "lightOff"
            }
            if(mapConversion[rowIndex][columnIndex].isButton >= 1 && mapConversion[rowIndex][columnIndex].isBox > 0){
                numberOfLights++; console.log("number of lights is" + numberOfLights);
            }
 
            cellDiv.className = buildingClassName;
            document.getElementById(rowNumber).appendChild(cellDiv);
            if(mapConversion[rowIndex][columnIndex].isPlayer === 1)  {
                drawPiece(rowIndex,columnIndex, playerToken)
                playerRow = rowIndex
                playerColumn = columnIndex
                playerCoordinates = "row" + rowIndex + "column" + columnIndex
            }
            if(mapConversion[rowIndex][columnIndex].isBox === 1)  {
                drawPiece(rowIndex,columnIndex, boxToken1)
            }
            if(mapConversion[rowIndex][columnIndex].isBox === 2)  {
                drawPiece(rowIndex,columnIndex, boxToken2)
            }
            if(mapConversion[rowIndex][columnIndex].isBox === 3)  {
                drawPiece(rowIndex,columnIndex, boxToken3)
            }
            if(mapConversion[rowIndex][columnIndex].isBox === 4)  {
                drawPiece(rowIndex,columnIndex, boxToken4)
            }
            if(mapConversion[rowIndex][columnIndex].isBox === 5)  {
                drawPiece(rowIndex,columnIndex, boxToken5)
            }
            if(mapConversion[rowIndex][columnIndex].isBox === 6)  {
                drawPiece(rowIndex,columnIndex, boxToken6)
            }
            if(mapConversion[rowIndex][columnIndex].isBox === 7)  {
                drawPiece(rowIndex,columnIndex, boxToken7)
            }

        }
        
        console.log(numberOfLights); lightSwitch(numberOfLights)
        
//rowCoordinate: 7, columnCoordinate: 2, floorOrWall: 0, isPlayer: 0, isBox: 0, isButton: 0,
    }
}

document.onload = transcribeMap();


function drawPiece(row, column,pieceType){
    let cellDivId = row +"." + column;
    document.getElementById(cellDivId).appendChild(pieceType)
}

function lightSwitch(numberOfLights)  {
    for(let lightColumnIndex = 0; lightColumnIndex < numberOfLights; lightColumnIndex++)  {
        if(mapConversion[9][lightColumnIndex].power === 0)  {
            mapConversion[9][lightColumnIndex].power = 1
            let lightCellId = 9 + "." +lightColumnIndex;
            console.log("lightCellId = "+lightCellId)
            document.getElementById(lightCellId).className = "lightOn"
        }
    }
    for(let lightColumnIndex = row9.length-1; lightColumnIndex >= numberOfLights; lightColumnIndex--)   {
        if(mapConversion[9][lightColumnIndex].power === 1)  {
            mapConversion[9][lightColumnIndex].power = 0
            let lightCellId = 9 + "." +lightColumnIndex;
            document.getElementById(lightCellId).className = "lightOff"
        }
    }
}






function movePlayerOnMap(playerRow, playerColumn, direction){
    let playerRowCheck = playerRow;
    let playerColumnCheck = playerColumn;
    let nextRowCheck = ""
    let nextColumnCheck = ""
    let yetAnotherRowCheck = ""
    let yetAnotherColumnCheck = ""
    playerCoordinates = "row"+playerRow+"column"+playerColumn
    if(direction === "ArrowUp")  {
        playerRowCheck = playerRowCheck - 1
        nextRowCheck = playerRowCheck - 1
        nextColumnCheck = playerColumn
        yetAnotherRowCheck = nextRowCheck - 1
        yetAnotherColumnCheck = nextColumnCheck
    }
    if(direction === "ArrowDown"){
        playerRowCheck = playerRowCheck + 1
        nextRowCheck = playerRowCheck + 1
        nextColumnCheck = playerColumn
        
    }
    if(direction === "ArrowLeft")  {
        playerColumnCheck = playerColumnCheck - 1
        nextRowCheck = playerRowCheck
        nextColumnCheck = playerColumn - 1
        yetAnotherRowCheck = nextRowCheck 
        yetAnotherColumnCheck = nextColumnCheck - 1
    }
    if(direction === "ArrowRight"){
        playerColumnCheck = playerColumnCheck + 1
        nextRowCheck = playerRowCheck
        nextColumnCheck = playerColumn +1
        yetAnotherRowCheck = nextRowCheck 
        yetAnotherColumnCheck = nextColumnCheck + 1
    }
    if (isSpotOpen(playerRowCheck, playerColumnCheck, 0) === 1) {
        if(mapConversion[nextRowCheck][nextColumnCheck].isBox !== 0){
            if(isSpotOpen(yetAnotherRowCheck, yetAnotherColumnCheck, 1)=== 1)   {
                let boxNumber = mapConversion[nextRowCheck][nextColumnCheck].isBox;
                mapConversion[nextRowCheck][nextColumnCheck].isBox = 0
                mapConversion[yetAnotherRowCheck][yetAnotherColumnCheck].isBox = boxNumber;
            } else{alert("Oof. Chip can't push two blocks at the same time.") 
                return}
            

        }
        mapConversion[playerRowCheck][playerColumnCheck].isPlayer = 1
        mapConversion[playerRow][playerColumn].isPlayer = 0
        playerRow = playerRowCheck;
        playerColumn = playerColumnCheck;
        document.getElementById("whereTheMapGoes").innerHTML = "";
        transcribeMap();
        lightSwitch();}

    else{ alert("Oof")
    return}
}

function playerDirections(e) {
    console.log(e.code)
    if(e.code === "ArrowUp" || e.code === "ArrowRight" || e.code === "ArrowDown" || e.code === "ArrowLeft")
    movePlayerOnMap(playerRow, playerColumn, e.code)
}

function isSpotOpen (spotRowCoordinate, spotColumnCoordinate, checkNumber)    {
    let isSpotOpen = 0;
    if(mapConversion[spotRowCoordinate][spotColumnCoordinate].floorOrWall === 0){
        if(checkNumber === 0){
        isSpotOpen = 1;}
        else if(mapConversion[spotRowCoordinate][spotColumnCoordinate].isBox === 0)    {
            isSpotOpen = 1;}
        }
        return isSpotOpen;
    }
    document.addEventListener('keydown', playerDirections)