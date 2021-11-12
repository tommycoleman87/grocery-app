import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient/ingredient.model";

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {
  @ViewChild('nameInput', {static: true})  nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Input() ingredient = new Ingredient('', 0);

  onAddIngredient() {
    this.ingredient.name = this.nameInputRef.nativeElement.value;
    this.ingredient.amount = this.amountInputRef.nativeElement.value;
    this.ingredientAdded.emit(this.ingredient);
  }

  constructor() { }

  ngOnInit() {
  }

}
