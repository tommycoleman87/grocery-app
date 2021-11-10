import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { IngredientComponent } from './shared/ingredient/ingredient.component';
import { EditShoppingListComponent } from './shopping-list/edit-shopping-list/edit-shopping-list.component';
import { RecipeComponent } from './recipe-book/recipe-list/recipe/recipe.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    IngredientComponent,
    EditShoppingListComponent,
    RecipeComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
