import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Electeur } from '../class/electeur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public email!: Electeur["email"];
    public CIN!: Electeur["CIN"];

  constructor(private http: HttpClient) {

  }

  login(CIN: string, email: string) {
    return this.http.get(environment.hostUrl + `/api/v1/login`,
      { headers: { authorization: this.createBasicAuthToken(CIN, email) } }).pipe(map((res) => {
        this.CIN = CIN;
        this.email = email;
        this.registerSuccessfulLogin(CIN, email);
      }));
  }

  createBasicAuthToken(CIN: string, email: string) {
    return 'Basic ' + window.btoa(CIN + ":" + email);
  }

  registerSuccessfulLogin(CIN: string, email: string) {
    // save the username to session
  }
}
