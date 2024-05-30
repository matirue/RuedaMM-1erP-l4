import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosGitService {

  constructor(private http: HttpClient) { }

  traerDatosGit(){
    return this.http.get("https://api.github.com/users/matirue");
  }
}
