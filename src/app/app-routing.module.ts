import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CubeComponent} from "./cube/cube.component";

const routes: Routes = [
  {path: 'cube', component: CubeComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})


export class AppRoutingModule { }
