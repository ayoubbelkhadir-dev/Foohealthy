import { Component, Inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { FoodServiceService } from '../../services/food/food-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-food-form',
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatRadioModule],
  templateUrl: './update-food-form.component.html',
  styleUrl: './update-food-form.component.scss'
})
export class UpdateFoodFormComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data:any,private foodService:FoodServiceService){}
  foodItem:any={
    title:"",
    description:"",
    foodType:"",
    image:""
  }
  onSubmit(){
    console.log("values",this.foodItem)
    this.foodService.updateFood(this.data).subscribe()
  }
  ngOnInit(){
    this.foodItem = this.data
  }
}
