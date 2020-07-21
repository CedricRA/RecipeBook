import { Recipe } from '../models/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Ramen', 'Ramen desc', 'https://cdn.pixabay.com/photo/2018/03/15/10/32/bars-ramen-in-saigon-3227775_960_720.jpg'),
        new Recipe('Pizza', 'Pizza desc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg'),
        new Recipe('Spagetti', 'Spagetti desc', 'https://cdn.pixabay.com/photo/2017/02/26/13/01/pasta-2100172_960_720.jpg'),
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}
