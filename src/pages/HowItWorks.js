import "../App.css"

function HowItWorks(props) {
  return(
    <div className="howItWorksPage">    
      <div className="howItWorksBanner">
        <img src="https://i.imgur.com/bqJQQrd.jpg" alt="howItWorksBanner"/> 
      </div>
      <div className="HowItWorksPageBody">
        <div className="howItWorksFirstDiv">
          <div className="part1">
            <div className="left">
              <div className="Num">1</div>
              <h1 className="howItWorksText">Let's Start With Meals</h1>
              <p>Select two or more dinners from our weekly menu. Available in two or four servings each. Meals start at <span className="strike">$9.99</span> $4.28 / serving.</p>
              <ul className="checkList">
                <li>Meal Kits: cook with pre-portioned ingredients and easy recipes</li>
                <li>Fresh & Ready: prepared meals, ready in minutes</li>
              </ul>
            </div>
            <div className="right"><img className="step1ImageOfBody" src="https://i.imgur.com/OFxDcZF.jpg" alt="step1"></img></div>
          </div>
          <h1 className="howItWorksText"> Total Flexibility</h1>
          <p>Paleo, Vegetarian and everything in between. Our weekly menu fits your lifestyle and preferences.</p>
          <div className="listOfLs">
            <div className="L-item">
              <h3>NON-VEGETARIAN</h3>
              <p>High in protein and responsibly sourced meats.</p>
            </div>
            <div className="L-item">
              <h3>CARB-CONSCIOUS</h3>
              <p>25-35g net carbs or fewer per serving with plenty of protein.</p>
            </div>
            <div className="L-item">
              <h3>GLUTEN-FREE FRIENDLY</h3>
              <p>Wheat alternatives. Not suitable for those with severe gluten allergies.</p>
            </div>
            <div className="L-item">
              <h3>DIABETES-FRIENDLY</h3>
              <p>Recipes approved by the American Diabetes Association.</p>
            </div>
            <div className="L-item">
              <h3>VEGETARIAN</h3>
              <p>No meat or seafood.</p>
            </div>
            <div className="L-item">
              <h3>PESCATARIAN</h3>
              <p>No meat or poultry. Vegetarian meals + wild-caught seafood.</p>
            </div>
            <div className="L-item">
              <h3>MEDITERRANEAN</h3>
              <p>Whole grains, good fats, wild-caught seafood and responsibly sourced meats.</p>
            </div>
            <div className="L-item">
              <h3>VEGAN</h3>
              <p>Vegetables without any meat, seafood, dairy or honey.</p>
            </div>
            <div className="L-item">
              <h3>ADULT</h3>
              <p>Beverages with alcohol in it.</p>
            </div>
          </div>
        </div>

        <div className="howItWorksSecondDiv">
          <div className="left">
            <div className="Num">2</div>
            <h1 className="howItWorksText">Add Market items for all-day deliciousness</h1>
            <p>Next, round out your basket with our selection of curated Market items, like breakfast, snacks, grab and go lunch options, and specialty meats.</p>
            <button className="menuFromHowItWorks"><a href="/Menu">Explore the menu</a></button>
          </div>
          <div className="right">
            <img className="step2ImageOfBody" src="https://i.imgur.com/U1T8G2X.jpg" alt="mealEatingPic"></img>
          </div>
        </div>

        <div className="howItWorksThirdDiv">
          <div className="left">
            <div className="Num">3</div>
            <h1 className="howItWorksText">Enjoy your meal delivery, on your schedule</h1>
            <ul className="checkList">
              <li>Your order arrives cold-packed at your doorstep.</li>
              <li>Follow simple cooking or heating instructions.</li>
              <li>Skip a week or cancel your subscription anytime.</li>
            </ul>
          </div>
          <div className="right">
            <img className="step3ImageOfBody" src="https://i.imgur.com/oHkFMRQ.jpg" alt="mealsInBox"></img>
          </div>
          

        </div>
      </div>
      <div className="HowItWorksBottomContainer">
        <div className="HowItWorksFooter">
          <img src="https://i.imgur.com/L2X2k2H.jpg" alt="HowItWorksFooter"/>
        </div>
        <div className="icons">
          <img src="https://i.imgur.com/yvj4mb5.jpg" alt="usdaIcon"></img>
          <img src="https://i.imgur.com/pnQMMOj.jpg" alt="henIcon"></img>
          <img src="https://i.imgur.com/N8RrapJ.jpg" alt="bowlIcon"></img>
        </div>
        <div className="iconDescription">
          <p>Organic Fresh Produce</p>
          <p>Responsibly sourced meats and seafoods</p>
          <p>Housemade sauces and spice blends</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
