import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.css']
})
export class ListadoRepartidorComponent implements OnInit {

  token: any;
  prodParaMostrar: Repartidor = new Repartidor;

  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    console.log(this.token);

    if(this.token == null)
    {
      location.assign('/bienvenida');
    }
  }

  // tomarProductoParaDetalles(producto: Repartidor)
  // {
  //   console.log(producto)
  //   this.prodParaMostrar=producto;   
  // }

}
