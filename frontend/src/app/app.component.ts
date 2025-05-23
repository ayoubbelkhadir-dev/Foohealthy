import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from "./pages/footer/footer.component";

import { AuthComponent } from "./pages/auth/auth.component";
import { AuthServiceService } from './services/auth/auth-service.service';
import { HomePageComponent } from './pages/home-page/home-page.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent,AuthComponent,HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'foohealty';
  user:any =null;

constructor(public authService : AuthServiceService){
  }

  ngOnInit(){
    this.authService.getUserProfile().subscribe({
      next:data=>console.log("req user : ",data),
      error:error=>console.log("error ",error)
    });
    this.authService.authSubject.subscribe((auth)=>{
      console.log("auth state ",auth)
      this.user = auth.user
      }
    )
  }
}
