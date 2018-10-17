export class Elem {
  row: number;
  col: number;
  pos: number;

  num: number;
  // left: number = null;
  // right: number = null;
  // top: number = null;
  // bottom: number = null;
  // center: number = null;

  readonly POSITIONS = {
    center: 1,
    edge: 2,
    angle: 3
  };

  constructor(row: number, col: number, size, counter: number) {
    this.row = row;
    this.col = col;
    this.num = counter;

    if ((row === 0 || (row === size - 1)) && ((col === 0 || (col === size - 1)))) {
      this.pos = this.POSITIONS.angle;
    } else if ((row === 0 || (row === size - 1)) || ((col === 0 || (col === size - 1)))) {
      this.pos = this.POSITIONS.edge;
    } else {
      this.pos = this.POSITIONS.center;
    }

  }

}
