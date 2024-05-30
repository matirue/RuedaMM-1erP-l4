import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { RepartidorService } from 'src/app/servicios/repartidor.service';

@Component({
  selector: 'app-repartidor-listado',
  templateUrl: './repartidor-listado.component.html',
  styleUrls: ['./repartidor-listado.component.css']
})
export class RepartidorListadoComponent implements OnInit {

  @Input()
  listadoProductos: Repartidor[] = [];

  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  listaProductos: any;

  tamanioLista!:Number;

  auxPais!:string;

  constructor(private prodSVC: RepartidorService) {     
    this.prodSVC.getAll().subscribe(rep =>{  
    this.listadoProductos=rep;
   
    this.tamanioLista =  this.listadoProductos.length 
  })
 }
  ngOnInit(): void {
  }


  mostrarDetalles(parametroProducto: Repartidor)
  {
  	console.log(parametroProducto);
    this.productoSeleccionado.emit(parametroProducto);
  }

}
