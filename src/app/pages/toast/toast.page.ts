import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(private toastCtrl : ToastController) { }

  ngOnInit() {
  }

  // Primer Boton

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Hello World!',
      duration: 3000,
      position: position
    });

    await toast.present();
  }

  
  // Segundo Boton
  async presentOption() {
    const toast = await this.toastCtrl.create({
      message: 'Hello World!',
      duration: 3000,
      buttons: [
        {
          text: 'More Info',
          role: 'info',
          handler: () => { this.handlerMessage = 'More Info clicked'; }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => { this.handlerMessage = 'Dismiss clicked'; }
        }
      ]
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
