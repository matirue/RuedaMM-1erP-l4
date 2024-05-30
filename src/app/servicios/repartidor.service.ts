import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Repartidor } from '../clases/repartidor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  rutaDeLaColeccion = '/repartidores';
  referenciaAlaColeccion: AngularFirestoreCollection<Repartidor>;
  referenciaBD: AngularFirestore;
  productos:Observable<any[]>;

  constructor(private bd: AngularFirestore) {
    this.referenciaBD = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.productos = this.referenciaAlaColeccion.valueChanges(this.rutaDeLaColeccion)
  }

  getAll(){
    return this.productos;
  }

  Crear(producto: Repartidor): any {
    return this.referenciaAlaColeccion.add({ ...producto });
  }

  public TraerTodos() {
    return this.referenciaAlaColeccion;
  }

  public Buscarrepartidor(rep: Repartidor) {
    return this.referenciaBD.collection(this.rutaDeLaColeccion, ref => 
      ref.where("dni", "==", rep.dni).
      where("nombre", "==", rep.nombre).
      where("edad", "==", rep.edad).
      where("capacidad", "==", rep.capacidad).
      where("paisOrigen", "==", rep.paisOrigen).
      where("unidad", "==", rep.unidad));
  }

  public actualizarRepartidor(id:string,data:any) : any {
     return this.referenciaAlaColeccion.doc(id).set(data);
  }
}
