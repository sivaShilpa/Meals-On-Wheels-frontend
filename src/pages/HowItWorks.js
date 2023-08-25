import { useState, useEffect } from "react";

function HowItWorks(props) {
  // create state to hold about data
  const [howItWorks, setHowItWorks] = useState(null);

  // create function to make api call
  const getHowItWorksData = async () => {

		// make api call and get response
    const response = await fetch("./howItWorks.json");

		// turn response into javascript object
    const data = await response.json();

		// set the about state to the data
    setHowItWorks(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getHowItWorksData() } , []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <h2>{howItWorks.title}</h2>
      <p>{howItWorks.message}</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return howItWorks ? loaded() : <h1>Loading...</h1>;
}

export default HowItWorks;
