import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios! : Observable<any>;

  @ViewChild(IonList) ionList! : IonList;

  constructor( private DataSe: DataService) { }

  ngOnInit() {

    this.usuarios = this.DataSe.getUsuario();
  }


  favorite(user : any){
    console.log('favorite', user);
    this.ionList.closeSlidingItems()
  }
  
  share(user : any){
    console.log('share', user);
    this.ionList.closeSlidingItems()
  }
  delete(user : any){
    console.log('delete', user);
    this.ionList.closeSlidingItems()
  }




}
