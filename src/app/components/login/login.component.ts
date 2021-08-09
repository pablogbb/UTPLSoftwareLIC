import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router:Router,
    private dbservice:DbService) { 
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
   
  }

  login(){

    if(!this.loginForm.valid){
      alert('Formulario inválido');
      return
    }

    let usr = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    };
    
    var usuario = this.dbservice.login(usr); 
    if(usuario){
      this.dbservice.user = usuario;
      this.router.navigate(['home/navegador']);
    }
    else{
      alert('Usuario inválido')
    }
    

  }

}







