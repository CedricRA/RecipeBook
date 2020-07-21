import { EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

export class ShoppingListService {
    public ingredientAdded = new EventEmitter();
    private ingredients: Ingredient[] = [
        new Ingredient('Tomato', 5),
        new Ingredient('Cheese', 3)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit();
    }
}
