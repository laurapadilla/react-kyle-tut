import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div className="recipe">
      <header className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
            onClick={() => handleRecipeSelect(id)}
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </header>
      <article className="recipe__row">
        <span className="recipe__label">Cook time:</span>
        <span className="recipe__value">{cookTime}</span>
      </article>
      <article className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </article>
      <section className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <article className="recipe__value recipe__instructions recipe__value--indented">
          {instructions}
        </article>
      </section>
      <section className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <article className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </article>
      </section>
    </div>
  );
}
