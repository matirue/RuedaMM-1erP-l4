import { Component, OnInit } from '@angular/core';
import { DatosGitService } from 'src/app/servicios/datos-git.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  public misDatos : any;
  public img: any;

  constructor(private datosgitSvc : DatosGitService) { }

  ngOnInit(): void {
    this.datosgitSvc.traerDatosGit().subscribe((result)=>{
      this.misDatos=result;      
      this.img = this.misDatos.avatar_url;   
    })
  }

}
