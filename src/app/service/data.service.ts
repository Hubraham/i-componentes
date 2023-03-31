import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Componente } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http : HttpClient) { }

  getUsuario(){
    return this.http.get(this.baseUrl);
  };

  getAlbumes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  };

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  };
  getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
      .pipe(
        delay(2000)
      );
  }


}  




// https://jsonplaceholder.typicode.com/users