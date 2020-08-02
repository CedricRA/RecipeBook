import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(0,
            'Ramen',
            'Plat japonais complet, sous forme de soupe. Les ramens mélangent viandes, nouilles, riz et autres assortiments.',
            'https://cdn.pixabay.com/photo/2018/03/15/10/32/bars-ramen-in-saigon-3227775_960_720.jpg',
            [new Ingredient('Boeuf', 1),
            new Ingredient('Riz', 1),
            new Ingredient('Nouille', 1)
            ]),
        new Recipe(1,
            'Pizza',
            'Pizza italienne base tomate au fromage et mozarella.',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
            [new Ingredient('Pate', 1),
            new Ingredient('Tomate', 3),
            new Ingredient('Fromage', 4)]),
        new Recipe(2,
            'Spagetti',
            'Spagetti italiens à la bolognaise et accompagné de tomates confites.',
            'https://cdn.pixabay.com/photo/2017/02/26/13/01/pasta-2100172_960_720.jpg',
            [new Ingredient('Pate', 1),
            new Ingredient('Bolognaise', 1),
            new Ingredient('Tomate', 2)]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number): Recipe {
        return this.recipes.slice()[id];
    }
}
