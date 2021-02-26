import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
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
      ingredients: ['Potato', 'Onion, Sunflower Seeds']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
