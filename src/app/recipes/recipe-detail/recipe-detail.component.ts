import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onEdit() {
    console.log('Edit !');
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
