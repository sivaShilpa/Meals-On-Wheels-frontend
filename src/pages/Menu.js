import { useState, useEffect } from "react";
import "../App.css"

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
        
        // setIsLoading(false)
      }catch(err){
          console.log(err)
      }   

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() =>{getMenuData()}, []);

  // define a function that will return the JSX needed once we get the data
   return (
    <div className="menuPage">
       <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">blogs</a></li>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">contact</a></li>
          </div>
        </div>
      </div>
      <div className="eachMenu">
        {menu && menu.map((meal)=>(
          <div className="menuDetails">
             <h1 key={meal._id}>{meal.name}</h1>
             <img className="mealImage" src={meal.image} alt=""/>
          </div>
        ))}
      </div>
    </div>);
  
}

export default Menu;

