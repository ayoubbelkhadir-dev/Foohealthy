import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { FoodServiceService } from '../../services/food/food-service.service';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  user:any =null;
  @Output() viewToggled = new EventEmitter<boolean>();
  isFavoritesView: boolean = false; // Par défaut, afficher tous les foods
constructor(public authService : AuthServiceService,private foodService:FoodServiceService){
  }

  ngOnInit(){
    this.authService.authSubject.subscribe((auth)=>{
      console.log("auth state ",auth)
      this.user = auth.user
      }
    )
  }
  handlelogOut(){
    this.authService.logout();
  }

  toggleFavorites(): void {
    this.isFavoritesView = !this.isFavoritesView;
    this.viewToggled.emit(this.isFavoritesView);
  }
}
