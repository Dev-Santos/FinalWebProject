import React from 'react';
import style from '../css/recipe.module.css';


const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.titleFont}>{title}</h1>
            
            <ol className={style.recipeInstruction}><b>Recipe:</b>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            {/* <p>Calories: {calories.toFixed(0)}</p> */}
            <img className={style.image} src={image} alt="" />
            <button className={style.buttonPos}>Save Recipe</button>
        </div>
    );
}

export default Recipe;