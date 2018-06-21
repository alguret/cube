import {Component, OnInit} from '@angular/core';
import {Cube} from "./cube";

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {

  cube: Cube;
  // cube.generateState();
  // console.log(cube.matrix);

  constructor() {
    this.cube = new Cube();
    this.cube.generateState();
    console.log(this.cube.matrix);
  }

  ngOnInit() {
  }

}
