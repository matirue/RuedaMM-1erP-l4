import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-deatlle-repartidor',
  templateUrl: './deatlle-repartidor.component.html',
  styleUrls: ['./deatlle-repartidor.component.css']
})
export class DeatlleRepartidorComponent implements OnInit {

  @Input()
  unRep?: Repartidor;

  constructor() { }

  ngOnInit(): void {
  }

}
