import React from 'react';
import style from '../css/recipe.module.css';


const Recipe = ({key, label, id, brand, image_url, category, catLabel, nutrients}) => {
    return (
        <div className={style.recipe}>
            <h1 key={key} className={style.titleFont}>{label}</h1>
            
            <ol className={style.recipeInstruction}><b>Nutrients:</b>
                {nutrients.map((nutrient, index) => (
                    <li key={index}>{nutrient.text}</li>
                ))}
            </ol>
            <p>Id: {id}</p>
            <p>Brand: {brand}</p>
            <p>Category: {category}</p>
            <p>Category Label: {catLabel}</p>
            <img className={style.image} src={image_url} alt="" />
            <button className={style.buttonPos}>Save Recipe</button>
        </div>
    );
}

export default Recipe;