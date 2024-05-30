import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario;
  email: string = '';
  pass: string = '';

  constructor(
    private authSvc: AuthService, 
    private formBuilder: FormBuilder,
    private router : Router) {
    this.usuario = new Usuario();
   }

   loginForm = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }

  )

  ngOnInit(): void {
  }

  async onLogin()
  {
    const {email,password} = this.loginForm.value;
    this.usuario.email = email;
    this.usuario.password = password;
    
    try
    {
      const user = await this.authSvc.login(this.usuario);

      if(user)
      {
        localStorage.setItem('token', this.usuario.email);
        this.router.navigate(['/bienvenida']);
        console.log("Logueado!");
      }
      
    }
    catch(error)
    {
      console.log(error);
    }
    
  }

  accesoRapidoUno(){
    this.email = "empleado@empleado.com";
    this.pass= "222222";   
  }

  accesoRapidoDos(){
    this.email = "admin@admin.com";
    this.pass= "111111";
  }

}
