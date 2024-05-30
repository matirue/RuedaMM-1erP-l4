import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { take } from 'rxjs/operators';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-abm-container',
  templateUrl: './abm-container.component.html',
  styleUrls: ['./abm-container.component.css']
})
export class AbmContainerComponent implements OnInit {

  container$ : Observable<Container[]>;
  container : Container = new Container();  

  constructor(private contSvc : ContainerService) 
  { 
    this.container$ = this.contSvc.traerContainers().valueChanges();
  }


  agregarContainer(cont: Container) 
  {
    let existe : boolean = false;

    this.container$.pipe(take(1)).subscribe(list=>{

      this.contSvc.CrearContainer(cont);

      // list.forEach(element=>{
        
        // if(element.codigo == cont.codigo)
        // {
        //   existe = true;
        // }

      // })

      // if(existe != true)
      // {
      //    this.contSvc.CrearContainer(cont);
      // }
      // else
      // {
      //   console.log('Ya existe');
      // }
    })

    
   
  }

  selectContainer(cont: Container)
  {
    this.container.sabor = cont.sabor;
    this.container.tipo = cont.tipo;
    this.container.precio = cont.precio;
    this.container.peso = cont.peso;
  }


  ngOnInit(): void {
  }

}
