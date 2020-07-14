import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Ramen', 'Ramen desc', 'https://cdn.pixabay.com/photo/2018/03/15/10/32/bars-ramen-in-saigon-3227775_960_720.jpg'),
    new Recipe('Pizza', 'Pizza desc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg'),
    new Recipe('Spagetti', 'Spagetti desc', 'https://cdn.pixabay.com/photo/2017/02/26/13/01/pasta-2100172_960_720.jpg'),
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipeElement: Recipe){
    this.selectedRecipe.emit(recipeElement);
  }

}
