import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: string = '';

  constructor( private dataSer: DataService) { }

  ngOnInit() {
    this.dataSer.getAlbumes()
      .subscribe( albumes =>{
        this.albumes = albumes;
      });
  }

  handleChange(e : any){
    // console.log(e);
     this.textoBuscar = e.detail.value;
  };

}
