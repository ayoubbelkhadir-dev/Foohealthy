import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

    private baseUrl = 'http://localhost:5454'
  
    constructor(private http:HttpClient) { }
  
    foodSubject = new BehaviorSubject<any>({
      foods:[],
      loading:false,
      newFood : null
    })
    private getHeaders():HttpHeaders{
      const token = localStorage.getItem("jwt")
      return new HttpHeaders({
            Authorization : `Bearer ${localStorage.getItem("jwt")}` 
          })

    }
    getFoods():Observable<any>{
      const headers = this.getHeaders();
      return this.http.get(`${this.baseUrl}/api/foods`,{headers}).pipe(tap((foods =>{
        const currentState = this.foodSubject.value;
        this.foodSubject.next({...currentState,foods});
      })))

    }
    createFood(foodData:any):Observable<any>{
      const headers = this.getHeaders();
      return this.http.post(`${this.baseUrl}/api/foods`,foodData,{headers}).pipe(tap((newFood =>{
        const currentState = this.foodSubject.value;
        this.foodSubject.next({...currentState,foods:[newFood,...currentState.foods]});
      })))

    }
    updateFood(foodData: any): Observable<any> {
      const headers = this.getHeaders();
      return this.http.put(`${this.baseUrl}/api/foods/${foodData.id}`, foodData, { headers, responseType: 'json' })
        .pipe(
          tap((updatedFood: any) => {
            const currentState = this.foodSubject.value;
            const updatedFoods = currentState.foods.map((item: any) =>
              item.id === updatedFood.id ? updatedFood : item
            );
            this.foodSubject.next({ ...currentState, foods: updatedFoods });
          })
        );
    }
    
    deleteFood(foodId: any): Observable<any> {
      const headers = this.getHeaders();
      return this.http.delete(`${this.baseUrl}/api/foods/${foodId}`, { headers, responseType: 'text' })
        .pipe(
          tap(() => {
            const currentState = this.foodSubject.value;
            const updatedFoods = currentState.foods.filter((item: any) => item.id !== foodId);
            this.foodSubject.next({ ...currentState, foods: updatedFoods });
          })
        );
    }
    likeFood(id: any): Observable<any> {
      const headers = this.getHeaders();
      return this.http.put(`${this.baseUrl}/api/foods/${id}/like`,{headers})
        .pipe(
          tap((updatedFood: any) => {
            const currentState = this.foodSubject.value;

            const updatedFoods = currentState.foods.map((food: any) => {
              if (food.id === updatedFood.id) {
                return updatedFood; 
              }
              return food;
            });
    
            this.foodSubject.next({ ...currentState, foods: updatedFoods });
          })
        );
    }

}
