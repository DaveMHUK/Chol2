import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = [
    {
      id: "r1",
      title: "Vegan Steak Bake",
      imageUrl:
      "https://www.exceedinglyvegan.com/vegan/thumbnails/thumbnailimage/5116/0284/4165/vegan-steak-bake-recipe-greggs.jpg",
      ingredients: ['Tofu', 'Red Onion, Walnuts']
    },
    {

      id: "r2",
      title: "Potato Gratin",
      imageUrl:
      "https://www.exceedinglyvegan.com/vegan/thumbnails/thumbnailimage/5116/0284/4165/vegan-steak-bake-recipe-greggs.jpg",
      ingredients: ['Potato', 'Onion', 'Sunflower Seeds', 'Olive Oil', 'Salt']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

deleteRecipe(recipeId: string) {
  this.recipes = this.recipes.filter(recipe => {
    return recipe.id !== recipeId;
  });
}

}
