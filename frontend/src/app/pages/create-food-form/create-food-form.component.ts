import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { FoodServiceService } from '../../services/food/food-service.service';
@Component({
  selector: 'app-create-food-form',
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatRadioModule],
  templateUrl: './create-food-form.component.html',
  styleUrl: './create-food-form.component.scss'
})
export class CreateFoodFormComponent {
  constructor(private foodService:FoodServiceService){}
  foodItem:any={
    title:"",
    description:"",
    foodType:"",
    image:""
  }
  onSubmit(){
    console.log("values",this.foodItem)
    this.foodService.createFood(this.foodItem).subscribe()
  }
}
