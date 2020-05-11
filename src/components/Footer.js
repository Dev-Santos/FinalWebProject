import React from 'react';

import '../css/footer.css';

//Footer Component Specification using React Hooks
function Footer(){
         
  //The following is rendered/displayed on the browser
  return(
    <React.Fragment>
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h6>About</h6>
                  <p className="text-justify">This website hopes to provide access to all sorts of recipes worldwide. It should allow users to create there own collection of recipes, view recent news regarding food and allow users to add personal recipes to share to the world.</p>
                </div>

                <div className="col-xs-6 col-md-3">
                  <h6>Food Categories</h6>
                  <ul className="footer-links">
                    <li>Grains</li>
                    <li>Proteins</li>
                    <li>Dairy</li>
                    <li>Fats, Oils & Sweets</li>
                    <li>Vegatables</li>
                    <li>Fruits</li>
                  </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                  <h6>Pages</h6>
                  <ul className="footer-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/foodnews">Food News</a></li>
                    <li><a href="/foodtrends">Food Trends</a></li>
                    <li><a href="/myrecipe">My Recipes</a></li>
                    <li><a href="/addrecipe">Add Recipe</a></li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
              <a href="/"> eMargin8</a>.
                  </p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons">
                    <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
                    <li><a className="dribbble" href="/"><i className="fa fa-dribbble"></i></a></li>
                    <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>   
                  </ul>
                </div>
              </div>
            </div>
      </footer>

    </React.Fragment>
  )
}

export default Footer;//Export the component to be used