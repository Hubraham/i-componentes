import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes!: Observable<any>;
  publisher: string = '';

  constructor( private dataServ : DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataServ.getHeroes();
  }

  segmentChanged(e: any){
    
    // if (e.detail.value === 'todos') {
    //   this.publisher = '';
    // }
    
    this.publisher = e.detail.value;


  }
  
}
