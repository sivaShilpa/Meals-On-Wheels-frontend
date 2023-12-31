import { useState, useEffect } from "react";
import "../App.css"
import { Link } from "react-router-dom";


function Menu(props) {
  // create state to hold projects
  // const [isLoading, setIsLoading] = useState(true)
  const [menu, setMenu] = useState(null);
  const BASE_URL = "http://localhost:4000/Menu";

  //create function to make api call
  const getMenuData = async () => {
      try {
        const response = await fetch(BASE_URL)
        const allMeals = await response.json()
        if(response.ok){
          setMenu(allMeals)
        }        
      }catch(err){
          console.log(err)
      }
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() =>{getMenuData()}, []);

  // define a function that will return the JSX needed once we get the data
   return (
    <div className="menuPage">
       <div class="menunavbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="menu-items">
            <li>
              <h4>Cuisine</h4>              
              <div className="cuisineList">
                <select>
                  <option value="all">All</option>
                  <option value="african">African</option>
                  <option value="american">American</option>
                  <option value="asian">Asian</option>
                  <option value="canadian">Canadian</option>
                  <option value="egyptian">Egyptian</option>
                  <option value="european">European</option>
                  <option value="filipino">Filipino</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="guyanese">Guyanese</option>
                  <option value="hungarian">Hungarian</option>
                  <option value="indian">Indian</option>
                  <option value="irish">Irish</option>
                  <option value="italian">Italian</option>
                  <option value="jewish">Jewish</option>
                  <option value="mexican">Mexican</option>
                  <option value="moroccan">Moroccan</option>
                  <option value="pakistani">Pakistani</option>
                  <option value="spanish">Spanish</option>
                </select>
              </div>
            </li>
            <li>
              <h4>LifeStyle</h4>
              <div>
                <select>
                    <option value="all">All</option>
                    <option value="adult">Adult</option>
                    <option value="carb-consious">Carb-Conscious</option>
                    <option value="diabetesFriendly">Diabetes friendly</option>
                    <option value="gluten-freeFriendly">Gluten-free friendly</option>
                    <option value="mediterannean">Mediterannean</option>
                    <option value="non-vegetarian">Non-vegetarian</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                </select>
              </div>              
            </li>
            <li>
              <h4>Course</h4>
              <div>
                <select>
                  <option value="all">All</option>
                  <option value="adult">Adult</option>
                  <option value="appetizer">Appetizer</option>
                  <option value="beverage">Beverage</option>
                  <option value="condiment">Condiment</option>
                  <option value="Dessert">dessert</option>
                  <option value="entree">Entree</option>
                  <option value="side">Side</option>                  
                </select>
              </div>
            </li>
            <li>
              <h4>Time Of Meal</h4>
              <div>
                <select>
                  <option value="all">All</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                  
                </select>
              </div>
            </li>
          </div>
        </div>
      </div>
      <div className="eachMenu">
        {menu && menu.map((meal)=>(
          <Link className="menuDetails" to={`${meal._id}/details`}>
             <h1 key={meal._id}>{meal.name}</h1>
             <img className="mealImage" src={meal.image} alt=""/>
          </Link>
        ))}
      </div>
    </div>);
  
}

export default Menu;

