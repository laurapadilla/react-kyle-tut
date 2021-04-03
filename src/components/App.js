import React, { useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import uuidv4 from "uuid/v4";

// create context so that we don't need to use props to pass down functions
export const RecipeContext = React.createContext();

// set up value to pass down to context
// context will take functions that update the state

function App() {
  // [currentState, updatedState] and then we  default it to sampleRecipes
  const [recipes, setRecipes] = useState(sampleRecipes);

  // object that contains the two functions
  const recipeContextValue = {
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeDelete: handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New Recipe",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [
        {
          id: uuidv4(),
          name: "Name",
          amount: "1 Tbsp",
        },
      ],
    };
    // call setRecipe function to set that new recipe for us and
    // we pass down what we want to update our state to
    setRecipes([...recipes, newRecipe]);
  }

  // takes id of the recipe we want to delete
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  // we wrap everything we return inside Context and provide the value to everything inside it
  // we no longer need to pass values down inside props
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on Chicken\n 2. Place chicken in over\n 3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbsp",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions:
      "1. Put paprika on pork\n 2. Place pork in over\n 3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbsp",
      },
    ],
  },
];

export default App;
