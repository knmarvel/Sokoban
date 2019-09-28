function isSpotOpen (spotRowCoordinate, spotColumnCoordinate, pieceType, checkNumber)    {
    let isSpotOpen = 0;
    if(mapConversion[spotRowCoordinate][spotColumnCoordinate].floorOrWall === 0){
        if(checkNumber === 0){
        isSpotOpen = 1;}
        else if(isBox === 0)    {
            isSpotOpen = 1;}
        }
        return isSpotOpen;
    }

jsObjects.find(x => x[isPlayer] === 1)

