import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import CheckList from './CheckList';

import '../css/homepage.css';

const HomePage = () => {
    const APP_ID = "d66e2a9d";
    const APP_KEY = "7cc5b4178a5c8cd7de97819f02da5f85";
  
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');
  
    useEffect( () => {
      getRecipes();
    }, [query]);
 
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      console.log("Data pulled from original API: ", data);
      setRecipes(data.hits);
    };
  
    const updateSearch = e => {
      setSearch(e.target.value);
    };
  
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    };

    const addRecipe = () => {
      console.log('This is working!!!!');
    }
  
    return (    
      <div className="HomePage">
        <div className="container">   
            <div className="row">  
                <div className="col-md-9 col-sm-8 col-xs-8">
                    <form onSubmit={getSearch} className="search-form">
                        <input placeholder="Search for any recipe..." className="search-bar" type="text" value={search} onChange={updateSearch} />
                        <button className="search-button" type="submit">Search</button>
                    </form>     
                    <div className="">
                      {recipes.map((recipe, index) => (
                          <div className="recipes">
                            <Recipe 
                              key={index}
                              title={recipe.recipe.label} 
                              calories={recipe.recipe.calories} 
                              image={recipe.recipe.image}
                              ingredients={recipe.recipe.ingredients}
                            />
                            <button>Add Recipe</button>
                          </div>
                      ))}
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-4">
                    <CheckList />
                </div>

            </div>  
        </div>
      </div> 
    );
  };

export default HomePage;