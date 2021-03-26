import React from 'react';
import IngredientList from './IngredientList';

export default function Recipe({ name, cookTime, servings, instructions, ingredients }) {
	return (
		<div>
			<header>
				<h3>{name}</h3>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</header>
			<article>
				<span>Cook time:</span>
				<span>{cookTime}</span>
			</article>
			<article>
				<span>Servings:</span>
				<span>{servings}</span>
			</article>
			<section>
				<span>Instructions:</span>
				<article>{instructions}</article>
			</section>
			<section>
				<span>Ingredients:</span>
				<article>
					<IngredientList ingredients={ingredients} />
				</article>
			</section>
		</div>
	);
}
