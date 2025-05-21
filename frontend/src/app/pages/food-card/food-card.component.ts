import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { UpdateFoodFormComponent } from '../update-food-form/update-food-form.component';
import { FoodServiceService } from '../../services/food/food-service.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-food-card',
  imports: [NgClass,MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss'
})
export class FoodCardComponent {
  @Input() food:any
  constructor(public dialog : MatDialog,private foodService:FoodServiceService){
  }
  openDialogUpdateForm(){
    this.dialog.open(UpdateFoodFormComponent,{
      data:this.food
    })
  }
  handleDelete(){
    this.foodService.deleteFood(this.food.id).subscribe()
  }
  handleLike(): void {
    console.log("like food ",this.food)
    this.foodService.likeFood(this.food.id).subscribe((updatedFood: any) => {
      this.food = updatedFood;
    });
  }
  isLikedByUser(): boolean {
    return this.food.likeFood && this.food.likeFood.includes(this.food.user.id);
  }

}
