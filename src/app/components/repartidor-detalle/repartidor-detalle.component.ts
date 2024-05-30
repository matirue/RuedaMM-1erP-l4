import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {

  token: any;
  repParaMostrar: Repartidor = new Repartidor;

  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    console.log(this.token);

    if(this.token == null)
    {
      location.assign('/bienvenida');
    }
  }

  tomarRepParaDetalles(rep: Repartidor)
  {
    console.log(rep)
    this.repParaMostrar=rep;   
  }

}
