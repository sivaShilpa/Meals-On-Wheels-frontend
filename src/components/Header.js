import { Link } from "react-router-dom";
import "../App.css"

function Header(props) {

  return (
    <header>      
      <nav className="navbar">
        <div>
          <Link to="/">
            <div><img className="logo" src="https://i.imgur.com/CQgzHdV.jpg" alt="logo"></img></div>
          </Link>
        </div>
        <div>
          <h1>Meals On Wheels</h1>
        </div>
        <div className="navRight">
          <Link to="/HowItWorks">
            <div>How It Works</div>
          </Link>
          <Link to="/Menu">
            <div>Menu</div>
          </Link>
          <button>Sign in/Sign up</button>
        </div>       
      </nav>
    </header>
  );
}
  
export default Header;