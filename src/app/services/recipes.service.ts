import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../recipe-book/recipe.model";
import {Ingredient} from "../shared/ingredient/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Pasta with tomato sauce', 'https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg', [new Ingredient('Meat', 1), new Ingredient('Tomato', 2) ]),
    new Recipe('Pizza', 'Crust with red sauce and cheese', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=980:*', [new Ingredient('Tomato', 1), new Ingredient('Cheese', 2)])
  ]
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
