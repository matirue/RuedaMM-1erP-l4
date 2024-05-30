import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/clases/pais';
import { Repartidor } from 'src/app/clases/repartidor';
import { RepartidorService } from 'src/app/servicios/repartidor.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  @Output() altaRepartidor: EventEmitter<any>= new EventEmitter<any>();

  repartidor!: Repartidor;
  bandera?: boolean;
  nombre: any;
  token: any;
  pais?: Pais;

  public formProducto!: FormGroup;

  public constructor(
    private repartidorSvc: RepartidorService, 
    private router: Router,
    private fb:FormBuilder
    ) 
  { 
    this.repartidor = new Repartidor(); 
  }

  cambiarPais(p : any) {

  this.pais = p;
  this.nombre = p.name;
  this.formProducto.get('paisOrigen')?.setValue(p.name);
   
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    if(this.token == null)
    {
      this.router.navigateByUrl("/bienvenida");

    }

    this.formProducto = this.fb.group( {
        'dni': ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
        'nombre': ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
        'edad': ['', [Validators.required, Validators.pattern(/^\d+$/), this.minValueValidator(18)]],
        'capacidad': ['', [Validators.required, Validators.pattern(/^\d+$/), this.minValueValidator(1)]],
        'paisOrigen': ['', Validators.required],
        'unidad': ['', Validators.required],  
      }
    )    
  }

  minValueValidator(minValue: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value && value < minValue) {
        return { minValue: true };
      }
      return null;
    };
  }

  crearRepartidor() {
    this.repartidor.dni = this.formProducto.get('dni')?.value;
    this.repartidor.nombre = this.formProducto.get('nombre')?.value;
    this.repartidor.capacidad = this.formProducto.get('capacidad')?.value;
    this.repartidor.edad = this.formProducto.get('edad')?.value;
    this.repartidor.paisOrigen = this.formProducto.get('paisOrigen')?.value;
    this.repartidor.unidad = this.formProducto.get('unidad')?.value;

    console.log(this.repartidor);

     this.repartidorSvc.Crear(this.repartidor).then(() => {

       console.log("repartidor creado");
       location.assign('repartidor-detalle');
      // location.assign('repartidor-listado');
     })  
  }

}
