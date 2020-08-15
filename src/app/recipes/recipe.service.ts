import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(0,
            'Ramen',
            'Plat japonais complet, sous forme de soupe. Les ramens mélangent viandes, nouilles, riz et autres assortiments.',
            'http://www.ochaya.co.th/ramenboy/wp-content/uploads/2016/06/miso-ramen.png',
            [new Ingredient('Boeuf', 1),
            new Ingredient('Riz', 1),
            new Ingredient('Nouille', 1)
            ]),
        new Recipe(1,
            'Pizza',
            'Pizza italienne base tomate au fromage et mozarella.',
            'https://pngriver.com/wp-content/uploads/2018/03/Download-Pepperoni-Pizza-PNG-Transparent-Image-For-Designing-Purpose.png',
            [new Ingredient('Pate', 1),
            new Ingredient('Tomate', 3),
            new Ingredient('Fromage', 4)]),
        new Recipe(2,
            'Spagetti',
            'Spagetti italiens à la bolognaise et accompagné de tomates confites.',
            'https://vignette.wikia.nocookie.net/tuc/images/a/a3/One_Spaghetti.png/revision/latest?cb=20151106232751',
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
