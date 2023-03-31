import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interface';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes!:Observable<Componente[]>;

  constructor(  private menuCtrl:MenuController, 
                private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu(){
    this.menuCtrl.open('first');
  }


}
