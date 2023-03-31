import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {


  constructor( private modalCtrl: ModalController) { }


  async mostrarModal() {

    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps:{
        nombre: 'Abraham',
        pais: 'Chile',
      }
    });
    modal.present();

    // const {data} = await modal.onDidDismiss();
    const {data} = await modal.onWillDismiss();
    console.log('onWillDismiss');
    

    console.log(data);
    console.log(JSON.stringify(data));

  }
}
