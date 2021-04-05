import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange } = useContext(RecipeContext);

  // takes list of changes that we want to make
  function handleChange(changes) {
    // take current recipe and spread all of its variables inside an object, and spread all of changes
    // take everything from recipe and adding add eveything from changes and overriding anything in changes
    // pass this to handleRecipeChange function
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    // get new recipe
    // copy current ingredients array into an new array so that you don't change the state
    const newIngredients = [...recipe.ingredients];
    // get index from newIngredients
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-btn-container">
        <button className="btn recipe-edit__remove-btn">&times;</button>
      </div>
      <section className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
          className="recipe-edit__input"
        />

        <label htmlFor="cookTime" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
          className="recipe-edit__input"
        />

        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onInput={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
          className="recipe-edit__input"
        />

        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          value={recipe.instructions}
          onInput={(e) => handleChange({ instructions: e.target.value })}
          cols="30"
          rows="5"
          className="recipe-edit__input"
        />
      </section>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <section className="recipe-edit__ingredient-grid">
        <p>Name</p>
        <p>Amount</p>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
          />
        ))}
      </section>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  );
}
