import {Side} from "./side";

export class Cube {
  size: number;

  sides: number = 6;

  matrix = {};

  constructor() {
    this.size = 3;
  }

  moveRow(row: number) {
    console.log('moved row' + row);
  }

  moveColumn(column: number) {
    console.log('moved column' + column);
  }

  generateState() {
    this.matrix = {};
    for (let side = 0; side < this.sides; side++) {
      this.matrix[side] = new Side(this.size, side)
    }
  }

  // showSide(side: number) {
  //   this.getSide(side).showConsole();
  // }
  //
  // getSide(side: number): Side {
  //   return this.matrix[side]
  // }


}
