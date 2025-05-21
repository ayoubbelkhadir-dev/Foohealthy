import { Component } from '@angular/core';
import { FoodCardComponent } from "../food-card/food-card.component";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { CreateFoodFormComponent } from '../create-food-form/create-food-form.component';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { FoodServiceService } from '../../services/food/food-service.service';
@Component({
  selector: 'app-home-page',
  imports: [FoodCardComponent,MatIconModule,MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  food =[]
  isFavoritesView: boolean = false;
  constructor(public dialog : MatDialog,public authService : AuthServiceService,private foodService: FoodServiceService){
  }
  openCreateFoodForm(){
    this.dialog.open(CreateFoodFormComponent)
  }

  ngOnInit(){
    this.authService.getUserProfile().subscribe();
    this.foodService.getFoods().subscribe()
    this.foodService.foodSubject.subscribe((stat)=>{
      this.food = stat.foods
    })
  }

  toggleFavoritesView(isFavorites: boolean): void {
    this.isFavoritesView = isFavorites;
  }
}
