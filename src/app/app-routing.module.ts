import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmContainerComponent } from './components/abm-container/abm-container.component'; 
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component'; 
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { RepartidorListadoComponent } from './components/repartidor-listado/repartidor-listado.component';
import { RepartidorDetalleComponent } from './components/repartidor-detalle/repartidor-detalle.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent, pathMatch: 'full'},
  { path: 'bienvenida', component: BienvenidoComponent},
  { path: 'login', component: LoginComponent }, 
  
  { path: 'alta-repartidor', component: AltaRepartidorComponent, canActivate: [AuthGuard] },
  { path: 'repartidor-listado', component: RepartidorListadoComponent, canActivate: [AuthGuard] },
  { path: 'repartidor-detalle', component: RepartidorDetalleComponent, canActivate: [AuthGuard] },
  { path: 'helados', component: AbmContainerComponent, canActivate: [AuthGuard] },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
