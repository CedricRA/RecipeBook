import { Component, OnInit } from '@angular/core';
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
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
