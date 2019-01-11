
import { Recipe } from '../recipes/recipe.model';

export class User {
    userId: String;
    username: String;
    email: String;
    password: String;
    repeatPassword: String;
    picture?: String;
    description: String;
    recipes?: Recipe[];
}