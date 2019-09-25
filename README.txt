Sokoban

Next, you will extend the maze game you created into a more complicated game, called Sokoban.

"The game is played on a board of squares, where each square is a floor or a wall. Some floor squares contain boxes, and some floor squares are marked as storage locations.

The player is confined to the board, and may move horizontally or vertically onto empty squares (never through walls or boxes). The player can also move into a box, which pushes it into the square beyond. Boxes may not be pushed into other boxes or walls, and they cannot be pulled. The number of boxes is equal to the number of storage locations. The puzzle is solved when all boxes are at storage locations." - from the Wikipedia article

Sokoban_ani.gif

The game shown in the animation above starts with the following board configuration:

    const  map = [  
      "  WWWWW ",  
      "WWW   W ",  
      "WOSB  W ",  
      "WWW BOW ",  
      "WOWWB W ",  
      "W W O WW",  
      "WB XBBOW",  
      "W   O  W",  
      "WWWWWWWW"  
    ];

As in the maze game you worked on previously, "W" is a wall, "S" is the player's starting position, and spaces are open floor. This map also uses three new characters:

    "O" is an initially empty storage location.
    "B" is the starting position of a box/crate.
    "X" is a storage location that starts with a box already on it.

Getting Started

Copy (or fork) your maze game from yesterday into a new repository. Do not use the same project repository.

Think about how you will represent the moving crates. Notice that both the moving crates and the moving player can be on top of either open floors or storage locations in the map. You may find it helpful to keep track of the moving items like the crates and the player separately from the static (unmoving) parts of the map (walls, floors, and storage locations).

    Display the storage locations and crates. 3 points
    Let the player push crates to new locations. 3 points
    Prevent the player from pushing a crate if there is an obstacle beyond it (a wall or another crate). 3 points
    Test for whether the player has won (all crates have been placed on top of storage locations). 1 point

Further study

Once you've gotten the basic game working, you may wish to add further maps. For example, here is a description of a more challenging map that takes many more moves to complete.

    const map = [  
       "    WWWWW          ",  
       "    W   W          ",  
       "    WB  W          ",  
       "  WWW  BWW         ",  
       "  W  B B W         ",  
       "WWW W WW W   WWWWWW",  
       "W   W WW WWWWW  OOW",  
       "W B  B          OOW",  
       "WWWWW WWW WSWW  OOW",  
       "    W     WWWWWWWWW",  
       "    WWWWWWW        "  
    ]

If you are curious, you may wish to take a look at the computer science research work from University of Alberta on solving sokoban puzzles.

 Sokoban
Sokoban
Criteria 	Ratings 	Pts
This criterion is linked to a Learning Outcome Display the storage locations and crates.
	
	
3.0 pts
This criterion is linked to a Learning Outcome Let the player push crates to new locations.
	
	
3.0 pts
This criterion is linked to a Learning Outcome Prevent the player from pushing a crate if there is an obstacle beyond it (a wall or another crate).
	
	
3.0 pts
This criterion is linked to a Learning Outcome Test for whether the player has won (all crates have been placed on top of storage locations).
	
	
1.0 pts
