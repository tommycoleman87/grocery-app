import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent  {
  recipeDetail: Recipe;

  setRecipeDetail(r: Recipe) {
    this.recipeDetail = r;
  }
}
