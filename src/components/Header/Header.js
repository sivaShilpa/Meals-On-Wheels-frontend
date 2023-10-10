
import { Link } from "react-router-dom";
import "./Header.css"


function Header(props) {  
  
  return (
    <header>       
        <div className="logo">            
            <Link href="/">
              <img src="https://i.imgur.com/CQgzHdV.jpg" alt="logo"></img>
            </Link>            
        </div>          
        <div className="business">            
            <Link to="/"><h1>Meals On Wheels</h1></Link>            
        </div>        
        <div className="navRight">            
          <div className="howItWorks">              
            <Link to="/HowItWorks" >
              How It Works
            </Link>            
          </div>
          <div className="menu">
            <Link href="/Menu">
              Menu
            </Link>
          </div>
          <div className="signin">
            <button><a className="signinLink" href="/SignIn">Sign in</a></button>
          </div>            
        </div>     
    </header> 
  );
}
  
export default Header;