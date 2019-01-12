import { browser, element, by, $$ } from "protractor";
import { AppPage } from "./app.po";

describe('Testing profile-recipes page', () => {

  let page: AppPage;

  //this is to be able to acces the page object from app.po.ts
  beforeEach(() => {
    page = new AppPage();
  });
  
  it('1.0 Add new recipe', async() => {

      page.login();

      browser.sleep(2000);

      //go to profile
      $$('#profileNav').click();

      browser.sleep(2000);

      //count how many recipes there are in the begining
      $$('.recipe-container').then(function(recipesBefore) {
          let recipesCountBefore = recipesBefore.length;
      
      browser.sleep(2000);

      //click on make a new recipe
      $$('#addNewRecipe').click();

      element(by.name('name')).sendKeys('Pizza');
      element(by.name('imagePath')).sendKeys('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDx9MgwLQmM-Z3Q-bA1u6DtLS41pj5ZI8yf6iAOr6V--knVTB3mA');
      element(by.id('publishRecipeButton')).click();

      browser.sleep(5000);

        //count how many recipes there are at the end
        $$('.recipe-container').then(function(recipesAfter) {
            var recipesCountAfter = recipesAfter.length;
            expect(recipesCountAfter - recipesCountBefore).toBe(1);
        })

    })

      });
    });

 