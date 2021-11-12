import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {
  @Output () recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Pasta with tomato sauce', 'https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg', []),
    new Recipe('Pizza', 'Crust with red sauce and cheese', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=980:*', [])
  ]

  onSelectRecipe(r: Recipe) {
    this.recipeWasSelected.emit(r);
  }

}
