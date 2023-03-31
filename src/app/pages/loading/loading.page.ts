import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  
  async mostrarloading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }



}
