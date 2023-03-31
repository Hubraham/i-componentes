import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit',
  templateUrl: './infinit.page.html',
  styleUrls: ['./infinit.page.scss'],
})
export class InfinitPage implements OnInit {

  
  data: any[] = Array(20); 

  @ViewChild(IonInfiniteScroll) infinitScroll!: IonInfiniteScroll;
  

  constructor() { }

  ngOnInit() {
  
  }

  // private generateItems() {
  //   const count = this.data.length + 1;
  //   for (let i = 0; i < 20; i++) {
  //     this.data.push(`Item ${count + i}`);
  //   }
  // }

 
  onIonInfinite(ev : any) {
    // console.log(ev);
    // this.generateItems();
 
    setTimeout(() => {

      if (this.data.length > 50) {
        this.infinitScroll.complete();
        this.infinitScroll.disabled = true;
        return
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      // (ev as InfiniteScrollCustomEvent).target.complete();
      this.infinitScroll?.complete()
    }, 1500);
  }

}
