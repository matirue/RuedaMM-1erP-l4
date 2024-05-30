import { Container } from 'src/app/clases/container';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container-alta',
  templateUrl: './container-alta.component.html',
  styleUrls: ['./container-alta.component.css']
})
export class ContainerAltaComponent implements OnInit {

  public sabor!: string;
  public tipo!: string;
  public precio!: number;
  public peso!: number; 

  @Output() nuevoContainer = new EventEmitter<Container>();

  constructor() { }

  cargarAltaContainer() {
    let cont: Container = new Container();

    cont.sabor = this.sabor;
    cont.tipo = this.tipo;
    cont.precio = this.precio;
    cont.peso = this.peso;
    
    this.nuevoContainer.emit(cont);

  
  }

  ngOnInit(): void {
  }

}
