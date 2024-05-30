import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-pais-producto',
  templateUrl: './pais-producto.component.html',
  styleUrls: ['./pais-producto.component.css']
})
export class PaisProductoComponent implements OnInit {

  @Input() detalleRep: Repartidor;

  constructor() { 
    this.detalleRep = new Repartidor();
  }

  ngOnInit(): void {
  }

}
