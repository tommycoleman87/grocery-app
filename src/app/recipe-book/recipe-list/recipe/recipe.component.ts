import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipesService} from "../../../services/recipes.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent  {
  @Input () recipe: Recipe = new Recipe('', '', '', []);
  constructor(private recipesService: RecipesService) { }

  onSelectRecipe() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }

}
