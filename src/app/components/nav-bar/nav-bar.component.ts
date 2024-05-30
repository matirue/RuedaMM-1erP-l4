import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public userLogged: any;
  public ocultarLogin: boolean = true;
  public ocultarLogout: boolean = false;
  public mostrarCont: boolean = false; 

  
  public load: boolean = false;

  constructor(
    private router: Router,
    private authServicio: AuthService, 
    public authFire: AngularFireAuth) { 

    this.authFire.authState.subscribe(res=>{
      if(res && res.uid){
        this.userLogged = res.email;
        this.ocultarLogin = false;
        this.ocultarLogout = true;

        if(this.userLogged == 'admin@admin.com'){
          this.mostrarCont = true;
        }

        console.log('User log -> ', this.userLogged);
      } else {
        
        this.ocultarLogin = true;
        this.ocultarLogout = false;
        this.mostrarCont = false;

        console.log(' No hay usuario logueado ');
      }
    });
  }

  async ngOnInit() {
  }

  login(){ this.router.navigateByUrl('login'); }

  async logOut(){
    try{
      await this.authFire.signOut();

      this.router.navigateByUrl('/');

      
    }catch(error){ console.log(error); } 
  }


  AltaRepartidor(){ this.router.navigateByUrl('alta-repartidor'); }
  ListaRepartidor(){ this.router.navigateByUrl('repartidor-detalle'); }
  IrHelado(){ this.router.navigateByUrl('helados'); }
  // encuesta(){ this.router.navigateByUrl('juegos/encuesta'); }

}
