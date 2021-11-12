import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatos', 3),
    new Ingredient('Apples', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
