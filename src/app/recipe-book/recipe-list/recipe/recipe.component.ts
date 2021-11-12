import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent  {
  @Input () recipe: Recipe = new Recipe('', '', '', []);
  @Output() recipeSelected = new EventEmitter<void>();

  onSelectRecipe() {
    this.recipeSelected.emit();
  }

}
