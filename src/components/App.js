import React from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';

function App() {
	return <RecipeList recipes={sampleRecipes} />;
}

const sampleRecipes = [
	{
		id: 1,
		name: 'Plain Chicken',
		servings: 3,
		cookTime: '1:45',
		instructions: '1. Put salt on Chicken\n 2. Place chicken in over\n 3. Eat Chicken',
		ingredients: [
			{
				id: 1,
				name: 'Chicken',
				amount: '2 pounds',
			},
			{
				id: 2,
				name: 'Salt',
				amount: '1 Tbsp',
			},
		],
	},
	{
		id: 2,
		name: 'Plain Pork',
		servings: 5,
		cookTime: '0:45',
		instructions: '1. Put paprika on pork\n 2. Place pork in over\n 3. Eat pork',
		ingredients: [
			{
				id: 1,
				name: 'Pork',
				amount: '3 pounds',
			},
			{
				id: 1,
				name: 'Paprika',
				amount: '2 Tbsp',
			},
		],
	},
];

export default App;
