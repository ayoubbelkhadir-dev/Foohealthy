import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AuthServiceService } from '../../services/auth/auth-service.service';

@Component({
  selector: 'app-auth',
  imports: [NgClass,FormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  isRegistry = false
  constructor(public authService:AuthServiceService){}

  RegisterForm = new FormGroup({
    fullName : new FormControl("",[Validators.required]),
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required,Validators.minLength(6)]),
  })

  loginForm = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required]),
  })
  handelRegister(){
    console.log("register :",this.RegisterForm.value)
    this.authService.register(this.RegisterForm.value).subscribe({
      next:((response)=>{
        localStorage.setItem("jwt",response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("logup success",response);
      })    
    })
  }

  handelLogin(){
    console.log("login :",this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe({
      next:((response)=>{
        localStorage.setItem("jwt",response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("login success",response);
      })
    })
  }
  togglePanel(){
    this.isRegistry = !this.isRegistry
  }
}
