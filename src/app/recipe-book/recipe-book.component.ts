import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipesService} from "../services/recipes.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipeDetail: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeDetail = recipe;
      }
    );
  }

}
