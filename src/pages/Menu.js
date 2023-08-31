import { useState, useEffect } from "react";
import "../App.css"

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
    if(response.ok){
      setMenu(data);
    }
    

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() =>{getMenuData()}, []);

  // define a function that will return the JSX needed once we get the data
  // const loaded = () => {
  //   return menu.map((dish) => (      
  //       <div className="eachMenu">
  //         <h1>{dish.name}</h1>
  //         <img src={dish.image} alt=""/>
  //         <p>{dish.description}</p>
  //       </div>      
  //   ));
  // };

  // return (<div className="menuPage"> {menu} ? {loaded()} : <h1>Loading...</h1></div>);
  return(
    <div className="menuPage">
      <div className="eachMenu">
        {menu && menu.map((dish)=>(
          <div className="menuDetails">
            <h1 key={dish._id}>{dish.name}</h1>
            <img src={dish.image} alt=""/>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;