import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent  {
  @Input() recipe: Recipe;
  open = false;

  constructor(private shoppingListService: ShoppingListService) { }

  dropDownToggle () {
    this.open = !this.open;
  }

  addToShoppingList() {
   this.shoppingListService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
