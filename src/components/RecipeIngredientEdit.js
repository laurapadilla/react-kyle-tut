import React from "react";

export default function RecipeIngredientEdit(props) {
  const { ingredient, handleIngredientChange } = props;

  // takes list of changes that we want to make
  function handleChange(changes) {
    // take current recipe and spread all of its variables inside an object, and spread all of changes
    // take everything from recipe and adding add eveything from changes and overriding anything in changes
    // pass this to handleRecipeChange function
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onInput={(e) => handleChange({ amount: e.target.value })}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}
