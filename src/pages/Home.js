import "../App.css"
function Home(props) {
    return (
      <div className="home">
        <div className="homepagePic">
                <img src="https://i.imgur.com/kqWeGjs.jpg" alt="homepagePic"></img>
        </div>
        <div className="howItWorksHomePage">
                <div>
                        <h1>How It Works</h1>
                </div>
                <div className="howItWorksSteps">
                        <div className="stepNumContainer">
                                <div className="stepNum">1</div>
                                <img src="https://i.imgur.com/YSQ8AkC.jpg" alt="step 1" className="step1"></img>
                                <div><p>Choose your meals and extras</p></div>
                        </div>
                        <div className="stepNumContainer">
                                <div className="stepNum">2</div>
                                <img src="https://i.imgur.com/GR4mlaf.jpg" alt="step 2"></img>
                                <div><p>We deliver fresh each week</p></div>
                        </div>
                        <div className="stepNumContainer">
                                <div className="stepNum">3</div>
                                <img src="https://i.imgur.com/fWPjuNw.jpg" alt="step 3"></img>
                                <div><p>Meals ready in minutes</p></div>
                        </div>
                        <div className="stepNumContainer">
                                <div className="stepNum">4</div>
                                <img src="https://i.imgur.com/3Jcn1dZ.jpg" alt="step 4"></img>
                                <div><p>Skip or cancel anytime</p></div>
                        </div>
                </div>
        </div>
        <div className="homePageLastDiv">
                <div className="description">
                        <div>Costumize Your Menu</div>
                        <div><h1>Meal Delivery For Any LifeStyle</h1></div>
                        <div><p>Choose a home meal delivery plan for your taste, or mix and match any of our weekly recipes</p></div>                        
                </div>
                <div className="lifeStyleList">
                        <ul>
                                <li>Vegetarian</li>
                                <li>Paleo</li>
                                <li>Gluten-Free</li>
                                <li>Carb-Conscious</li>
                                <li>Keto-Friendly</li>
                                <li>Mediterranean</li>
                                <li>Diabetes-Friendly</li>
                                <li>Pescatarian</li>
                                <li>Fresh & Ready</li>

                        </ul>
                </div>
                <div className="allMeals">
                        <img src="https://i.imgur.com/TFoOWuW.jpg" alt="meals from all around the world"></img>
                </div>
                
        </div>
      </div>);
  }
  
  export default Home;