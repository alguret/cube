import {Elem} from "./elem";

export class Side {
  row: number;
  col: number;

  map: any;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    this.generate();
  }

  generate() {
    for (let row = 0; row < this.row; row++) {
      for (let column = 0; column < this.col; column++) {
        this.map[row][column] = new Elem(row, column);
      }
    }
  }
}
