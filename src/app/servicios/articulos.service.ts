import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Paso 1: Importar HttpClientModule

import { Articulos } from '../modelos/articulos.modelos';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http:HttpClient) { }

  obtener_articulos(){
    return this.http.get<Articulos[]>('https://run.mocky.io/v3/29e020fe-b583-4609-a8c6-6a183620b196')
  }
}
