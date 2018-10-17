import {Elem} from "./elem";
import {ISideStructure} from "./iside-structure";
import {ISideMove} from "./iside-move";

export class Side implements ISideMove {
  size: number;
  counter: number;
  map = {};

  constructor(size: number, counter: number) {
    this.size = size;
    this.counter = counter;
    this.generate();
  }

  generate() {
    for (let row: number = 0; row < this.size; row++) {
      this.map[row] = {};
      for (let column: number = 0; column < this.size; column++) {
        this.map[row][column] = new Elem(row, column, this.size, Math.floor(Math.random() * (5 + 1)));
      }
    }
  }

  showConsole(): void {
    console.log('----------');
    for (let row: number = 0; row < this.size; row++) {
      let rowArr = [];
      for (let column: number = 0; column < this.size; column++) {
        let elem: Elem = this.map[row][column];
        rowArr.push(elem.pos + ':' + elem.num);
      }

      console.log(rowArr.join(' | '));
      console.log('----------');
    }
  }
/*

  //игральная кость (dice)
  // суммы противоположных граней равны. В нашем случае всегда 5.
  getBack(): ISideStructure {
    return 5 - this.counter;
  }

  getBottom(): ISideStructure {
    switch (this.counter) {
      case 0:
        return 3;
    }
  }

  getLeft(): ISideStructure {
    switch (this.counter) {
      case 0:
        return 1;
    }
  }

  getRight(): ISideStructure {
    switch (this.counter) {
      case 0:
        return 4;
    }
  }

  getTop(): ISideStructure {
    switch (this.counter) {
      case 1:
        return 2;
    }
  }*/

  moveFull(): void {
    for (let row: number = 0; row < this.size; row++) {
      //first iter
      let newMap = {};
      // = Object.assign({}, this.map);
      newMap[0] = {};
      newMap[0][0] = this.map[2][2];
      newMap[0][1] = this.map[2][1];
      newMap[0][2] = this.map[2][0];

      //scnd
      newMap[1] = {};
      newMap[1][0] = this.map[1][2];
      newMap[1][1] = this.map[1][1];
      newMap[1][2] = this.map[1][0];

      newMap[2] = {};
      newMap[2][0] = this.map[0][2];
      newMap[2][1] = this.map[0][1];
      newMap[2][2] = this.map[0][0];

      this.map = newMap;

      // let rowArr = [];
      // for (let column: number = 0; column < this.size; column++) {
      //   const firstPart = ((this.size - row) < (this.size / 2));
      //   this.map[row][column] = this.map[]
      //   // let elem: Elem = this.map[row][column];
      //   // rowArr.push(elem.pos + ':' + elem.num);
      // }
    }
  }

  moveLeft(): void {
    for (let row: number = 0; row < this.size; row++) {
      //first iter
      let newMap = {};
      // = Object.assign({}, this.map);
      newMap[0] = {};
      newMap[0][0] = this.map[0][2];
      newMap[0][1] = this.map[1][2];
      newMap[0][2] = this.map[2][2];

      //scnd
      newMap[1] = {};
      newMap[1][0] = this.map[0][1];
      newMap[1][1] = this.map[1][1];
      newMap[1][2] = this.map[2][1];

      newMap[2] = {};
      newMap[2][0] = this.map[0][0];
      newMap[2][1] = this.map[2][0];
      newMap[2][2] = this.map[2][0];

      this.map = newMap;

      // let rowArr = [];
      // for (let column: number = 0; column < this.size; column++) {
      //   const firstPart = ((this.size - row) < (this.size / 2));
      //   this.map[row][column] = this.map[]
      //   // let elem: Elem = this.map[row][column];
      //   // rowArr.push(elem.pos + ':' + elem.num);
      // }
    }
  }

  moveRight(): void {
    for (let row: number = 0; row < this.size; row++) {
      //first iter
      let newMap = {};
      // = Object.assign({}, this.map);
      newMap[0] = {};
      newMap[0][0] = this.map[2][0];
      newMap[0][1] = this.map[1][0];
      newMap[0][2] = this.map[0][0];

      //scnd
      newMap[1] = {};
      newMap[1][0] = this.map[2][1];
      newMap[1][1] = this.map[1][1];
      newMap[1][2] = this.map[0][1];

      newMap[2] = {};
      newMap[2][0] = this.map[2][2];
      newMap[2][1] = this.map[1][2];
      newMap[2][2] = this.map[0][2];

      this.map = newMap;

      // let rowArr = [];
      // for (let column: number = 0; column < this.size; column++) {
      //   const firstPart = ((this.size - row) < (this.size / 2));
      //   this.map[row][column] = this.map[]
      //   // let elem: Elem = this.map[row][column];
      //   // rowArr.push(elem.pos + ':' + elem.num);
      // }
    }
  }

}
