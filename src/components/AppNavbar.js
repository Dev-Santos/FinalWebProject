import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

// import axios from 'axios';

const AppNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    // const [name, setName] = useState('');

    // //Store name to the state of the component
    // const changeName = (e) => {
    //     setName(e.target.value);
    // }

    // //Submit name to the backend
    // const submitName = () => {

    //     //Headers
    //     const config = {
    //         headers: {
    //             "Content-type" : "application/json" 
    //         }
    //     };

    //     //Create request body
    //     const body = JSON.stringify({name});
        
    //     //Access the backend api (Express & Nodejs) (in the server.js file) to send user information from the database
    //     axios.post('/', body, config)
    //     .then(res => {
    //         console.log(res.data); 
    //     })
    //     .catch(err => { //If an error is caught
    //        console.log(err);
    //     });

    // }

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">React-Recipes</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/foodnews">Food News</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/healthchoices">Health Choices</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/myrecipes">My Recipes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/addRecipe">Add Recipe</NavLink>
                    </NavItem>                    
                </Nav>
                <Nav className="mr-0" navbar>
                    <NavItem>
                        <NavLink href="/login">Login/Sign-up</NavLink>
                    </NavItem>
                </Nav>
                {/* <Nav className="mr-0" navbar>
                    <NavItem>
                        <input placeholder="Enter name" className="search-bar" type="text" onChange={changeName}/>
                        <button className="search-button" type="submit" onClick={submitName}>Add Record</button>
                    </NavItem>
                </Nav> */}
                
                </Collapse>
            </Navbar>          
        </div>
    );
}

export default AppNavbar;