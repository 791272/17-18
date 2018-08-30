
'use strict'

class Cell {
    constructor(game, location, direction) {
      this.game = game;
      this.loc = location;
      this.col = this.loc.x/game.colWidth;
      this.row = this.loc.y/game.colWidth;
      this.dir = direction;
      this.numSet = false;
      this.directions = ["↑", "→", "↓","←"]
    }

    render(){
     //  draw a rectangle at location
     if (game.grid[this.loc.x/game.colWidth][this.loc.y/game.colWidth].occupied === true && this.dir != -2){
       this.game.context.fillStyle="#2b2b2b";
     }else{
       this.game.context.fillStyle="#f9cec5";
     }
     this.game.context.strokeStyle="#001122";
     this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
    // this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
     if (game.grid[this.loc.x/25][this.loc.y/25].occupied === false){
       if (this.dir === -1){
        // this.game.context.fillStyle="black";
         this.game.context.fillStyle="#2b2b2b";
         //this.game.context.fillText("oof.", this.loc.x + 5, this.loc.y + 16);
       }else if (this.dir === -2){
         this.game.context.fillStyle="red";
         this.game.context.fillText("❎", this.loc.x + 8, this.loc.y + 16);
       }else{
         this.game.context.fillStyle="black";
         this.game.context.fillText("" + this.directions[this.dir-1] + "", this.loc.x + 8, this.loc.y + 16);
       }
     }
    }


}
