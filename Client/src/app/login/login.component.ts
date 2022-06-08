import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Electeur } from '../class/electeur';
import { AuthService } from '../service/AuthService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: Electeur["email"];
  CIN!: Electeur["CIN"];
errorMessage = 'Invalid Credentials';
successMessage!: string;
invalidLogin = false;
loginSuccess = false;

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  CINFormControl = new FormControl('', [Validators.required]);

  handleLogin() {
    this.authService.login(this.CIN, this.email).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      // redirect to main page
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
