import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {

  public miPais: string = "";  

  public listaPaises: any[] = [];
  public paisesAfrica: any[] = [];
  public paisesEuropa: any[] = [];

  @Output() paisSeleccionadoEvent: EventEmitter<any> = new EventEmitter<any>();  

  constructor(private paisesSvc: PaisesService) {

    this.paisesSvc.traerPaises().subscribe(
      (data: any) => {
        this.listaPaises = data;

        this.paisesAfrica = this.listaPaises.filter(pais => pais.region === 'Africa').slice(0, 5); 
        this.paisesEuropa = this.listaPaises.filter(pais => pais.region === 'Europe').slice(0, 5);
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {

    this.miPais = this.paisesSvc.obtenerPaisActual();

    this.paisesSvc.traerPaises().subscribe(result => {

    })
  }

  seleccionarPais(pais: any) {
    console.log(pais);
    this.paisSeleccionadoEvent.emit(pais);
  }

}
