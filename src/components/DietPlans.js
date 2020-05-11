import React, { useEffect, useState } from 'react';

import Recipe from './Recipe';
import FoodSection from './FoodSection';
import '../css/dietplans.css';


const DietPage = () => {
    const APP_ID = "e625b8c1";
    const APP_KEY = "1debc070ab2e7f1a889ec5f8979f4f86";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect( () => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/api/food-database/parser?nutrition-type=Health&ingr=wine&healthLabels=VEGAN&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log("Data pulled from new API: ", data.hints);
        setRecipes(data.hints);
    };

    return (
        <div className="DietPage">
            <div className="container">   
                <div className="row">
                    <div className="foodSection">
                        {recipes.map((recipe, index) => (
                            // <FoodSection 
                            <div key={index}>     
                                <p>key = {recipe.food.foodId}</p>
                                <p>label = {recipe.food.label}</p>
                                <p>id = {recipe.food.foodId}</p>
                                <p>brand = {recipe.food.brand}</p>
                                <img src={recipe.food.image} alt="..."></img>
                                <p>category = {recipe.food.category}</p>
                                <p>categoryLabel = {recipe.food.categoryLabel}</p>
                                {/* <p>nutrients = {recipe.food.nutrients}</p> */}
                            </div>
                            // />
                        ))}
                    </div>
                    {/* {recipes.map((recipe, index) => (
                        <Recipe 
                        key={index}
                        title={recipe.recipe.label} 
                        calories={recipe.recipe.calories} 
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        />
                    ))} */}
                </div>
            </div>
        </div>
    );
};

// class FoodTrends extends React.Component {
//     render(){
//         return (
//             <h1>FoodTrends Page</h1>
//         )
//     }
// }

export default DietPage;