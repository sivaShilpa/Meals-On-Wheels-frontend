import { Link } from "react-router-dom";
import "../App.css"

function Header(props) {

  return (
    <header class="main_h">
      <div class="row">
        <div class="mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav>
            <Link to="/"><div><img className="logo" src="https://i.imgur.com/CQgzHdV.jpg" alt="logo"></img></div></Link>
            <ul>                  
                <Link to="/HowItWorks"><div>How It Works</div></Link>
                <Link to="/Menu"><div>Menu</div></Link>                  
            </ul>
        </nav>

      </div>
    </header>


    // <header className="main_h">
    //   <h1>Meals On Wheels</h1>
    //   <nav className="navStyle">
    //     <Link to="/">
    //       <div><img className="logo" src="https://i.imgur.com/CQgzHdV.jpg" alt="logo"></img></div>
    //     </Link>
    //     <Link to="/HowItWorks">
    //       <div>How It Works</div>
    //     </Link>
    //     <Link to="/Menu">
    //       <div>Menu</div>
    //     </Link>
    //   </nav>
    // </header>
  );
}
  
export default Header;