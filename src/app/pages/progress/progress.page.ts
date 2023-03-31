import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage   {

  porcentaje : number = 0;

  constructor() {}

  rangeChange(event : any){
    // console.log(event.detail.value)
    this.porcentaje = event.detail.value / 100;
  
  }

}