import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  ingredients: Ingredient[] = [
    new Ingredient('Tomatos', 3),
    new Ingredient('Apples', 5)
  ];
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
