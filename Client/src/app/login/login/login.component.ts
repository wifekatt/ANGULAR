import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Electeur } from '../../class/electeur'
import { AuthService } from '../../service/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

electeur:Electeur = new Electeur();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  userIdFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  userLogin(){
console.log(this.electeur);
this.authService.login(this.electeur).subscribe(data=>{
  alert("login successfully")
  },error=>alert("please enter correct Cin and Email"));
  }

}
