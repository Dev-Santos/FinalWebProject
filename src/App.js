import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Imported Components
import AppNavbar from "./components/AppNavbar";
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MyRecipes from './components/MyRecipes';
import AddRecipe from './components/AddRecipe';
import FoodNews from './components/FoodNews';
import DietPlans from './components/DietPlans';
import Login from './components/Login';

//Imported CSS Files
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {

    //JSX
    return (    
      <div>
        <Router>

          <AppNavbar/>

          <Switch>

            <Route path={["/home", "/", ""]} exact component={HomePage}/>

            <Route path={"/foodnews"} exact component={FoodNews}/>

            <Route path={"/healthchoices"} exact component={DietPlans}/>

            <Route path={"/myrecipes"} exact component={MyRecipes}/>

            <Route path={"/addrecipe"} exact component={AddRecipe}/>

            <Route path={"/login"} exact component={Login}/>

            {/* <Route path={"/signup"} exact component={HomePage}/> */}

          </Switch>
          
          <Footer />

        </Router>  

      </div>         
    );
  }
}

export default App;
