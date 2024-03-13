import { Component, OnInit } from '@angular/core';


import { ArticulosService } from '../servicios/articulos.service';

import { Articulos } from '../modelos/articulos.modelos';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  listaArticulos: Articulos[]=[]

  constructor(private articulosService: ArticulosService ){}

  ngOnInit(): void {
    this.articulosService.obtener_articulos()
    .subscribe(data=>{
      console.log(data);
      this.listaArticulos=data;

    });
  }


}
