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
      <div className="eachMenu">
        {menu && menu.map((meal)=>(
          <div className="menuDetails">
             <h1 key={meal._id}>{meal.name}</h1>
             <img src={meal.image} alt=""/>
             <p>{meal.description}</p>
          </div>
        ))}
      </div>
    </div>);
  
}

export default Menu;

