import { Ingredient } from "../shared/ingredients.model";
// import { create } from "domain";


//we define the class
export class Recipe {
//public means we can access this outside as an instantiated object

    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }

}