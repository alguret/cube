import {Side} from "./side";

export class Cube {
  rows: number;
  columns: number;

  sides: number = 6;

  matrix: object = {};

  constructor() {
    this.rows = 3;
    this.columns = 3;
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
      this.matrix[side] = new Side(this.rows, this.columns);
    }
  }


}
