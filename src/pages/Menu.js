import { useState, useEffect } from "react";

function Menu(props) {
  // create state to hold projects
  const [menu, setMenu] = useState(null);

  //create function to make api call
  const getMenuData = async () => {

		//make api call and get response
    const response = await fetch("./menu.json");

		// turn response into javascript object
    const data = await response.json();

		// set the projects state to the data
    setMenu(data);

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() =>{getMenuData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return menu.map((dish) => (
      <div>
        <h1>{dish.name}</h1>
        <img src={dish.image} alt=""/>
        <p>{dish.description}</p>
        
        <button>add to cart</button>
      
      </div>
    ));
  };

  return menu ? loaded() : <h1>Loading...</h1>;
}

export default Menu;